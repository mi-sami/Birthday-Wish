import React from 'react'

const Video = () => {
  return (
    <><video
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

      </>
  )
}

export default Video