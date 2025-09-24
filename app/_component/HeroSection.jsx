import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="md:relative md:bg-[url(/hero.webp)] md:bg-cover md:bg-center py-10 md:py-[350px] px-5 lg:px-0">
      <div className="custom-container">
        <div className="md:absolute md:top-1/2 md:-translate-y-1/2">
          <p className="text font-semibold text-primary uppercase">
            2022 Collection
          </p>
          <div className="my-8 text-3xl md:text-6xl heading">
            Discover top
            <br /> rated items
          </div>
          <Button
            className={
              "py-8 lg:px-6  lg:min-w-48 uppercase rounded-none bg-accent"
            }
          >
            discover now
          </Button>
        </div>
      </div>
    </section>
  );
}
