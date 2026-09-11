import React, { createContext, useContext, useRef } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const audioRef = useRef(null);

 const playMusic = () => {
  audioRef.current?.play()
    .then(() => {
      console.log("Music playing");
    })
    .catch((error) => {
      console.log("Music error:", error);
    });
};

  return (
    <MusicContext.Provider value={{ playMusic }}>
      
      <audio ref={audioRef} loop>
        <source src="/music.mp3.mp3" type="audio/mpeg" />
      </audio>

      {children}

    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  return useContext(MusicContext);
};