import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { RiFileDownloadLine } from "react-icons/ri";
import { TbLocationShare } from "react-icons/tb";
import '../index.css'; 

function AnswerAnalysis({ isOpen, toggleOpen }) {
  const [isFullAnalysisHidden, setIsFullAnalysisHidden] = useState(false);

  const scores = [
    { value: 1.8, label: 'Cohesion & Coherence', color: '#F6944D' },
    { value: 7.8, label: 'Lexical Resource Analysis', color: '#40C2FC' },
    { value: 5.8, label: 'Grammatical Range', color: '#75C699' },
    { value: 1.8, label: 'Handling if more than 3', color: '#7B61FF' },
    { value: 7.8, label: 'Handling if more than 3', color: '#FDB338' },
    { value: 5.8, label: 'Handling if more than 3', color: '#6A4C93' },
  ];

  return (
    <div
      className={`element fixed top-0 right-0 h-full bg-white shadow-md border-l transition-transform duration-300 ${
        isOpen ? 'w-[30%]' : 'w-12'
      } overflow-y-auto`}
    >
      <button
        onClick={toggleOpen}
        className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900"
      >
        <div className="custom-icon-container">
          <FontAwesomeIcon icon={isOpen ? faChevronRight : faChevronLeft} className="custom-icon" />
        </div>
      </button>
      {isOpen && (
        <div>
          <div className="bg-[#5B6BE1] h-14 flex items-center p-2">
            <h2 className="text-[16px] font-[500] text-white flex-1 pl-4">Answer Analysis</h2>
          </div>
          <>
            <div className="mt-2">
              <h2 className="text-[16px] text-[#3F3F3F] pl-4 py-2">Score Analysis</h2>
            </div>
            <div className="flex justify-center mt-2 py-2 h-[76px] w-[396px] ml-4 pr-20 bg-[#5B6BE11A] rounded-[12px]">
              <div className="flex items-center justify-center">
                <CircularProgressbar
                  className="h-14 w-14"
                  value={4.8}
                  maxValue={10}
                  text={`${4.8}/10`}
                  styles={buildStyles({
                    textColor: "#5B6BE1",
                    pathColor: "#5B6BE1",
                    trailColor: "#d6d6d6",
                    strokeWidth: 8
                  })}
                />
              </div>
              <div className="ml-4 pt-3 text-center">
                <span className="text-xs md:text-sm text-[#5B6BE1] block">Overall band score</span>
                <span className="text-xs md:text-sm text-[#5B6BE1] block">4.8/10 (Needs improvement)</span>
              </div>
            </div>
            {!isFullAnalysisHidden && (
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
                        trailColor: "#d6d6d6",
                        strokeWidth: 64
                      })}
                    />
                    <span className="md:text-sm text-[#5F5F5F] text-[12px] mt-1 text-center">{score.label}</span>
                  </div>
                ))}
              </div>
            )}
            {!isFullAnalysisHidden && (
              <div className="mt-4 mx-3 p-6 bg-white border border-gray-200 rounded-md">
                <p className="text-[12px] text-[#5F5F5F] leading-[32px]">
                  Text score: 4.8 out of 10. This score represents the quality of writing in this document. You can increase it by addressing Grammarly's suggestions.
                </p>
              </div>
            )}
              {!isFullAnalysisHidden &&(
                <div className='mt-4 mx-3 p-6 bg-white border border-gray-200 rounded-md'>
                <div className='flex justify-between'>
                  <h2 className="text-[14px] text-[#3F3F3F] pl-2 py-2">Cohesion & Coherence</h2>
                  <h2 className='text-[#F6944D] h-6 w-6 font-bold bg-[#F6944D] bg-opacity-20 rounded-sm'>6.0</h2>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-white">
                    <span className="text-[14px] flex items-center justify-center h-6 w-6 font-bold text-white bg-[#FC5555] rounded-[4px]">6.0</span>
                    <span className="text-[14px] text-[#3F3F3F]">Sub part of coherence and cohesion</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-white">
                    <span className="text-[14px] flex items-center justify-center h-6 w-6 font-bold text-white bg-[#29CC6A] rounded-[4px]">6.0</span>
                    <span className="text-[14px] text-[#3F3F3F]">Sub part of coherence and cohesion</span>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <h2 className="text-[14px] text-[#3F3F3F] pl-2 py-2">Lexical Resource Analysis</h2>
                  <h2 className='text-[#40C2FC] h-6 w-6 font-bold bg-[#40C2FC] bg-opacity-20 rounded-sm'>6.0</h2>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-white">
                    <span className="text-[14px] flex items-center justify-center h-6 w-6  font-bold text-white bg-[#FC5555] rounded-[4px]">6.0</span>
                    <span className="text-[14px] text-[#3F3F3F]">Sub part of coherence and cohesion</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-white">
                    <span className="text-[14px] flex items-center justify-center h-6 w-6 font-bold text-white bg-[#29CC6A] rounded-[4px]">6.0</span>
                    <span className="text-[14px] text-[#3F3F3F]">Sub part of coherence and cohesion</span>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <h2 className="text-[14px] text-[#3F3F3F] pl-2 py-2">Grammatical Range</h2>
                  <h2 className='text-[#75C699] h-6 w-6 font-bold bg-[#75C699] bg-opacity-20 rounded-sm'>6.0</h2>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-white">
                    <span className="text-[14px] flex items-center justify-center h-6 w-6 font-bold text-white bg-[#FC5555] rounded-[4px]">6.0</span>
                    <span className="text-[14px] text-[#3F3F3F]">Sub part of coherence and cohesion</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-white">
                    <span className="text-[14px] flex items-center justify-center h-6 w-6 font-bold text-white bg-[#29CC6A] rounded-[4px]">6.0</span>
                    <span className="text-[14px] text-[#3F3F3F]">Sub part of coherence and cohesion</span>
                  </div>
                </div>
              </div>
              )}
              <div className="mt-4 p-2 bg-white rounded-lg flex justify-center">
                <button
                  onClick={() => setIsFullAnalysisHidden(!isFullAnalysisHidden)}
                  className="text-[10px] text-[#5B6BE1] no-underline flex items-center"
                >
                  {isFullAnalysisHidden ? 'Show full analysis' : 'Hide full analysis'}
                  <FontAwesomeIcon
                    icon={isFullAnalysisHidden ? faChevronDown : faChevronUp}
                    className="ml-1"
                  />
                </button>
              </div>
            <div className='mt-4 mx-3 p-6 bg-white border border-gray-200 rounded-md'>
              <h2 className="text-[16px] text-[#3F3F3F] pl-4 py-2">Text Analysis</h2>
              <div className='mt-4 mx-3 p-6 bg-white border border-gray-200 rounded-md'>
                <div className="grid grid-cols-1 gap-4 h-48">
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-red-100">
                    <span className="text-[14px] font-bold text-red-500 bg-white rounded-full">06</span>
                    <span className="text-xs md:text-sm text-red-500">Common mistakes found</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-purple-100">
                    <span className="text-[14px] font-bold text-purple-500 bg-white rounded-full">08</span>
                    <span className="text-xs md:text-sm text-purple-500">Repetitive words found</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-green-100">
                    <span className="text-[14px] font-bold text-green-500 bg-white rounded-full">12</span>
                    <span className="text-xs md:text-sm text-green-500">Suggestion for more effectiveness</span>
                  </div>
                </div>
              </div>
              <h2 className="text-[16px] text-[#3F3F3F] pl-4 py-2">Sharing and downloads</h2>
              <div className="flex items-center justify-between mb-4">
                <div className=' w-1/2 flex justify-center items-center space-x-2 p-2 mx-4 rounded-lg bg-blue-100'>
                  <RiFileDownloadLine color='#5B6BE1' />
                  <span className="text-[12px] text-[#5B6BE1]">Download Report</span>
                </div>

                <div className='w-1/2 flex justify-center items-center space-x-2 p-2 mx-4 rounded-lg bg-blue-100'>
                  <TbLocationShare color='#5B6BE1' />
                  <span className="text-[12px] text-[#5B6BE1]">Share on socials</span>
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </div>
  );
}

export default AnswerAnalysis;
