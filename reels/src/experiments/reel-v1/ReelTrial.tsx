import { Video } from "@remotion/media";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// Edición de prueba aislada de la base reutilizable.
export const ReelTrial = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <AbsoluteFill
        style={{
          scale: interpolate(
            frame,
            [0, 450, 900, 1302, 1619],
            [1, 1.025, 1, 1.025, 1],
            { extrapolateRight: "clamp" },
          ),
          transformOrigin: "48% 40%",
        }}
      >
        <Sequence durationInFrames={1302}>
          <Video
            src={staticFile("videos/reel-v1-source.mp4")}
            trimBefore={0}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Sequence>
        <Sequence from={1302} durationInFrames={30}>
          <Video
            src={staticFile("videos/reel-v1-source.mp4")}
            trimBefore={1319}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Sequence>
        <Sequence from={1332} durationInFrames={234}>
          <Video
            src={staticFile("videos/reel-v1-source.mp4")}
            trimBefore={1361}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Sequence>
        <Sequence from={1566} durationInFrames={58}>
          <Video
            src={staticFile("videos/reel-v1-source.mp4")}
            trimBefore={1611}
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
