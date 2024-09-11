
type ReviewProps = {
  text: string;
  name: string;
};

function Review({ text, name }: ReviewProps) {
  return (
    <div className="w-full lg:w-1/2 bg-orange-800	m-4 px-6 py-4 rounded-lg">
            {`"${text}"`}- {name}
            </div>
  );
}
export default Review;
