import React, { useState } from "react";
import Video from "../../../Component/Video";

const Propose = () => {
  const [proposeYes,setProposeYes] = useState(false);
  const [TreatYes,setTreatYes] = useState(false);
  const [proposeNo,setProposeNo] = useState(false);
  const [TreatNo,setTreatNo] = useState(false);

  return (

    
    <>
      <div className="h-screen relative overflow-hidden">
        <Video />

        {!TreatYes?<div className="absolute z-10 justify-center items-center h-full w-full flex flex-col gap-2 md:flex md:flex-row">
          <div className="border border-pink-400 min-w-[440px] bg-black/40 slide-up rounded-2xl">
            <div className="w-[220px] mx-auto">
              <h1 className="text-pink-200 text-center font-bold text-3xl py-3">
                I Love You My Sweet Heart❤️
              </h1>
            </div>

            <div
              className="w-[400px] mx-auto
            my-2"
            >
              <p className="text-pink-200 text-justify">
                You came into my life like a quiet sunrise, turning ordinary
                moments into something beautiful. I don’t promise a perfect
                life, but I promise to stand beside you, cherish your smile,
                respect your heart, and love you through every season.
              </p>

              <p className="text-pink-200 my-3">
                So, Sathi Begum, will you be mine, today and always? ❤️
              </p>
            </div>

            <div className="flex gap-4 justify-center my-3">
              <button onClick={()=>(setProposeYes(true))} className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full">
                Yes ❤️
              </button>

              {!proposeNo?<><button onClick={()=>(setProposeNo(true))} className="bg-slate-500 hover:bg-slate-600 text-white px-6 py-2 rounded-full">
                No 🥺
              </button></>:<><button onClick={()=>(setProposeYes(true))} className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full">
                Yes 😤
              </button></>}

              {/* <button className="bg-slate-500 hover:bg-slate-600 text-white px-6 py-2 rounded-full">
                No 🥺
              </button> */}
            </div>
          </div>


         {proposeYes&&( <div className="border border-pink-400 min-w-[440px] bg-black/40 slide-down rounded-2xl
         ">
            <h1 className="text-pink-200 text-center py-2">Thank You For rechieving my proposal❤️🥺</h1>

            <div className="w-[300px] mx-auto text-pink-200">
              <p className="text-center text-2xl">Now,Will you give me a treat today at 3:00pm?</p>
            </div>

            <div className="flex gap-4 justify-center my-3">
              <button  onClick={()=>(setTreatYes(true))}className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full">
                Yes ❤️
              </button>

              {!TreatNo?<><button onClick={()=>(setTreatNo(true))} className="bg-slate-500 hover:bg-slate-600 text-white px-6 py-2 rounded-full">
                No 🥺
              </button></>:<><button onClick={()=>(setTreatYes(true))} className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full">
                Yes 😤
              </button></>}

            </div>

          </div>)}



        </div>:<><div className="absolute z-10 justify-center items-center h-full w-full flex flex-col gap-2 md:flex md:flex-row">
          <div className="slide-up relative border-2 border-pink-400 rounded-2xl p-6">
  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl">
    ❤️
  </span>

  {<div  className="slide-down border-2 border-rose-600 rounded-2xl bg-black/40 p-10">
          <p className="text-2xl font-bold
          text-rose-100">
            Thank You 
          </p>

          <p className="text-2xl font-bold
          text-rose-100 pl-12">My Love...❤️</p>
            </div>}
</div>
          </div></>}
      </div>
    </>
  );
};

export default Propose;


{/* <div  className="border-2 border-rose-600 rounded bg-black/40 p-10">
          <p className="text-2xl font-bold
          text-rose-100">
            Thank You ❤️
          </p>

          <p className="text-2xl font-bold
          text-rose-100 pl-12">My Love...</p>
            </div> */}