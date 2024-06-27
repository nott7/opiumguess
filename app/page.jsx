"use client";

import ScoreBanner from "@/components/ScoreBanner";
import ImageBanner from "@/components/ImageBanner";
import TextComponent from "@/components/TextComponent";
import ChoiceComponent from "@/components/ChoiceComponent";
import { songs } from "./data";

import { useState, useEffect } from "react";

export default function Home() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [songIdsAlreadyPlayed, setSongIdsAlreadyPlayed] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [youLost, setYouLost] = useState(false);
  const [youGuessedAll, setYouGuessedAll] = useState(false);

  const getRandomSong = () => {
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    console.log(songIdsAlreadyPlayed);
    console.log(randomSong.id);
    if (songIdsAlreadyPlayed.includes(randomSong.id)) {
      return getRandomSong();
    }
    return randomSong;
  };

  useEffect(() => {
    if (songIdsAlreadyPlayed.length !== 20) {
      setCurrentSong(getRandomSong());
    } else {
      setTimeout(() => setYouGuessedAll(true), 0);
    }
  }, [songIdsAlreadyPlayed]);

  return (
    <main className="min-h-screen  bg-[#0d0e0e] p-6">
      <ScoreBanner score={score} lives={lives} />
      {/* <ImageBanner /> */}
      {youLost ? (
        <div className="max-w-[1200px] flex flex-col mx-auto">
          <div
            className="lost-component-container max-w-[1200px] w-full h-[100px] lg:h-[200px] mx-auto text-center flex flex-col items-center justify-center my-6 bg-[url('/text-pattern.png')] bg-cover bg-center p-4 rounded-md shadow-lg 
    border-2 border-slate-50 border-opacity-50 relative z-10
  "
          >
            <p className="text-slate-50 text-4xl font-bold">You lost!</p>
            <p className="text-slate-50 text-lg">Your score was {score}</p>
          </div>
          <button
            onClick={() => {
              setScore(0);
              setLives(3);
              setYouLost(false);
              setSongIdsAlreadyPlayed([]);
              // setCurrentSong(getRandomSong());
            }}
            className="bg-[#1db954] text-slate-50 font-semibold uppercase px-4 py-2 rounded-md mx-auto"
          >
            Play Again
          </button>
        </div>
      ) : youGuessedAll ? (
        <div className="max-w-[1200px] flex flex-col mx-auto">
          <div
            className="lost-component-container max-w-[1200px] w-full h-[100px] lg:h-[200px] mx-auto text-center flex flex-col items-center justify-center my-6 bg-[url('/text-pattern.png')] bg-cover bg-center p-4 rounded-md shadow-lg 
    border-2 border-slate-50 border-opacity-50 relative z-10
  "
          >
            <p className="text-slate-50 text-4xl font-bold">
              You completed the game!
            </p>
            <p className="text-slate-50 text-lg">Your score was {score}</p>
          </div>
          <button
            onClick={() => {
              setScore(0);
              setLives(3);
              setYouLost(false);
              setSongIdsAlreadyPlayed([]);
              // setCurrentSong(getRandomSong());
            }}
            className="bg-[#1db954] text-slate-50 font-semibold uppercase px-4 py-2 rounded-md mx-auto"
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <TextComponent songText={currentSong?.text} score={score} />
          <ChoiceComponent
            correctMember={currentSong?.artist}
            currentSongId={currentSong?.id}
            setScore={setScore}
            setLives={setLives}
            lives={lives}
            setYouLost={setYouLost}
            songIdsAlreadyPlayed={songIdsAlreadyPlayed}
            setSongIdsAlreadyPlayed={setSongIdsAlreadyPlayed}
            setCurrentSong={setCurrentSong}
            setYouGuessedAll={setYouGuessedAll}
          />
        </>
      )}
    </main>
  );
}
