import React, { useState, useEffect } from 'react';
import AnswerAnalysis from "../components/AnswerAnalysis";
import '../index.css';

function QuestionPage() {
  const [isAnswerAnalysisOpen, setIsAnswerAnalysisOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  const toggleAnswerAnalysis = () => {
    setIsAnswerAnalysisOpen(!isAnswerAnalysisOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row h-full">
      <div
        className={`element transition-transform duration-300 flex-1 overflow-auto ${
          isAnswerAnalysisOpen && !isMobile ? 'transform translate-x-[-15%]' : ''
        }`}
      >
        <div className="w-full md:w-[70%] max-w-[1500px] mx-auto bg-white mt-4 p-4 rounded-sm">
          <div className="flex flex-col">
            <div className="w-full h-[66px] space-y-2 text-sm">
              <h2 className="text-[20px] font-[500px] text-[#3F3F3F]">Question</h2>
              <p className="font-[500px] text-base leading-relaxed mb-1 tracking-wide text-[#5F5F5F]">
                With advanced technology and the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the universe?
              </p>
            </div>
            <div className="flex justify-between mb-4 mt-1">
              <h2 className="text-[16px] font-[500px] text-[#000000]">Answered by you</h2>
              <section className="flex items-center text-[14px] space-x-3 font-[400px] text-[#5B6BE1]">
                <span className="whitespace-nowrap">107 words</span>
                <span className="whitespace-nowrap">1075 letters</span>
                <span className="whitespace-nowrap">4 paragraphs</span>
              </section>
            </div>
            <div className="w-full h-auto gap-4 space-y-4 border border-gray-200 p-4 rounded-lg mb-16">
              <div className="text-[#5F5F5F]">
              <p className="font-[400] text-base leading-[40px] mb-4 tracking-wide">
                  In the year 2137, humanity had made incredible strides in space exploration. With advanced technology and
                  the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the universe.
                  Elara was a seasoned astronaut, known for her courage and <span className="underline text-red-500">determination</span> in the face of unknown dangers.
                  She had led countless missions, but none compared to the journey she was about to embark on.
                </p>
                <p className="font-[400] text-base leading-[40px] mb-4 tracking-wide">
                  Eos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red moon
                  had captured the <span className="underline text-yellow-500">attention of scientists</span> and adventurers alike. Many were drawn to its beauty, while
                  others were intrigued by its potential resources. But Elara's mission was different. She was sent to explore
                  and document the planet's <span className="underline text-violet-500">secrets, with the hope of finding a new home for humanity</span>.
                </p>
                <p className="font-[400] text-base leading-[40px] mb-4 tracking-wide">
                  In the year 2137, humanity had made incredible strides in space exploration. With advanced technology and
                  the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the universe.
                  Elara was a seasoned astronaut, known for her courage and <span className="underline text-red-500">determination</span> in the face of unknown dangers.
                  She had led countless missions, but none compared to the journey she was about to embark on.
                </p>
                <p className="font-[400] text-base leading-[40px] mb-4 tracking-wide">
                  Eos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red moon
                  had captured the <span className="underline text-yellow-500">attention of scientists</span> and adventurers alike. Many were drawn to its beauty, while
                  others were intrigued by its potential resources. But Elara's mission was different. She was sent to explore
                  and document the planet's <span className="underline text-violet-500">secrets, with the hope of finding a new home for humanity</span>.
                </p>
                <p className="font-[400] text-base leading-[40px] mb-4 tracking-wide">
                  In the year 2137, humanity had made incredible strides in space exploration. With advanced technology and
                  the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the universe.
                  Elara was a seasoned astronaut, known for her courage and <span className="underline text-red-500">determination</span> in the face of unknown dangers.
                  She had led countless missions, but none compared to the journey she was about to embark on.
                </p>
                <p className="font-[400] text-base leading-[40px] mb-4 tracking-wide">
                  Eos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red moon
                  had captured the <span className="underline text-yellow-500">attention of scientists</span> and adventurers alike. Many were drawn to its beauty, while
                  others were intrigued by its potential resources. But Elara's mission was different. She was sent to explore
                  and document the planet's <span className="underline text-violet-500">secrets, with the hope of finding a new home for humanity</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnswerAnalysis isOpen={isAnswerAnalysisOpen} toggleOpen={toggleAnswerAnalysis} isMobile={isMobile} />
    </div>
  );
}

export default QuestionPage;


