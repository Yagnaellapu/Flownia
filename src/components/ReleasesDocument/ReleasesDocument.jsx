import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function ReleasesDocument ({ releaseName, releaseDate, content }) {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="items-center mt-8 px-6">
      <p
        onClick={toggleContent}
        className="cursor-pointer flex items-center gap-2 text-violet-400 font-bold"
      >
        {`${releaseName}: ${releaseDate}`}
        <span className="bg-violet-400 rounded-full text-white">
          {showContent ? (
            <AiOutlineMinus size={20} />
          ) : (
            <AiOutlinePlus size={20} />
          )}
        </span>
      </p>
      {showContent && <div className="mt-4 px-2">{content}</div>}
    </div>
  );
};

export default ReleasesDocument;
