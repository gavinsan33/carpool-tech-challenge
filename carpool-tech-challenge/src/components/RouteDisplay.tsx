import destination from '../assets/destination.png';

interface RouteDisplayProps {
  startLocation: string;
  endLocation: string;
  startDistanceDelta: number;
  endDistanceDelta: number;
}

const RouteDisplay = ({ 
  startLocation, 
  endLocation, 
  startDistanceDelta, 
  endDistanceDelta 
}: RouteDisplayProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative flex items-center justify-between w-full max-w-[280px] py-1">
        {/* Source Circle with Text Container */}
        <div className="relative flex flex-col items-center min-w-[100px]">
          <div className="w-5 h-5 bg-green-500 rounded-full shadow-md"></div>
            <div className="flex flex-col items-center mt-2">
            <p className="text-sm font-medium">{startLocation}</p>
            <p className="text-xs text-gray-200">Δ{startDistanceDelta}mi</p>
            </div>
        </div>

        {/* Connecting Line */}
        <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>

        {/* Destination Icon with Text Container */}
        <div className="relative flex flex-col items-center min-w-[100px]">
          <img 
            src={destination} 
            alt="destination" 
            className="w-6 h-6 drop-shadow-md"
          />
            <div className="mt-2 text-center w-full">
            <p className="text-sm font-medium">{endLocation}</p>
            <p className="text-xs text-gray-200">Δ{endDistanceDelta}mi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteDisplay;