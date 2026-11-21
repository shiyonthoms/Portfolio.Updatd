import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F7F4EF",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "9999px",
              backgroundColor: "#111111",
            }}
          />
          <div
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#111111",
              letterSpacing: "-0.02em",
            }}
          >
            Shiyon Thomas
          </div>
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#111111",
            letterSpacing: "-0.03em",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Adobe Campaign Developer &amp; MarTech Systems Architect
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "#52504C",
            marginTop: "28px",
            fontWeight: 400,
          }}
        >
          Adobe Certified Expert • Associate Consultant at Capgemini
        </div>
      </div>
    ),
    { ...size }
  );
}
