import ThumbsUp from "../assets/thumbs-up.png";
import ThumbsDown from "../assets/thumbs-down.png";

interface ThumbsButtonProps {
  thumbsup: boolean;
  onClick: () => void;
}

const ThumbsButton = ({ thumbsup, onClick }: ThumbsButtonProps) => {
  const getImg = () => {
    if (thumbsup) {
      return ThumbsUp;
    } else {
      return ThumbsDown;
    }
  };

  return (
    <button
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-gray-200 transition-shadow duration-300"
      onClick={onClick}
    >
      <img src={getImg()} alt="thumbs" className="w-6 h-6" />
    </button>
  );
};

export default ThumbsButton;
