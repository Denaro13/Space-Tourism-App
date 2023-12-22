"use client";
import { useEffect, useState } from "react";
import data from "../api/data";
import Image from "next/image";

const Technology = () => {
  const { technology } = data;
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const breakpoint = 1024;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);

      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

  const handleClick = (index) => {
    setCurrentItemIndex(index);
  };

  return (
    <section className="page lg:grid lg:place-items-center">
      <div className="grid place-items-center ">
        <div className="layout  p-8 lg:text-left">
          <h4 className="text-3xl uppercase mb-4">
            <span>03</span> space launch 101
          </h4>
          <article className="lg:grid lg:grid-cols-2 lg:items-center lg:justify-between lg:gap-8 lg:mr-0">
            {technology.map((destination, index) => {
              const { name } = destination;
              const { portrait, landscape } = destination.images;
              return (
                <div
                  key={name}
                  style={{
                    display: index === currentItemIndex ? "block" : "none",
                  }}
                  className="lg:order-2"
                >
                  <Image
                    src={width < breakpoint ? landscape : portrait}
                    alt={name}
                    width={400}
                    height={400}
                    className="mx-auto lg:mr-0"
                  />
                </div>
              );
            })}
            <div className="lg:flex lg:justify-between ">
              <div className="mt-6 mb-6 lg:my-0 lg:flex lg:flex-col lg:justify-between">
                <button
                  type="button"
                  className={
                    currentItemIndex === 0
                      ? "tech-btn lg:mb-10 "
                      : "tech-btn bg-transparent border-2 border-gray-300 text-white lg:mb-8"
                  }
                  onClick={() => handleClick(0)}
                >
                  1
                </button>
                <button
                  type="button"
                  className={
                    currentItemIndex === 1
                      ? "tech-btn lg:mb-10 "
                      : "tech-btn bg-transparent border-2 border-gray-300 text-white lg:mb-8 "
                  }
                  onClick={() => handleClick(1)}
                >
                  2
                </button>
                <button
                  type="button"
                  className={
                    currentItemIndex === 2
                      ? "tech-btn  "
                      : "tech-btn bg-transparent border-2 border-gray-300 text-white "
                  }
                  onClick={() => handleClick(2)}
                >
                  3
                </button>
              </div>
              {technology.map((destination, index) => {
                const { name, description } = destination;
                return (
                  <div
                    key={name}
                    style={{
                      display: index === currentItemIndex ? "block" : "none",
                    }}
                    className="lg:ml-8"
                  >
                    <h4 className="uppercase mb-4 text-gray-300">
                      the terminology...
                    </h4>
                    <h1 className="uppercase text-5xl mb-8">{name}</h1>
                    <p className="mb-4 tracking-wider leading-7 lg:mb-0">
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Technology;
