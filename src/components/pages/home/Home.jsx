import React from "react";
import Header from "../../partials/Header";
import { Link } from "react-router-dom";
import Footer from "../../partials/Footer";
import CardDiscipline from "../../partials/CardDiscipline";
import Features from "./features/Features";
import Events from "./events/Events";
import Banner from "./banner/Banner";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <div className="relative">
             <Banner/>
            <Features/>
            <Events/>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
