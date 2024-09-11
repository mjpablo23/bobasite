import { screenShots } from "./ImgSrc";
type ScreenShotProps = {
  index: number;
};

function ScreenShot({ index }: ScreenShotProps) {
  return (
    <img alt={index.toString()} src={screenShots[index]} />
  );
}
export default ScreenShot;
