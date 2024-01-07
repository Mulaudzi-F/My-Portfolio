import React from "react";

export default function ProjectCard({ item }) {
  console.log(item);
  return (
    <div className="flex flex-col">
      <div>
        <img src={item.image} />
      </div>
      <div className="flex justify-between">
        <h2>{item.name}</h2>
        <button>
          <a href={item.browserLink}>View</a>
        </button>
      </div>
    </div>
  );
}
