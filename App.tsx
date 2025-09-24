import React, { useEffect, useState } from 'react';
import { BookOpen, Clock, Users, MessageSquare, FileText } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Video scroll control
  useEffect(() => {
    const video = document.querySelector('#scroll-video') as HTMLVideoElement;
    if (!video) return;
  }, []);

  // Calculate opacity based on scroll position (fades out very quickly after 25px)
  const textOpacity = Math.max(0, 1 - (scrollY / 50));

  // Calculate when the continuation text has scrolled off screen
  const continuationTextHeight = 120; // Height needed for continuation text to fully scroll off
  const continuationScrolledOff = scrollY > continuationTextHeight;

  // Calculate when we've scrolled past the hero image (viewport height)
  const scrolledPastImage = scrollY > window.innerHeight * 0.9; // Trigger slightly before image fully scrolls off

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* White fade that only appears after scrolling past the hero image */}
      {scrolledPastImage && (
        <div className="fixed top-0 left-0 right-0 h-64 bg-gradient-to-b from-white via-white via-white/90 via-white/70 to-transparent z-30 pointer-events-none transition-opacity duration-500 ease-in-out"></div>
      )}

      {/* Fixed "Vibe Out" and nav links */}
      <div className="fixed top-12 left-8 z-40">
        <h1 className={`font-instrument-serif text-4xl md:text-5xl lg:text-6xl leading-relaxed mb-8 transition-colors duration-300 ${scrolledPastImage ? 'text-black' : 'text-white'}`}>
          <em>Vibe Out</em>
        </h1>
      </div>

      <header className="fixed top-12 right-8 z-40">
        <div className={`flex flex-col gap-2 text-sm font-space-grotesk text-right transition-colors duration-300 ${scrolledPastImage ? 'text-black' : 'text-white'}`}>
          <button className={`transition-colors text-right ${scrolledPastImage ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}>
            JOIN
          </button>
          <button className={`transition-colors text-right ${scrolledPastImage ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}>
            LOG IN
          </button>
          <button className={`transition-colors text-right ${scrolledPastImage ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}>
            RESOURCES
          </button>
        </div>
      </header>

      {/* Hero section with background image */}
      <div className="relative h-screen w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/Public/main_shot.png)' }}
        ></div>
        
        {/* Hero text overlay */}
        <div className="relative z-10 px-8 py-12">
          <div className="max-w-1xl">
            <h1 className="font-instrument-serif text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed mb-8">
              <span className="invisible text-4xl md:text-5xl lg:text-6xl"><em>Vibe Out</em></span>
              <span className="text-4xl md:text-5xl lg:text-6xl">
                {" "}is where gay people around the world level up in AI.
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Scrolling content */}
      <div className="relative z-10 px-8 py-0">
        <div className="max-w-1xl">
          {/* First Section - AI for Ambitious Individuals */}
          <div className="mt-32 mb-32 ml-[50px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left column - Text content */}
              <div>
                <h2 className="font-instrument-serif text-3xl md:text-4xl lg:text-5xl text-black leading-tight mb-6">
                  AI for Ambitious Individuals.
                </h2>
                <p className="font-space-grotesk text-lg md:text-xl lg:text-2xl text-black mb-8 leading-relaxed">
                  From the AI-curious to advanced pros.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="font-space-grotesk font-semibold text-lg text-black mb-2">Build</h3>
                    <p className="font-space-grotesk text-black">prototype → system → shipped</p>
                  </div>
                  
                  <div>
                    <h3 className="font-space-grotesk font-semibold text-lg text-black mb-2">Create</h3>
                    <p className="font-space-grotesk text-black">concepts → content → campaigns</p>
                  </div>
                  
                  <div>
                    <h3 className="font-space-grotesk font-semibold text-lg text-black mb-2">Operate</h3>
                    <p className="font-space-grotesk text-black">workflows → automation → scale</p>
                  </div>
                  
                  <div>
                    <h3 className="font-space-grotesk font-semibold text-lg text-black mb-2">Lead</h3>
                    <p className="font-space-grotesk text-black">vision → adoption → governance</p>
                  </div>
                  
                  <div>
                    <h3 className="font-space-grotesk font-semibold text-lg text-black mb-2">Learn</h3>
                    <p className="font-space-grotesk text-black">foundations → practice → portfolio</p>
                  </div>
                </div>
              </div>
              
              {/* Right column - Animated circle */}
              <div className="relative -mt-80">
                <div className="animated-circle-container">
                  <ul className="circle-text">
                    <li><span>F</span><span>o</span><span>u</span><span>n</span><span>d</span><span>e</span><span>r</span><span>s</span></li>
                    <li><span>B</span><span>u</span><span>i</span><span>l</span><span>d</span><span>e</span><span>r</span><span>s</span></li>
                    <li><span>R</span><span>e</span><span>s</span><span>e</span><span>a</span><span>r</span><span>c</span><span>h</span><span>e</span><span>r</span><span>s</span></li>
                    <li><span>C</span><span>r</span><span>e</span><span>a</span><span>t</span><span>i</span><span>v</span><span>e</span><span>s</span></li>
                    <li><span>D</span><span>e</span><span>s</span><span>i</span><span>g</span><span>n</span><span>e</span><span>r</span><span>s</span></li>
                    <li><span>M</span><span>a</span><span>r</span><span>k</span><span>e</span><span>t</span><span>e</span><span>r</span><span>s</span></li>
                    <li><span>O</span><span>p</span><span>e</span><span>r</span><span>a</span><span>t</span><span>o</span><span>r</span><span>s</span></li>
                    <li><span>A</span><span>n</span><span>a</span><span>l</span><span>y</span><span>s</span><span>t</span><span>s</span></li>
                    <li><span>L</span><span>e</span><span>a</span><span>d</span><span>e</span><span>r</span><span>s</span></li>
                    <li><span>S</span><span>t</span><span>r</span><span>a</span><span>t</span><span>e</span><span>g</span><span>i</span><span>s</span><span>t</span><span>s</span></li>
                    <li><span>S</span><span>t</span><span>u</span><span>d</span><span>e</span><span>n</span><span>t</span><span>s</span></li>
                    <li><span>I</span><span>n</span><span>n</span><span>o</span><span>v</span><span>a</span><span>t</span><span>o</span><span>r</span><span>s</span></li>
                    <li><span>V</span><span>i</span><span>s</span><span>i</span><span>o</span><span>n</span><span>a</span><span>r</span><span>i</span><span>e</span><span>s</span></li>
                    <li><span>M</span><span>a</span><span>k</span><span>e</span><span>r</span><span>s</span></li>
                    <li><span>D</span><span>r</span><span>e</span><span>a</span><span>m</span><span>e</span><span>r</span><span>s</span></li>
                    <li><span>P</span><span>i</span><span>o</span><span>n</span><span>e</span><span>e</span><span>r</span><span>s</span></li>
                    <li><span>E</span><span>x</span><span>p</span><span>l</span><span>o</span><span>r</span><span>e</span><span>r</span><span>s</span></li>
                    <li><span>T</span><span>h</span><span>i</span><span>n</span><span>k</span><span>e</span><span>r</span><span>s</span></li>
                    <li><span>E</span><span>n</span><span>t</span><span>r</span><span>e</span><span>p</span><span>r</span><span>e</span><span>n</span><span>e</span><span>u</span><span>r</span><span>s</span></li>
                    <li><span>E</span><span>n</span><span>g</span><span>i</span><span>n</span><span>e</span><span>e</span><span>r</span><span>s</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Second Section - Out-execute with AI */}
          <div className="mt-48 mb-32 ml-[50px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left column - Image */}
              <div className="flex justify-center lg:justify-start relative">
                {/* Heading and subtitle positioned over the image */}
                <div className="absolute top-0 left-0 z-10 mb-16">
                  <h2 className="font-instrument-serif text-3xl md:text-4xl lg:text-5xl text-black leading-tight mb-6">
                    Out-execute with AI.
                  </h2>
                  <p className="font-space-grotesk text-lg md:text-xl lg:text-2xl text-black mb-8 leading-relaxed">
                    Make AI your unfair advantage.
                  </p>
                </div>
                <img 
                  src="/Public/outexecute.png"
                  alt="Out-execute with AI"
                  className="w-full max-w-7xl rounded-lg mt-8"
                />
              </div>
              
              {/* Right column - Text content */}
              <div>
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpen className="w-5 h-5 text-black" />
                      <h3 className="font-space-grotesk font-semibold text-lg text-black">Workshops</h3>
                    </div>
                    <p className="font-space-grotesk text-black leading-relaxed">
                      Prompt engineering, automation tools, real use cases. Learn, then apply it.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-black" />
                      <h3 className="font-space-grotesk font-semibold text-lg text-black">Office hours</h3>
                    </div>
                    <p className="font-space-grotesk text-black leading-relaxed">
                      AI experts on call for your questions, roadblocks, and reviews.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-black" />
                      <h3 className="font-space-grotesk font-semibold text-lg text-black">Events & coworking</h3>
                    </div>
                    <p className="font-space-grotesk text-black leading-relaxed">
                      Meet and work alongside Vibe Out members—virtual globally, events IRL.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <MessageSquare className="w-5 h-5 text-black" />
                      <h3 className="font-space-grotesk font-semibold text-lg text-black">Digital community</h3>
                    </div>
                    <p className="font-space-grotesk text-black leading-relaxed">
                      A focused online space: member directory, topic channels, and curated intros.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-black" />
                      <h3 className="font-space-grotesk font-semibold text-lg text-black">Expert articles</h3>
                    </div>
                    <p className="font-space-grotesk text-black leading-relaxed">
                      Tool lists, best practices, and guidance you can actually use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Add enough content to make it scroll */}
          <div className="h-[200vh]"></div>
        </div>
      </div>
    </div>
  );
}

export default App;