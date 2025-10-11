"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const LampContainer = ({ children, className, compact = false }) => {
  const compactStyles = compact ? {
    container: "h-[120px]",
    height: "h-24",                // inner gradient height
    width: "w-[20rem]",
    initialWidth: "10rem",
    finalWidth: "20rem",
    maskHeight: "h-16",
    maskWidth: "w-16",
    blurHeight: "h-24",
    blurTranslate: "translate-y-6",
    glowHeight: "h-16",
    glowWidth: "w-[18rem]",
    innerGlowHeight: "h-16",
    innerGlowWidth: "w-48",
    innerGlowInitial: "6rem",
    innerGlowFinal: "12rem",
    innerGlowTranslate: "-translate-y-[3rem]",
    lineWidth: "w-[20rem]",
    lineInitial: "10rem",
    lineFinal: "20rem",
    lineTranslate: "-translate-y-[4rem]",
    topMask: "h-20",
    topMaskTranslate: "-translate-y-[5.5rem]",
    childrenTranslate: ""         // not used for compact (we center instead)
  } : {
    container: "min-h-screen",
    height: "h-56",
    width: "w-[30rem]",
    initialWidth: "15rem",
    finalWidth: "30rem",
    maskHeight: "h-40",
    maskWidth: "w-40",
    blurHeight: "h-48",
    blurTranslate: "translate-y-12",
    glowHeight: "h-36",
    glowWidth: "w-[28rem]",
    innerGlowHeight: "h-36",
    innerGlowWidth: "w-64",
    innerGlowInitial: "8rem",
    innerGlowFinal: "16rem",
    innerGlowTranslate: "-translate-y-[6rem]",
    lineWidth: "w-[30rem]",
    lineInitial: "15rem",
    lineFinal: "30rem",
    lineTranslate: "-translate-y-[7rem]",
    topMask: "h-44",
    topMaskTranslate: "-translate-y-[12.5rem]",
    childrenTranslate: "-translate-y-80"
  };

  // overflow visible for compact so glows/blur aren't clipped
  const overflowClass = compact ? "overflow-visible" : "overflow-hidden";
  // center children vertically when compact
  const childrenPositionClass = compact ? "h-full justify-center" : compactStyles.childrenTranslate;

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-gray-800/40 w-full rounded-2xl z-0 border-1",
        compactStyles.container,
        overflowClass,
        className
      )}>
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: compactStyles.initialWidth }}
          whileInView={{ opacity: 1, width: compactStyles.finalWidth }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={cn(
            "absolute inset-auto right-1/2 overflow-visible bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]",
            compactStyles.height,
            compactStyles.width
          )}>
          <div
            className={cn(
              "absolute w-[100%] left-0 bg-gray-800/40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]",
              compactStyles.maskHeight
            )} />
          <div
            className={cn(
              "absolute h-[100%] left-0  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]",
              compactStyles.maskWidth
            )} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: compactStyles.initialWidth }}
          whileInView={{ opacity: 1, width: compactStyles.finalWidth }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={cn(
            "absolute inset-auto left-1/2 bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]",
            compactStyles.height,
            compactStyles.width
          )}>
          <div
            className={cn(
              "absolute h-[100%] right-0 bottom-0 z-20  [mask-image:linear-gradient(to_left,white,transparent)]",
              compactStyles.maskWidth
            )} />
          <div
            className={cn(
              "absolute w-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]",
              compactStyles.maskHeight
            )} />
        </motion.div>

        <div
          className={cn(
            "absolute top-1/2 w-full scale-x-150 blur-2xl",
            compactStyles.blurHeight,
            compactStyles.blurTranslate
          )} />

        <div
          className={cn(
            "absolute top-1/2 z-50 w-full bg-transparent opacity-10 backdrop-blur-md",
            compactStyles.blurHeight
          )} />

        <div
          className={cn(
            "absolute inset-auto z-50 -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl",
            compactStyles.glowHeight,
            compactStyles.glowWidth
          )} />

        <motion.div
          initial={{ width: compactStyles.innerGlowInitial }}
          whileInView={{ width: compactStyles.innerGlowFinal }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute inset-auto z-30 rounded-full bg-cyan-400 blur-2xl",
            compactStyles.innerGlowHeight,
            compactStyles.innerGlowWidth,
            compactStyles.innerGlowTranslate
          )} />

        <motion.div
          initial={{ width: compactStyles.lineInitial }}
          whileInView={{ width: compactStyles.lineFinal }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute inset-auto z-50 h-0.5 bg-cyan-400",
            compactStyles.lineWidth,
            compactStyles.lineTranslate
          )} />

        <div
          className={cn(
            "absolute inset-auto z-40 w-full",
            compactStyles.topMask,
            compactStyles.topMaskTranslate
          )} />
      </div>

      <div className={cn(
        "relative z-50 flex flex-col items-center px-5",
        childrenPositionClass
      )}>
        {children}
      </div>
    </div>
  );
};
