import React from "react";
import BreadCramp from "../_component/BreadCramp";

export default function PrivacyPolicyPage() {
  return (
    <section>
      <BreadCramp />

      <main>
        <div className="custom-container">
          <h2 className="text-5xl heading font-bold text-center mt-20 mb-20">
            Privacy Policy
          </h2>
          <p className="text text-accent text-sm mb-5">
            This Privacy Policy describes how
            theme905-computer-shop.myshopify.com (the “Site” or “we”) collects,
            uses, and discloses your Personal Information when you visit or make{" "}
            <br />a purchase from the Site
          </p>
          <h1 className="heading font-medium text-7xl mb-10">
            Collecting Personal Information
          </h1>
          <p className="text text-sm text-accent">
            When you visit the Site, we collect certain information about your
            device, your interaction with the Site, and information necessary to
            process your purchases. We may also collect additional information
            if you contact us for customer support. In this Privacy Policy, we
            refer to any information that can uniquely identify an individual
            (including the information below) as “Personal Information”. See the
            list below for more information about what Personal Information we
            collect and why
          </p>
          <span className="block my-7 underline text-accent text-sm">
            Device information
          </span>
          <p>
            <span className="text text-sm font-bold text-accent">
              Examples of Personal Information collected:
            </span>
            <span className="text text-accent text-sm">
              {" "}
              version of web browser, IP address, time zone, cookie information,
              what sites or products you view, search terms, and how you
              interact with the Site.
            </span>
          </p>
          <p>
            <span className="text text-sm font-bold text-accent">
              Purpose of collection
            </span>
            <span className="text text-accent text-sm">
              to load the Site accurately for you, and to perform analytics on
              Site usage to optimize our Site.
            </span>
          </p>
          <p>
            <span className="text text-sm font-bold text-accent">
              Source of collection:
            </span>
            <span className="text text-accent text-sm">
              Collected automatically when you access our Site using cookies,
              log files, web beacons, tags, or pixels [ADD OR SUBTRACT ANY OTHER
              TRACKING TECHNOLOGIES USED].
            </span>
          </p>
          <p>
            <span className="text text-sm font-bold text-accent">
              Disclosure for a business purpose:
            </span>
            <span className="text text-accent text-sm">
              shared with our processor [ADD ANY OTHER VENDORS WITH WHOM YOU
              SHARE THIS INFORMATION].
            </span>
          </p>
          <span className="block my-7 underline text-accent text-sm"></span>
        </div>
      </main>
    </section>
  );
}
