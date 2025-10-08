import Image from "next/image";
import Role from "./client/Role";

export default function Hero() {
  return (
    <div className="m-0 flex flex-col lg:flex-row items-end">
      <div className="flex-6 relative flex flex-col m-5 order-2 lg:order-1">
        <h1 className="font-extrabold text-xl break-words sm:text-2xl md:text-3xl lg:text-4xl text-white">Hari Sankar  <span className="text-text-main">Fullstack Developer </span></h1>
        <p className="font-extralight mt-7 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
          I build <span className="text-text-main">full-stack web applications from scratch</span> —
          clean <span className="text-text-main">TypeScript backends</span>, interactive frontends with{" "}
          <span className="text-text-main">React, Angular, or Vanilla JS</span>,{" "}
          <span className="text-text-main">CI/CD pipelines</span>, and deployments with{" "}
          <span className="text-text-main">Docker & Kubernetes</span>.
        </p>
        <Role/>
        <button className="mt-6 mx-4 px-10 py-4 w-[40%] text-white text-lg font-medium bg-bg-btn hover:bg-bg-btn-hover transition-all duration-300 ease-out rounded-full cursor-pointer hover:scale-105">See my Works</button>
      </div>
      <div className="flex-4 order-1 lg:order-2">
        <Image
          src="/hero.jpg"
          alt="hero image"
          height={1000}
          width={1000}
          className="object-cover"
        />
      </div>
    </div>
  );
}
