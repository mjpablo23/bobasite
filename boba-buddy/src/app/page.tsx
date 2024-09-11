import Title from "./_components/Title";
import Review from "./_components/Review";
import Img from "./_components/Img";
import CircleFeature from "./_components/CircleFeature";
import ScreenShot from "./_components/ScreenShot";
import Person from "./_components/Person";
import { bobaBuddy, bobaBuddyWording, podcastImgs, podcastLinks } from "./_components/ImgSrc";

export default function Home() {
  
  return (
    <div className="bg-[#fcbf6f] w-screen h-screen overflow-hidden flex justify-center">
      <div className="w-5/6 lg:w-2/3 h-full flex flex-col gap-y-2">
        <div className="w-full pb-4 flex flex-row">
          <div className="object-cover w-24 h-24">
            <img alt="boba buddy" src={bobaBuddy} />
          </div>
          <div className="object-cover flex items-center w-100 h-100">
            <img alt="boba buddy wording" src={bobaBuddyWording} />
          </div>
        </div>
      <div className="bg-[#fbecc8] rounded-t-2xl flex flex-col text-pup font-black text-2xl flex-1 overflow-y-auto">
        <div className="px-12 py-10">

          <Title number={"one"} title="Introduction"/>
          <div className="w-full flex flex-col md:flex-row lg:flex-row gap-x-2 gap-2">
            <div className="w-0 lg:w-1/3"></div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <Img title="apple"/>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
            <Img title="google"/>
            </div>
          </div>
          <div className="text-lg p-4">
            <div className="text-pretty">Boba Buddy is a mobile app designed to help users make informed decisions about their boba tea orders by providing ratings, comments, and personalized recommendations for drinks at boba shops.  This gives an average rating for each drink that reflects the quality of that drink. The app simplifies the decision-making process, allowing users to quickly choose a drink they’ll love based on reliable feedback from the community.  The personalized recommendations are unique for each user, by accounting for the drinks they’ve rated before and showing drinks that users similar to them liked.</div>
            <div className="pl-12">
              <ul className="list-disc">
                <li>Boba buddy is a mobile app</li>
                <li>Each item has a rating, making it easier to find the best item</li>
                <li>Generates recommendations for the items you have not tried yet</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row text-lg text-white">
          <Review name={"Tony"} text={"I used to get the same boba milk tea from the same store everyday, until boba buddy recommended me to try the grass jelly milk tea from another store, and that has become my new favorite drink!"}/> 
          <Review name={"Penny"} text={"I love boba drinks and often give recommendations to my friends on where to go and what to get. I like to write reviews on Google Maps, but I find my detailed reviews of each drink just gets lost in the pile of other generic reviews. I found that with Boba Buddy, I can review each drink and even upload photos for them, and I feel very satisfied that these comments are really helping others choose their next drink."}/> 
          </div>
          
          <Title number={"two"} title="App Features"/>
          <div className="flex flex-col lg:flex-row items-center w-full gap-2 p-4">
            <CircleFeature text="Drink Level data"/>
            <CircleFeature text="Personalized Recommendation"/>
            <CircleFeature text="Trend Analysis"/>
            <CircleFeature text="Partnerships"/>
            <CircleFeature text="Premium Features"/>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
              Array(6).fill(0).map((_, i) => {
                return (
                  <div key={i}>
                    <ScreenShot index={i}/>
                  </div>
                );
              })
            }
          </div>

          <Title number={""} title="Featured on:"/>
          <div className="flex flex-col md:flex-row lg:flex-row p-10 gap-2">
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <a href={podcastLinks["product-hunt"]} target="_blank">
                  <img className="h-36 object-cover rounded-lg" src={podcastImgs["product-hunt"]} alt="product-hunt" />
                </a>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <a href={podcastLinks["forward-thinking-founders"]} target="_blank">
                  <img className="object-fill h-36 rounded-lg" src={podcastImgs["forward-thinking-founders"]} alt="forward-thinking-founders" />
                </a>
              </div>
            
          </div>

          <Title number={"three"} title="Team"/>
          <Person label="paul" name="Paul Yang" position="CEO" description="Paul Yang has a background in software engineering.   Before founding Boba Buddy, he made several mobile apps which are in the iOS App Store and Android Play Store.  He led projects on machine learning, missile defense, and satellite simulation systems during 15 years of work experience at Lockheed Martin.  He graduated with a undergraduate degree in EECS from UC Berkeley, and a MS degree from UT Austin.  Paul was born in Taiwan, grew up in the US, and moved back to Taiwan in 2021. "/>
          <Person label="loid" name="Loi Cheng" position="CFO" description="Loi has over 15 years of diverse engineering experience. Committed to continuous learning, He holds three master's degrees, including an MBA from the University of Connecticut School of Business.  Loi has a gold card visa in Taiwan. "/>
          <Person label="sandra" name="Tsung-Min (Sandra) Chang" position="CMO" description="Sandra Chang graduated in 2024 from National Taiwan University with a degree in Chemical Engineering. During her time in college, she developed a strong interest in building web applications and aspired to join a startup company. Working with the Boba Buddy app gave her the chance to step beyond the technical aspects of coding and gain valuable insights into the broader picture of marketing and promoting digital products.  She is excited about the future and looks forward to what is yet to come."/>
          
        </div>
      </div>
      </div>
    </div>
  );
}
