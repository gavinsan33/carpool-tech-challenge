import ThumbsButton from "./ThumbsButton";
import type { Match } from "../types/Match";
import RouteDisplay from "./RouteDisplay";

interface TinderCardProps {
  match: Match;
  onThumbsUp: () => void;
  onThumbsDown: () => void;
}

const TinderCard = ({ match, onThumbsUp, onThumbsDown }: TinderCardProps) => {
  const getMockProfile = () => {
    return `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`;
  };

  const getMockCar = () => {
    const options = [
      "https://i.redd.it/l41cyb06ahgb1.jpg",
      "https://i.redd.it/sj4zbe803uz41.jpg",
      "https://i.redd.it/8wiqpgdinbg91.jpg",
      "https://i.redd.it/9gq148c02job1.jpg",
      "https://i.redd.it/kf2c6o47rc751.jpg",
    ];
    return options[Math.floor(Math.random() * options.length)];
  }

  return (
    <div className="relative w-80 h-140 rounded-xl overflow-hidden shadow-xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={getMockCar()} 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/80" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col p-4 text-white">
        {/* Header Section */}
        <div className="flex items-center space-x-4">
          <img 
            src={getMockProfile()} 
            className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
          />
          <div className="bg-black/10 backdrop-blur-sm rounded-lg shadow-lg mx-4 p-2">
            <h2 className="text-xl font-bold">
              {match.firstName} {match.lastName}
            </h2>
            <p className="text-sm text-gray-200">{match.employer}</p>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Bottom Section */}
        <div className="space-y-4">
          {/* Route Display */}
          <RouteDisplay 
            startLocation={match.startLocation}
            endLocation={match.endLocation}
            startDistanceDelta={match.startDistanceDelta}
            endDistanceDelta={match.endDistanceDelta}
            containerProps="bg-white/20 backdrop-blur-sm rounded-lg shadow-lg p-2"
          />

          {/* Action Buttons */}
          <div className="flex justify-center space-x-6 mt-4">
            <ThumbsButton thumbsup={false} onClick={onThumbsDown} />
            <ThumbsButton thumbsup={true} onClick={onThumbsUp} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinderCard;