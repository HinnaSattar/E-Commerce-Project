import React from "react";
import { Star, StarHalf, Star as StarOutline } from "lucide-react";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<Star key={i} size={16} className="text-yellow-500 inline" />);
    } else {
      stars.push(<StarOutline key={i} size={16} className="text-gray-300 inline" />);
    }
  }

  return <div className="flex gap-0.5">{stars}</div>;
};

export default StarRating;
