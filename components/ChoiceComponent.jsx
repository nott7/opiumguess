import React from "react";
import { useState } from "react";

const ChoiceComponent = ({
  correctMember,
  setScore,
  setLives,
  songIdsAlreadyPlayed,
  lives,
  currentSongId,
  setSongIdsAlreadyPlayed,
  setCurrentSong,
  setYouLost,
  setYouGuessedAll,
}) => {
  const [correctSound] = useState(
    typeof Audio !== "undefined" && new Audio("/success.m4a")
  );
  const [wrongSound] = useState(
    typeof Audio !== "undefined" && new Audio("/error.m4a")
  );

  const opiumMembers = [
    {
      name: "Ken Carson",
      image: "ken",
    },
    {
      name: "Playboi Carti",
      image: "carti",
    },
    {
      name: "Destroy Lonely",
      image: "destroy",
    },
    {
      name: "Homixide Gang",
      image: "homixide",
    },
  ];

  const handleClick = (member) => {
    if (member === correctMember) {
      setScore((prev) => prev + 1);
      correctSound.play();
    } else {
      if (lives === 1) {
        setLives((prev) => prev - 1);
        setYouLost(true);
      } else {
        setLives((prev) => prev - 1);
      }
      wrongSound.play();
    }

    // if (songIdsAlreadyPlayed.length === 20 - (3 - lives)) {
    //   setYouGuessedAll(true);
    //   return;
    // } else {
    setSongIdsAlreadyPlayed((prev) => [...prev, currentSongId]);
    setCurrentSong(null);
    // }
  };

  return (
    <div className="max-w-[1200px] flex gap-4 items-center justify-center flex-wrap mx-auto">
      {opiumMembers.map((member, index) => (
        <div
          key={index}
          onClick={() => handleClick(member.name)}
          style={{
            backgroundImage: `url(/${member.image}.jpg)`,
          }}
          className="aspect-square w-[125px] lg:w-[200px] rounded-md shadow-lg bg-cover bg-center scale-100 hover:scale-105 transition-transform duration-300 cursor-pointer border-2 border-[slate-50] hover:border-slate-500"
        ></div>
      ))}
    </div>
  );
};

export default ChoiceComponent;
