import React from "react";
import ServiceList from "../components/services/ServiceList";

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto ">
          <h2 className="heading text-center">Our medical services</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health System offers unmatched,
            expert health care.
          </p>
        </div>

        <ServiceList />
      </div>
    </section>
  );
};

export default Services;
