import Link from "next/link";

export default function FeatureSection() {
  return (
    <section>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src="/feature.webp" alt="feature" className="w-full" />
          </div>
          <div className="flex justify-start items-center lg:justify-center">
            <div>
              <p className="uppercase font-semibold text text-primary">
                Featured Mac Accessories
              </p>
              <p className="text-5xl heading mt-6 text-primary">
                Make the perfect <br /> connection
              </p>
              <p className="text-lg text-muted mt-2 text">
                Sale up to 50% off!
              </p>
              <div className="mt-8">
                <Link
                  href={"/shop"}
                  className={
                    "bg-accent uppercase text-white font-semibold text-sm py-5 px-10 rounded-none"
                  }
                >
                  shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
