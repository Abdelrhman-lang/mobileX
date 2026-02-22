import React from "react";

export default function AboutGrid() {
  return (
    <div className="pt-48 grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center">
      <div>
        <img src="/about-img-1.webp" alt="about-img" />
      </div>
      <div className="px-5 md:px-0">
        <h1 className="heading capitalize text-5xl">about us</h1>
        <div className="mt-6 text text-lg">
          <p>We guarantee the highest quality of</p>
          <p>the products we sell.</p>
        </div>
        <div className="mt-6 text-accent">
          <p className="max-w-[450px] leading-normal">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>
    </div>
  );
}
