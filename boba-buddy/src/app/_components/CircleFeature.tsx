type CircleFeatureProps = {
  text: string;
};

function CircleFeature({ text }: CircleFeatureProps) {
  return (
    <div className="w-4/5 md:w-2/5 lg:w-1/5 rounded-full aspect-square bg-orange-950 flex flex-col items-center justify-center p-2">
        <div className="text-lg text-center text-white">{text}</div>
    </div>
    
  );
}
export default CircleFeature;
