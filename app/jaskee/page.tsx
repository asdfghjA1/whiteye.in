"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

interface Feedback {
  id: string;
  username: string;
  rating: string;
}

const FeedbackCard: React.FC<Feedback> = ({ id, username, rating }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 border border-gray-700 smooth-edges">
      <h2 className="text-2xl font-bold mb-2">{username || "Anonymous"}</h2>
      <p className="text-sm text-gray-400 mb-4">Feedback ID: {id}</p>
      <div className="flex items-center justify-between">
        <p className="text-lg">Rating:</p>
        <span className="text-yellow-400 text-xl font-semibold bg-gray-950 px-3 py-1 rounded-full">
          {rating || "N/A"}
        </span>
      </div>
    </div>
  );
};

export default function JaskeePage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("/pages/api/feedbacks");
        setFeedbacks(response.data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (isLoading) {
    return <div className="text-white text-2xl font-bold animate-pulse">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700">All Feedbacks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
    </div>
  );
}
