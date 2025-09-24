import React from "react";

export default function AboutGrid2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-10">
      <div>
        <h2 className="heading text-5xl capitalize">our story</h2>
        <p className="mt-6 text-lg text-primary text max-w-[400px]">
          Catering to your requirements, handling your needs with care.
        </p>
        <p className="mt-6 text text-accent max-w-[500px]">
          Our store is more than just another average online retailer. We sell
          not only top quality products, but give our customers a positive
          online shopping experience.
        </p>
        <p className="mt-6 text text-accent max-w-[500px]">
          Forget about struggling to do everything at once: taking care of the
          family, running your business, walking your dog, cleaning the house,
          doing the shopping, etc.
        </p>
      </div>
      <div>
        <img src="/about-img-2.webp" alt="about-img" />
      </div>
    </div>
  );
}
