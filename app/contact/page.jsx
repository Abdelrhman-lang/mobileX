import React from "react";
import BreadCramp from "../_component/BreadCramp";
import SectionGap from "../_component/SectionGap";
import { Instagram, Mail, Phone, Watch } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section>
      <BreadCramp />
      <div className="bg-[#F2F3F5] py-20 flex items-center justify-center">
        <h2 className="heading text-5xl capitalize font-semibold text-primary">
          contact us
        </h2>
      </div>
      <SectionGap />
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:px-5">
          <div className="border-r md:pr-20 px-5 md:px-0">
            <h4 className="heading text-4xl">We’re here to help you!</h4>
            <p className="text-accent text-sm text mt-3.5">
              Have a question, comment, or brilliant idea you'd like to share?
              Send us a little note below - we love to hear from you and will
              always reply!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-10">
              <div className="text">
                <Phone />
                <p className="mt-7 mb-3.5">Phone Number</p>
                <p className="text-sm text-accent">
                  <span className="me-2">Call Us:</span>
                  <span>01118282107</span>
                </p>
              </div>
              <div className="text">
                <Mail />
                <p className="mt-7 mb-3.5">Email:</p>
                <p className="text-sm text-accent">
                  <span className="me-2">abdokhaled766@gmail.com</span>
                </p>
              </div>
              <div className="text">
                <Instagram />
                <p className="mt-7 mb-3.5">Instagram Page</p>
                <p className="text-sm text-accent">
                  <span className="me-2">mobileX</span>
                </p>
              </div>
              <div className="text">
                <Watch />
                <p className="mt-7 mb-3.5">Opening Hours</p>
                <p className="text-sm text-accent flex flex-col gap-2">
                  <span className="me-2">7 days</span>
                  <span>24 hours</span>
                </p>
              </div>
            </div>
          </div>
          <div className="md:pl-20 px-5 md:px-0">
            <h4 className="heading text-4xl">Do you want to get in touch?</h4>
            <p className="mt-3.5 mb-10 text text-accent">
              Let us know how we can help you.
            </p>
            <form>
              <div className="text mb-5">
                <label htmlFor="name" className="mb-2 block text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  className="w-full border py-2 px-4 focus:outline-none text-sm"
                />
              </div>
              <div className="text mb-5">
                <label htmlFor="email" className="mb-2 block text-sm">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full border py-2 px-4 focus:outline-none text-sm"
                />
              </div>
              <div className="text mb-5 ">
                <label htmlFor="message" className="mb-2 block text-sm">
                  Message
                </label>
                <textarea
                  type="text"
                  id="name"
                  placeholder="Enter Your Message"
                  className="w-full border py-2 px-4 focus:outline-none text-sm mb-10"
                />
              </div>
              <Button className="w-full cursor-pointer rounded-none bg-accent text-sm text-white py-2 px-4">
                Submit
              </Button>
            </form>
          </div>
        </div>
        <SectionGap />
      </div>
    </section>
  );
}
