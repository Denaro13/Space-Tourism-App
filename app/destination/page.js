"use client";
import Image from "next/image";
// import data from "../api/data";
import data from "../api/data";
import { useState } from "react";

export default function Destination() {
  const { destinations } = data;
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const handleClick = (index) => {
    setCurrentItemIndex(index);
  };

  return (
    <section className="page lg:grid lg:place-items-center">
      <div className="layout p-8 lg:text-left">
        <h4 className="text-3xl uppercase mb-4 lg:mb-20">
          <span>01</span> pick your destination
        </h4>
        <article className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
          {destinations.map((destination, index) => {
            const { name } = destination;
            const { png } = destination.images;
            return (
              <div
                key={name}
                style={{
                  display: index === currentItemIndex ? "block" : "none",
                }}
              >
                <Image
                  src={png}
                  alt={name}
                  width={400}
                  height={400}
                  className="mx-auto"
                />
              </div>
            );
          })}
          <div>
            <div className="mt-4 mb-4 lg:m-0">
              {destinations.map((destination, index) => {
                const { name } = destination;
                const { png } = destination.images;
                return (
                  <button
                    type="button"
                    key={index}
                    className={
                      index === currentItemIndex
                        ? "mr-4 text-lg uppercase text-gray-300 border-b-4 pb-2  "
                        : "mr-4 text-lg uppercase text-gray-300"
                    }
                    onClick={() => handleClick(index)}
                  >
                    {name}
                  </button>
                );
              })}
            </div>
            {destinations.map((destination, index) => {
              const { name, description, distance, travel } = destination;
              return (
                <div
                  key={name}
                  style={{
                    display: index === currentItemIndex ? "block" : "none",
                  }}
                >
                  <h1 className="uppercase text-5xl mb-4 lg:text-8xl lg:my-6">
                    {name}
                  </h1>
                  <p className="mb-4 tracking-wider lg:mb-16 leading-7">
                    {description}
                  </p>
                  <hr />
                  <div className="mt-8 md:flex items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <p className="uppercase text-sm">avg. distance</p>
                      <h4 className="text-4xl uppercase mt-2">{distance}</h4>
                    </div>
                    <div>
                      <p className="uppercase text-sm">est. travel time</p>
                      <h4 className="text-4xl uppercase mt-2">{travel}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
