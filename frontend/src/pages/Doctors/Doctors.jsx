import React from "react";
import DoctorList from "../../components/Doctors/DoctorList";

const Doctors = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto ">
          <h2 className="heading text-center">Our great doctors</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health System offers <br />{" "}
            unmatched, expert health care.
          </p>
        </div>

        <DoctorList />
      </div>
    </section>
  );
};

export default Doctors;
