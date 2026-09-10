import React from "react";
import Video from "../../../Component/Video";
import { Link } from "react-router";


const Wish = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      <Video />

      <div
        className="absolute z-10 flex justify-center items-center
    h-full w-full"
      >
        <div
          className="min-w-md border border-pink-300 bg-black/40 slide-up 
        "
        >
          <div className="w-sm mx-auto">
            <p className="Normal: text-purple-200">
              “Because today is the birthday of the one I love.” ❤️
            </p>
            <p className="text-center
            text-purple-100">So I wish you</p>
            <h1 className="text-3xl font-bold text-pink-200 leading-relaxed text-center">
              Happy Birthday 🥂 <br />
              
              <span class="text-2xl font-semibold">It’s Your Day my love.</span>

            </h1>
            <p className=" text-justify text-purple-200 mb-3 
            ">Happy Birthday! Today is all about celebrating the wonderful person you are. May this new chapter bring you endless joy, great health, and the courage to pursue all your biggest dreams. Enjoy every single moment, eat plenty of cake, and make unforgettable memories. Wishing you your best year yet, and may ALLAH give you a more suitable future!</p>

            <div className="flex justify-center mt-6">
                <Link
                  to="/birthday/propose"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-full font-bold hover:scale-110 transition-transform duration-300 mb-3"
                >
                  Click Me ❤️
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wish;
