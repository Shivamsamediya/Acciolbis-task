import React from 'react';

function QuestionPage() {
  return (
    <>
      <div className="w-[90%] md:w-[70%] max-w-[1200px] mx-auto bg-white mt-2 p-4 rounded-lg shadow-md">
        <div className='flex flex-col'>
          <div className="w-full h-[108px] gap-4 space-y-4 text-sm">
            <h2 className='text-lg font-bold text-gray-500'>Question</h2>
            <p className='font-semibold text-base leading-relaxed mb-6 tracking-widest text-gray-500'>
              With advanced technology and the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the universe?
            </p>
          </div>

          <div className="w-full h-auto gap-4 space-y-8">
            <div className='flex justify-between items-center mt-4 md:mt-0'>
              <h2 className='text-lg font-bold text-gray-500'>Answer by you</h2>
              <section className='flex items-center space-x-3 text-blue-500'>
                <span className='whitespace-nowrap'>1,07 words</span>
                <span className='whitespace-nowrap'>1,075 letters</span>
                <span className='whitespace-nowrap'>4 paragraphs</span>
              </section>
            </div>
            <div className='text-gray-500'>
              <p className="font-normal text-base leading-relaxed mb-6 tracking-widest">
                In the year 2137, humanity had made incredible strides in space exploration. With advanced technology
                and the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the universe.
                Elara was a seasoned astronaut, known for her courage and <span className="underline text-red-500">deterination</span> in the face of unknown dangers.
                She had led countless missions, but none compared to the journey she was about to embark on.
              </p>
              <p className="font-normal text-base leading-relaxed mb-6 tracking-widest">
                Eos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red
                moon had captured the <span className="underline text-yellow-500">attention of scientists</span> and adventurers alike. Many were drawn to its beauty, while
                others were intrigued by its potential resources. But Elara's mission was different. She was sent to explore
                and document the planet's <span className="underline text-violet-500">secrets, with the hope of finding a new home for humanity</span>.
              </p>
              <p className="font-normal text-base leading-relaxed mb-6 tracking-widest">
                In the year 2137, humanity had made incredible strides in space exploration. With advanced technology
                and the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the universe.
                Elara was a seasoned astronaut, known for her courage and <span className="underline text-red-500">determination</span> in the face of unknown dangers.
                She had led countless missions, but none compared to the journey she was about to embark on.
              </p>
              <p className="font-normal text-base leading-relaxed mb-6 tracking-widest">
                Eos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red
                moon had captured the <span className="underline text-yellow-500">attention of scientists</span> and adventurers alike. Many were drawn to its beauty, while
                others were intrigued by its potential resources. But Elara's mission was different. She was sent to explore
                and document the planet's <span className="underline text-violet-500">secrets, with the hope of finding a new home for humanity</span>.
              </p>
              <p className="font-normal text-base leading-relaxed mb-6 tracking-widest">
                In the year 2137, humanity had made incredible strides in space exploration. With advanced technology
                and the tenacity of pioneers like Captain Elara Voss, humans had reached the far corners of the universe.
                Elara was a seasoned astronaut, known for her courage and <span className="underline text-red-500">determination</span> in the face of unknown dangers.
                She had led countless missions, but none compared to the journey she was about to embark on.
              </p>
              <p className="font-normal text-base leading-relaxed mb-6 tracking-widest">
                Eos was a mysterious exoplanet that had recently been discovered. Its vibrant nebulae and colossal red
                moon had captured the <span className="underline text-yellow-500">attention of scientists</span> and adventurers alike. Many were drawn to its beauty, while
                others were intrigued by its potential resources. But Elara's mission was different. She was sent to explore
                and document the planet's <span className="underline text-violet-500">secrets, with the hope of finding a new home for humanity</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionPage;
