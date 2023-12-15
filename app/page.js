import Image from "next/image";

export default function Home() {
  return (
    <section className="page lg:grid lg:place-items-center">
      <div className="layout lg:grid lg:grid-cols-2 lg:place-items-center lg:mx-0 gap-3 lg:w-full lg:p-8">
        <div className=" lg:text-left lg:mx-auto lg:ml-28">
          <p className="text-xl uppercase mb-5 tracking-widest lg:text-2xl">
            so, you want to travel to
          </p>
          <h1 className="text-9xl uppercase mb-5 lg:tracking-widest">space</h1>
          <p className="tracking-wide leading-7 text-xm lg:w-9/12 lg:tracking-widest">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="w-56 h-56 bg-white flex items-center justify-center text-black rounded-full mx-auto mt-24 lg:m-0">
          <h4 className="text-4xl">Explore</h4>
        </div>
      </div>
    </section>
  );
}
