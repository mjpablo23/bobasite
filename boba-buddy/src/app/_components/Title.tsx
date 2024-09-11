
type TitleProps = {
  title: string;
  number: string;
};

function Title({ number, title }: TitleProps) {
  return (
    <div className="h-16 w-full flex flex-row items-center">
      <div className="rounded-full h-12 aspect-squares bg-orange-700">
      <span id={`noto-v1--digit-${number}`}/>
      </div>
      <div className="flex w-full pl-4 items-center">{title}</div>
    </div>
  );
}
export default Title;
