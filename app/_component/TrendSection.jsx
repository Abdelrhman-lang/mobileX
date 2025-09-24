import { Button } from "@/components/ui/button";
import React from "react";

export default function TrendSection() {
  return (
    <section>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src="/trend.webp" alt="feature" className="w-full" />
          </div>
          <div className="flex justify-start items-center lg:justify-center">
            <div>
              <p className="uppercase font-semibold text text-primary">
                EXCLUSIVE IPHONE ACCESSORIES
              </p>
              <p className="text-5xl heading mt-6 text-primary">
                Get up to 20% off
              </p>
              <p className="text-lg text-muted mt-2 text">The latest trends</p>
              <div className="mt-8">
                <Button
                  className={"bg-accent uppercase py-7 px-10 rounded-none"}
                >
                  shop now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
