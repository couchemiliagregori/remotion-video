import { ReelTrial } from "./experiments/reel-v1/ReelTrial";
import { Composition } from "remotion";
import { ReelBase } from "./compositions/ReelBase";
import { REEL_VIDEO } from "./config/video";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="ReelBase"
        component={ReelBase}
        width={REEL_VIDEO.width}
        height={REEL_VIDEO.height}
        fps={REEL_VIDEO.fps}
        durationInFrames={REEL_VIDEO.durationInFrames}
      />
      <Composition
        id="ReelTrialV1"
        component={ReelTrial}
        width={1080}
        height={1920}
        fps={30}
        durationInFrames={1624}
      />
    </>
  );
};
