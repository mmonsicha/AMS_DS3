/**
 * Custom component — DS3 Gap filed at GitHub Issue #2
 * Oc2plus app logo: composite of 10 PNG layers from Figma node 476:33163
 * All positions expressed as percentages of the container size (default 72px)
 */
import imgV2   from "../../assets/logo-oc2plus-v2.png";
import imgV3   from "../../assets/logo-oc2plus-v3.png";
import imgV4   from "../../assets/logo-oc2plus-v4.png";
import imgV5   from "../../assets/logo-oc2plus-v5.png";
import imgV6   from "../../assets/logo-oc2plus-v6.png";
import imgV7   from "../../assets/logo-oc2plus-v7.png";
import imgV8   from "../../assets/logo-oc2plus-v8.png";
import imgV9   from "../../assets/logo-oc2plus-v9.png";
import imgMask from "../../assets/logo-oc2plus-mask.png";
import imgFace from "../../assets/logo-oc2plus-face.png";

// [top%, left%, right%, bottom%] as fractions — derived from Figma inset values
const LAYERS: { src: string; t: number; l: number; r: number; b: number }[] = [
  { src: imgV2, t: 0.1250, l: 0.1750, r: 0.1738, b: 0.1250 }, // body outline
  { src: imgV3, t: 0.4037, l: 0.2528, r: 0.2605, b: 0.4201 }, // face feature 1
  { src: imgV5, t: 0.4117, l: 0.2750, r: 0.2826, b: 0.4282 }, // face feature 2
  { src: imgV4, t: 0.3779, l: 0.4726, r: 0.4760, b: 0.5736 }, // nose dot
  { src: imgV6, t: 0.4376, l: 0.5658, r: 0.3448, b: 0.4731 }, // right arm
  { src: imgV7, t: 0.4587, l: 0.5730, r: 0.3672, b: 0.4815 }, // right arm detail
  { src: imgV8, t: 0.4376, l: 0.3392, r: 0.5714, b: 0.4731 }, // left arm
  { src: imgV9, t: 0.4587, l: 0.3616, r: 0.5785, b: 0.4815 }, // left arm detail
];

const p = (v: number) => `${v * 100}%`;

export function Oc2plusLogo({ size = 72 }: { size?: number }) {
  return (
    <div style={{ height: size, position: "relative", width: size }}>
      {LAYERS.map(({ src, t, l, r, b }, i) => (
        <img
          key={i}
          alt=""
          src={src}
          style={{ bottom: p(b), left: p(l), position: "absolute", right: p(r), top: p(t) }}
        />
      ))}
      {/* Masked face/eye group */}
      <div style={{
        bottom: p(0.5332),
        left: p(0.2249),
        maskImage: `url(${imgMask})`,
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
        position: "absolute",
        right: p(0.2323),
        top: p(0.1250),
        WebkitMaskImage: `url(${imgMask})`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
      }}>
        <img alt="" src={imgFace} style={{ display: "block", height: "100%", width: "100%" }} />
      </div>
    </div>
  );
}
