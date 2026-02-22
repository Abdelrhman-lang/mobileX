import React from "react";

export default function AboutBox({ image, date, comments, title, paragraph }) {
  return (
    <main>
      <div className="mb-4">
        <img src={image} alt="about-box-img" />
      </div>
      <div className="uppercase text-xs text-accent flex items-center gap-1.5 mb-4">
        <p>{date}</p>
        <p className="mb-1">|</p>
        <p>{comments}</p>
      </div>
      <h4 className="heading text-2xl text-primary font-medium mb-4">
        {title}
      </h4>
      <p className="text-accent mb-4">{paragraph}</p>
      <a className="underline capitalize text-primary font-bold">Read More</a>
    </main>
  );
}
