import React from "react";

export default function ProjectCard({ item }) {
  return (
    <div className="flex flex-col w-full  bg-[#83c5be] rounded-t-xl overflow-x-hidden ">
      <div className="rounded-t-xl  ">
        <img className="object-cover rounded-t-xl " src={item.image} />
      </div>
      <div className="flex justify-between mt-2">
        <h2 className="ml-8 p-2 text-xl">{item.name}</h2>
        <button className=" rounded-md flex item-center p-2 bg-[#0077b6] m-2 ">
          <a href={item.browserLink} className="relative mr-2   text-[#edede9]">
            View
          </a>
        </button>
      </div>
    </div>
  );
}
