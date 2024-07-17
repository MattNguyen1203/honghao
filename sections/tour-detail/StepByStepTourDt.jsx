"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
const StepByStepTourDt = ({ dataSLides, dataAcf, dataTourDetail }) => {

  const data = dataSLides

  const [active, setActive] = useState(0)
  const [lonhon, setLonhon] = useState(true);
  const [nhohon, setNhohon] = useState(true);
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const handleClick = (index) => {
    const newNumbers = Array.from({ length: index }, (_, i) => i);
    setSelectedNumbers(newNumbers);
    setActive(index)
    scrollToButton(index);
    setTimeout(() => {
      if (index === 0) {
        setLonhon(true);
        setNhohon(false);
      }
      if (index === dataSLides?.length - 1) {
        setLonhon(false);
        setNhohon(true);
      }
    }, 500)
    if (index > active) {
      setLonhon(true);
      setNhohon(false);
    } else if (index < active) {
      setLonhon(false);
      setNhohon(true);
    };
  };


  const buttonRefs = useRef([]);
  const containerRef = useRef(null);
  const motoRef = useRef(null);
  const dotRef = useRef(null);

  const lineRefs = useRef([]);
  const containerLineRef = useRef(null);
  const scrollToButton = (index) => {
    if (containerRef.current && buttonRefs.current[index]) {
      const containerWidth = containerRef.current.offsetWidth;
      const buttonWidth = buttonRefs.current[index].offsetWidth;
      const buttonLeft = buttonRefs.current[index].offsetLeft;
      const scrollPosition = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
      containerRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToButton(active);
  }, [active]);




  const scrollToLine = (index) => {
    if (containerLineRef.current && lineRefs.current[index]) {
      const containerWidth = containerLineRef.current.offsetWidth;
      const buttonWidth = lineRefs.current[index].offsetWidth;
      const buttonLeft = lineRefs.current[index].offsetLeft;
      const scrollPosition = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
      containerLineRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };
  useEffect(() => {
    scrollToLine(active);
  }, [active]);
  useEffect(() => {
    if (motoRef.current && lineRefs.current[active]) {
      const moto = motoRef.current;
      const activeLine = lineRefs.current[active];
      const container = containerLineRef.current;

      // Tính toán vị trí của xe máy
      const containerRect = container.getBoundingClientRect();
      const lineRect = activeLine.getBoundingClientRect();
      const offset = lineRect.left + container.scrollLeft - containerRect.left - 50;

      // requestAnimationFrame(() => {
      moto.style.transform = `translateX(${offset}px)`;
      // });
    }
  }, [active]);






  // const handleClick = (number) => {
  //   if (number > active) {
  //     setLonhon(true);
  //     setNhohon(false);
  //   } else if (number < active) {
  //     setLonhon(false);
  //     setNhohon(true);
  //   } else {
  //     setLonhon(false);
  //     setNhohon(false);
  //   }
  //   setActive(number);
  // };


  return (
    <div className='lg:hidden flex flex-col space-y-10  my-[2rem]'>
      <div className="relative h-[22.5rem]">
        {data.map((d, i) => (
          <Image priority alt="ảnh" src={dataSLides?.[i]?.imgStep?.url}
            width={1000} height={1000} className={cn("w-full h-full px-[0.75rem]  duration-200 transition-all  absolute top-0", active === i ? 'opacity-100' : 'opacity-0')} />
        ))}

      </div>
      {/* LINEs */}
      <div className='w-full overflow-x-auto no-scrollbar' ref={containerLineRef} >
        {/* XE MAY */}
        <Image
          ref={motoRef}
          className={cn('object-contain ml-[40px] transition-all duration-500 mb-[0.3rem]'
          )}
          src={lonhon ? '/home/icon-xemay.svg' : '/home/icon-xemay-rtl.svg'}
          alt='motor'
          width={30}
          height={30}
        // quality={95}
        />

        <div className=" flex items-center space-x-1 px-[3rem] w-max ">
          {data?.map((d, i) => (
            <div
              className={cn('', i === data?.length - 1 ? ' w-0 scale-0' : '')}
              ref={(el) => lineRefs.current[i] = el}
              key={i}>
              <Line activeLine={selectedNumbers.includes(i) ? true : false} index={i} />
            </div>
          ))}
          <div className="size-[0.55rem] rounded-full  -translate-x-[0.5rem] border-[2px]  border-[#b34b1e] "></div>
        </div>
      </div>
      {/* BUTTONs */}
      <div className='w-full overflow-x-auto no-scrollbar' ref={containerRef}>
        <div className="flex items-center space-x-[1.1rem] w-max px-[0.8rem]">
          {data.map((d, i) => (
            <div
              ref={(el) => buttonRefs.current[i] = el}
              onClick={() => handleClick(i)} key={i}>
              <Button
                data={d}
                active={active === i ? true : false}
                index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* BUTTON BOOK NOW */}
      {/* <BookNow active /> */}


      {/* <div className=" flex flex-col">
        {data.map((d, i) => (
          <div onClick={() => handleClickArcodion(i)} key={i} className="px-[0.75rem] flex flex-col">
            <div onClick={() => setAccordionOpen(!accordionOpen)} className={'flex group relative rounded-full justify-between items-center '}>
              <div className=" flex flex-1 flex-col">

                <div className=" text-[1.18384rem] font-[600] leading-normal tracking-[0.00531rem] font-poppins text-gray-scale-80 aos-init aos-animate">
                  DAY 1.
                </div>
                <div className={cn(' text-greyscale-50 md:hidden  transition-all duration-500 text-[1rem] max-lg:text-[1.875rem] leading-normal tracking-[0.0125rem] font-[600] font-poppins max-md:text-[3.5rem] max-md:leading-[1.42] max-md:tracking-[0.03733rem]',
                  accordionOpen && activeArco === i ? 'text-black' : ''
                )}>
                  Dong Van Town - Ma pi Leng pass - Meo Vac - Du Gia village
                </div>

              </div>
              <div className='flex flex-1 max-w-max group-hover:scale-110 ease-linear rounded-full bg-red-500 duration-100 justify-center items-center'>
                <svg

                  className="fill-white shrink-0 scale-75"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${accordionOpen && activeArco === i && "!rotate-180"
                      }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && activeArco === i && "!rotate-180"
                      }`}
                  />
                </svg>
              </div>

            </div>
            <div
              className={`grid overflow-hidden transition-all duration-500 relative ease-in-out text-slate-600 text-sm 
                      ${accordionOpen && activeArco === i
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
                }`}
            >
              <div className="overflow-hidden">
                ashoashoahfoahfoahfoa
                ashoashoahfoahfoahfoa
                ashoashoahfoahfoahfoa
                ashoashoahfoahfoahfoa
                ashoashoahfoahfoahfoa
                ashoashoahfoahfoahfoa
              </div>

            </div>
            <div className=" w-full border-t borde-orange-500 my-[0.5rem] "></div>
          </div>
        ))}
      </div> */}

    </div >
  )
}

export default StepByStepTourDt

const Button = ({ index, active, data }) => {
  function parseItinerary(input) {
    const [day, itinerary] = input.split(":");
    return day
  }
  return (
    <div className={cn("flex justify-center  transition-all duration-300  bg-[#f9f9f9]  items-center gap-2.5 px-[2rem] py-[0.9875rem] rounded-[0.5rem]",
      active ? 'bg-[#b34b1e]' : ''
    )}>
      <div className={cn(" text-[#898989]  transition-all duration-300  text-center text-[0.87rem] not-italic font-semibold leading-4 tracking-[0.03125rem] uppercase",
        active ? 'text-[#FCF8F7]' : ''
      )}>
        {parseItinerary(data?.title)}
      </div>
    </div>
  )
}


const BookNow = ({ index, active }) => {
  return (
    <div className={cn("flex justify-center  transition-all duration-300 w-[10rem] mx-auto bg-[#f9f9f9]  items-center gap-2.5 px-[2rem] py-[0.9875rem] rounded-[0.5rem]",
      active ? 'bg-[#b34b1e]' : ''
    )}>
      <div className={cn(" text-[#898989]  transition-all duration-300  text-center text-[0.87rem] not-italic font-semibold leading-4 tracking-[0.03125rem] uppercase",
        active ? 'text-[#FCF8F7]' : ''
      )}>
        BOOk NOW
      </div>
    </div>
  )
}

const Line = ({ index, activeLine }) => {
  return (
    <div className=" space-x-1.5 flex border border-transparent items-center">
      <div className="size-[0.55rem] rounded-full border-[2px] border-[#b34b1e] "></div>
      <div className="relative">
        <div className={cn("flex items-center space-x-[0.3rem]", activeLine ? '' : '')}>
          <div className="w-[0.8rem] h-[0.15rem] rounded-full  bg-[rgb(179,75,30)] opacity-20"></div>
          <div className="w-[0.8rem] h-[0.15rem] rounded-full  bg-[rgb(179,75,30)] opacity-20"></div>
          <div className="w-[0.8rem] h-[0.15rem] rounded-full  bg-[rgb(179,75,30)] opacity-20"></div>
          <div className="w-[0.8rem] h-[0.15rem] rounded-full  bg-[rgb(179,75,30)] opacity-20"></div>
          <div className="w-[0.8rem] h-[0.15rem] rounded-full  bg-[rgb(179,75,30)] opacity-20"></div>
          <div className="w-[0.8rem] h-[0.15rem] rounded-full  bg-[rgb(179,75,30)] opacity-20"></div>
        </div>
        <div className={cn("w-full rounded-full absolute top-1/2 -translate-y-1/2 h-[0.15rem] transition-all duration-500  ",
          activeLine ? 'bg-[#b34b1e] w-full' : 'bg-transparent w-0'
        )}></div>
      </div>
    </div>
  )
}