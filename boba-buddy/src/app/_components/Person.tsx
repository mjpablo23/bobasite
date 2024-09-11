import { teamProfile } from "./ImgSrc";
type PersonProps = {
    name: string;
    position: string;
    description: string;
    label: string;
};

function Person({ name, position, description, label }: PersonProps) {
  return (
    <div className="p-4 flex flex-col lg:flex-row">
        <div className="w-3/4 md:w-1/2 lg:w-1/4 flex justify-center items-center">
            <img className="rounded-full aspect-square object-cover" src={teamProfile[label]} alt={label} />
        </div>
        <div className="w-full lg:w-3/4 text-pup flex flex-col justify-center p-4 lg:p-8">
            <div className="text-2xl font-bold">{name}, {position}</div>
            <div className="text-lg text-balance">{description}</div>
        </div>
    </div>
  );
}
export default Person;