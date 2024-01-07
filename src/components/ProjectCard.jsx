import React from "react";

export default function ProjectCard({ item }) {
  console.log(item);
  return (
    <div className="flex flex-col">
      <div className="p-10">
        <img src={item.image} />
      </div>
      <div className="flex justify-between">
        <h2 className="pl-20 text-xl">{item.name}</h2>
        <button className="pr-16 ">
          <a href={item.browserLink}>View</a>
        </button>
      </div>
    </div>
  );
}
