import React from "react";

const PanoramaViewer = () => {
  return (
    <div className="w-full  flex justify-center items-center">
      <iframe
        src="https://momento360.com/e/u/f2159475a8694adfa4681bebd770314c?utm_campaign=embed&utm_source=other&heading=897.18&pitch=-5.4&field-of-view=57&size=medium&display-plan=true"
        width="100%"
        height="500px"
        allowFullScreen
        style={{ border: "none" }}
        title="360 Panorama"
      ></iframe>
    </div>
  );
};

export default PanoramaViewer;
