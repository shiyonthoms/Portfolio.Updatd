"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover",
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    let interval;
    let currentIteration = 0;

    const getNextIndex = (revealedSet) => {
      const len = text.length;

      switch (revealDirection) {
        case "start":
          return revealedSet.size;

        case "end":
          return len - 1 - revealedSet.size;

        case "center": {
          const center = Math.floor(len / 2);
          const offset = Math.floor(revealedSet.size / 2);
          const idx =
            revealedSet.size % 2 === 0
              ? center + offset
              : center - offset - 1;

          if (!revealedSet.has(idx) && idx >= 0 && idx < len) return idx;

          for (let i = 0; i < len; i++) {
            if (!revealedSet.has(i)) return i;
          }
        }
      }

      return revealedSet.size;
    };

    const availableChars = useOriginalCharsOnly
      ? [...new Set(text)].filter((c) => c !== " ")
      : characters.split("");

    const shuffle = (orig, revealed) =>
      orig
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (revealed.has(i)) return orig[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join("");

    if (isHovering) {
      setIsScrambling(true);

      interval = setInterval(() => {
        setRevealedIndices((prev) => {
          if (sequential) {
            if (prev.size < text.length) {
              const next = getNextIndex(prev);
              const nextSet = new Set(prev).add(next);
              setDisplayText(shuffle(text, nextSet));
              return nextSet;
            } else {
              clearInterval(interval);
              setIsScrambling(false);
              return prev;
            }
          } else {
            setDisplayText(shuffle(text, prev));
            currentIteration++;
            if (currentIteration >= maxIterations) {
              clearInterval(interval);
              setIsScrambling(false);
              setDisplayText(text);
            }
            return prev;
          }
        });
      }, speed);
    } else {
      setDisplayText(text);
      setRevealedIndices(new Set());
      setIsScrambling(false);
    }

    return () => interval && clearInterval(interval);
  }, [
    isHovering,
    text,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    characters,
    useOriginalCharsOnly,
  ]);

  useEffect(() => {
    if (animateOn !== "view" && animateOn !== "both") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !hasAnimated) {
            setIsHovering(true);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () =>
      containerRef.current && observer.unobserve(containerRef.current);
  }, [animateOn, hasAnimated]);

  const hoverProps =
    animateOn === "hover" || animateOn === "both"
      ? {
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false),
        }
      : {};

  return (
    <motion.span
      ref={containerRef}
      {...hoverProps}
      {...props}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
    >
      <span aria-hidden="true">
        {displayText.split("").map((char, i) => {
          const revealed = revealedIndices.has(i) || !isScrambling || !isHovering;
          return (
            <span key={i} className={revealed ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}

export default DecryptedText;
