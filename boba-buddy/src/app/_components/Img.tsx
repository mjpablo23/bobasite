import { ImgSrc, ImgLink } from "./ImgSrc";
type ImgProps = {
  title: string;
};

function Img({ title }: ImgProps) {
  return (
    <a href={ImgLink[title]} target="_blank">
        <img className="rounded-lg" src={`data:image/png;base64,${ImgSrc[title]}`} alt={title}/>
    </a>
  );
}
export default Img;
