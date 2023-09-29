import React from "react";
import ReleasesDocument from "../../../components/ReleasesDocument/ReleasesDocument";

const releases = [
  {
    releaseName: "Release 4A",
    releaseDate: "01/09/2025",
    content: "Content for Releases 4A",
  },
  {
    releaseName: "Release 4B",
    releaseDate: "01/12/2025",
    content: "Content for Releases 4B",
  },
];

function Releases2025() {
  return (
    <div className="flex-grow">
      <div className="flex items-center p-2 bg-black gap-2 h-10 text-white font-bold">
        2025 Releases
      </div>
      <div>
        {releases.map((release, index) => (
          <ReleasesDocument
            key={index}
            releaseName={release.releaseName}
            releaseDate={release.releaseDate}
            content={release.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Releases2025;
