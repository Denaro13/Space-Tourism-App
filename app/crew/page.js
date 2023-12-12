"use client";
import Image from "next/image";
import data from "../api/data";
import { useState } from "react";

const Crew = () => {
  const { crew } = data;
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const handleClick = (value) => {
    setCurrentItemIndex(value);
  };

  return (
    <section className="page lg:grid lg:place-items-center">
      <div className="layout p-8 lg:text-left ">
        <h4 className="text-3xl uppercase mb-4">
          <span>02</span> meet your crew
        </h4>
        <article className="lg:grid lg:grid-cols-2 lg:gap-8">
          {crew.map((destination, index) => {
            const { name } = destination;
            const { png } = destination.images;
            return (
              <div
                key={name}
                style={{
                  display: index === currentItemIndex ? "block" : "none",
                }}
                className="lg:order-2"
              >
                <Image
                  src={png}
                  alt={name}
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
            );
          })}
          <div className="lg:flex lg:flex-col lg:justify-between lg:mt-16 ">
            <div className="mt-4 mb-4 order-2">
              <button
                type="button"
                className={
                  currentItemIndex === 0
                    ? "crew-btn  "
                    : "crew-btn bg-gray-500 "
                }
                onClick={() => handleClick(0)}
              ></button>
              <button
                type="button"
                className={
                  currentItemIndex === 1
                    ? "crew-btn  "
                    : "crew-btn bg-gray-500 "
                }
                onClick={() => handleClick(1)}
              ></button>
              <button
                type="button"
                className={
                  currentItemIndex === 2
                    ? "crew-btn  "
                    : "crew-btn bg-gray-500 "
                }
                onClick={() => handleClick(2)}
              ></button>
              <button
                type="button"
                className={
                  currentItemIndex === 3
                    ? "crew-btn  "
                    : "crew-btn bg-gray-500 "
                }
                onClick={() => handleClick(3)}
              ></button>
            </div>
            {crew.map((destination, index) => {
              const { name, role, bio } = destination;
              return (
                <div
                  key={name}
                  style={{
                    display: index === currentItemIndex ? "block" : "none",
                  }}
                >
                  <h4 className="mb-4 uppercase text-gray-300">{role}</h4>
                  <h1 className="uppercase text-5xl mb-8">{name}</h1>
                  <p className="mb-4 tracking-wider leading-7 ">{bio}</p>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Crew;
