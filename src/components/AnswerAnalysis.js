import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';

function AnswerAnalysis(){
    const [isRotated, setIsRotated] = useState(false);
  
    const handleClick = () => {
      setIsRotated(!isRotated);
    };
  const scores = [
    { value: 1.8, label: 'Cohesion & Coherence', color: '#F6944D' }, 
    { value: 7.8, label: 'Lexical Resource Analysis', color: '#40C2FC' },
    { value: 5.8, label: 'Grammatical Range', color: '#75C699' },
    { value: 1.8, label: 'Handling if more than 3', color: '#7B61FF' }, 
    { value: 7.8, label: 'Handling if more than 3', color: '#FDB338' },
    { value: 5.8, label: 'Handling if more than 3', color: '#6A4C93' },
  ];

  return (
    <>
      <div className="w-full sm:w-[70%] md:w-[50%] lg:w-[40%] max-w-[500px] mx-auto bg-white border border-gray-300 mb-16 p-4 rounded-lg shadow-md">
      <div className="bg-blue-600 h-12 flex items-center p-2 rounded-t-lg">
      <h2 className="text-lg text-white font-semibold flex-1">Answer Analysis</h2>
      <svg
        className={`w-4 h-4 text-white ml-1 cursor-pointer transform transition-transform duration-200 ease-in-out ${isRotated ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>

        <div className="mt-2">
          <h2 className="text-lg text-black font-semibold mx-2">Score Analysis</h2>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex items-center p-2 rounded-lg bg-blue-100">
            <CircularProgressbar
              className="h-14 w-14"
              value={4.8}
              maxValue={10}
              text={`${4.8}/10`}
              styles={buildStyles({
                textColor: "#5B6BE1",
                pathColor: "#5B6BE1",
                trailColor: "#d6d6d6"
              })}
            />
            <div className="ml-4">
              <span className="text-xs md:text-sm text-blue-500 block">Overall band score</span>
              <span className="text-xs md:text-sm text-blue-500">4.8/10 (Needs improvement)</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {scores.map((score, index) => (
            <div key={index} className="flex flex-col items-center p-2 rounded-lg bg-gray-50">
              <CircularProgressbar
                className="h-14 w-14"
                value={score.value}
                maxValue={10}
                text={`${score.value}`}
                styles={buildStyles({
                  textColor: score.color,
                  pathColor: score.color,
                  trailColor: "#d6d6d6"
                })}
              />
              <span className="text-xs md:text-sm text-gray-500 mt-1 text-center">{score.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-2 bg-gray-100 rounded-lg">
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed tracking-widest">
            Text score: 4.8 out of 10. This score represents the quality of writing in this document. You can increase it by addressing Grammarly's suggestions.
          </p>
        </div>
        <h2 className="text-lg font-bold mt-6 mb-2">Cohesion & Coherence</h2>
        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center justify-between p-2 rounded-lg bg-white">
            <span className="text-xs md:text-sm font-bold text-red-500">6.0</span>
            <span className="text-xs md:text-sm text-gray-500">Sub part of coherence and cohesion</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-white">
            <span className="text-xs md:text-sm font-bold text-green-500">60</span>
            <span className="text-xs md:text-sm text-gray-500">Sub part of coherence and cohesion</span>
          </div>
        </div>
        <h2 className="text-lg font-bold mt-6 mb-2">Lexical Resource Analysis</h2>
        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center justify-between p-2 rounded-lg bg-white">
            <span className="text-xs md:text-sm font-bold text-red-500">6.0</span>
            <span className="text-xs md:text-sm text-gray-500">Sub part of coherence and cohesion</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-white">
            <span className="text-xs md:text-sm font-bold text-green-500">60</span>
            <span className="text-xs md:text-sm text-gray-500">Sub part of coherence and cohesion</span>
          </div>
        </div>
        <h2 className="text-lg font-bold mt-6 mb-2">Grammatical Range</h2>
        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center justify-between p-2 rounded-lg bg-white">
            <span className="text-xs md:text-sm font-bold text-red-500">6.0</span>
            <span className="text-xs md:text-sm text-gray-500">Sub part of coherence and cohesion</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-white">
            <span className="text-xs md:text-sm font-bold text-green-500">60</span>
            <span className="text-xs md:text-sm text-gray-500">Sub part of coherence and cohesion</span>
          </div>
        </div>
        <div className="mt-4 p-2 bg-gray-100 rounded-lg flex justify-center">
          <button className="text-xs md:text-sm text-blue-500 hover:underline flex items-center">
            Hide full analysis
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <h2 className="text-lg font-bold mt-6 mb-2">Text Analysis</h2>
        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center justify-between p-2 rounded-lg bg-red-100">
            <span className="text-xs md:text-sm font-bold text-red-500">06</span>
            <span className="text-xs md:text-sm text-gray-500">Common mistakes found</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-purple-100">
            <span className="text-xs md:text-sm font-bold text-purple-500">08</span>
            <span className="text-xs md:text-sm text-gray-500">Repetitive words found</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-green-100">
            <span className="text-xs md:text-sm font-bold text-green-500">12</span>
            <span className="text-xs md:text-sm text-gray-500">Suggestion for more effectiveness</span>
          </div>
        </div>
        <h2 className="text-lg font-bold mt-6 mb-2">Sharing and downloads</h2>
        <div className="flex items-center justify-between p-2 rounded-lg bg-blue-100">
          <span className="text-xs md:text-sm font-bold text-blue-500">Download Report</span>
          <span className="text-xs md:text-sm font-bold text-blue-500">Share on socials</span>
        </div>
      </div>
    </>
  );
}

export default AnswerAnalysis;
