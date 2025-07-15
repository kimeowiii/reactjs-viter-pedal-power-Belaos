import React from "react";
import CardEvent from "../../../partials/CardEvent";

const Events = () => {
  return (
    <>
      {/* Upcoming Events */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Upcoming Cycling Events
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-400">
              Join our community rides and competitions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <CardEvent image={"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"} alt={"Alpine Challenge"} title={"Alpine Challenge"} type={" Road"} bgColor={"bg-green-900"} textColor={"text-green-300"} date={"June 15-17, 2023"} location={"Swiss Alps"}/>

            <CardEvent image={"https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"} alt={"Trail Masters"} title={"Trail Masters"} type={"Mountain"} bgColor={"bg-blue-900"} textColor={"text-blue-300"} date={"July 8-9, 2023"} location={"Moab, Utah"}/>

            <CardEvent image={"https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"} alt={"Urban Sprint"} title={"Urban Sprint"} type={"Road"} bgColor={"bg-green-900"} textColor={"text-green-300"} date={"August 5, 2023"} location={"New York City"}/>

          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
