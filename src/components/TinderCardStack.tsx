import { useState } from 'react';
import TinderCard from './TinderCard.tsx';
import type { Match } from '../types/Match';

interface TinderCardStackProps {
  matches: Match[];
}

export default function TinderCardStack({ matches }: TinderCardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleResponse = (liked: boolean) => {
    console.log(`User ${liked ? 'liked' : 'disliked'} ${matches[currentIndex].firstName}`);
    if (currentIndex < matches.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log('No more matches!');
    }
  };

  if (currentIndex >= matches.length) {
    return <div className="text-center p-4">No more potential matches!</div>;
  }

  return (
    <div className="tinder-card-stack">
      <TinderCard 
        match={matches[currentIndex]} 
        onThumbsUp={() => handleResponse(true)}
        onThumbsDown={() => handleResponse(false)}
      />
    </div>
  );
}