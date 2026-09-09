import React, { useRef, useState } from "react";




const Home = () => {
  const [Birthdate, setBirthDate] = useState("");
  const [nextSentances, setnextSentances] = useState("");

  const [showButton, setShowButton] = useState(false);

  const intervalRef = useRef(null);

  const typeText = (text, setText, onComplete, speed = 70) => {
    let index = 0;

    setText("");

    const intervalRef = setInterval(() => {
      if (index >= text.length) {
        clearInterval(intervalRef);

        if (onComplete) {
          onComplete();
        }

        return;
      }

      const currentChar = text[index];

      setText((prev) => prev + currentChar);

      index++;
    }, speed);
  };

  const handlebirthDate = () => {
    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const firstText = `It's ${day}-${month}-${year}

A special day,
dedicated to my sweet heart. (Sathi) ❤️`;

    const secondText = `Yes, today is a very special day. ❤️

But do you know why today is so special?

Would you like to know the reason? 👀❤️

Then,`;

    typeText(firstText, setBirthDate, () => {
      typeText(secondText, setnextSentances, () => {
        setShowButton(true);
      });
    });
  };
  // setBirthDate(`its ${today}`)
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover "
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/mixkit-birthday-party-table-with-balloons-falling-5101-hd-ready.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute bg-black/40 inset-0"></div>

      {/* start */}

      <div className="relative z-10 flex justify-center h-full items-center text-white  ">
        <div className="min-w-md border-1 rounded-md  border-cyan-400 bg-black/50 ">
          <h1 className="text-center font-bold text-4xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mt-2">
            Hey,"My Sweet heart!"
          </h1>
          <img src='https://png.pngtree.com/png-clipart/20230930/original/pngtree-a-happy-cute-little-girl-png-image_13194907.png'alt="" className="w-32 h-32 object-contain mx-auto bg-transparent"/>

          <div className="w-sm mx-auto pt-4">
            <div
              className="flex
        justify-between"
            >
              <span className="text-cyan-400">Do You know Today's Date?</span>
              <button
                onClick={() => handlebirthDate()}
                className="transition-transform duration-500 bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-1 rounded-md transform duration-300 hover:bg-gradient-to-l from-blue-500 to-purple-500"
              >
                click Here
              </button>
            </div>

            <div className="mt-2 ">
              <span className="text-pink-200">
                {Birthdate} <p></p>
              </span>
            </div>

            <div className="mt-2">
              <span className="text-fuchsia-400 whitespace-pre-line">
                {nextSentances}
              </span>
            </div>

            {showButton && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => console.log("Clicked!")}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-full font-bold hover:scale-110 transition-transform duration-300 mb-3"
                >
                  Click Me ❤️
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
