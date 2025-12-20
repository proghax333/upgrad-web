import React, { useEffect, useRef, useState } from "react";
import { FaBackward, FaForward, FaPause, FaPlay, FaStop } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";

function MusicPlayer() {
  const [playerState, setPlayerState] = useState({
    progress: 10,
    state: "paused",
  });

  const timerRef = useRef(null);

  useEffect(() => {
    if (playerState.state !== "playing") return;

    timerRef.current = setInterval(() => {
      setPlayerState((prev) => {
        if (prev.progress >= 100) {
          clearInterval(timerRef.current);
          return { ...prev, state: "paused", progress: 100 };
        }

        return { ...prev, progress: prev.progress + 1 };
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [playerState.state]);

  const play = () => {
    setPlayerState((prev) => ({ ...prev, state: "playing" }));
  };

  const pause = () => {
    setPlayerState((prev) => ({ ...prev, state: "paused" }));
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setPlayerState({ progress: 0, state: "paused" });
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full max-w-md mx-auto border border-gray-300 rounded-md my-4">
        <div className="flex flex-col">
          <div className="flex justify-center py-8">
            <div className="w-32 h-32 rounded-full shadow-lg bg-black grid place-items-center">
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
          </div>

          <hr className="border-gray-300" />

          <div className="py-4">
            <h3 className="px-4">Let Me Love You</h3>
            <h5 className="px-4 text-sm text-gray-700">
              Justin Bieber, DJ Snake
            </h5>

            <div className="h-2 bg-gray-200 mx-4 mt-4 flex overflow-hidden">
              <div
                className="h-2 bg-black transition-all duration-300"
                style={{ width: `${playerState.progress}%` }}
              />
            </div>

            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                onClick={stop}
                className="text-black w-12 h-12 rounded-full grid place-items-center"
              >
                <FaStop />
              </button>

              <button className="bg-black text-white w-12 h-12 rounded-full grid place-items-center">
                <FaBackward />
              </button>

              {playerState.state === "paused" && (
                <button
                  onClick={play}
                  className="bg-black text-white w-12 h-12 rounded-full grid place-items-center"
                >
                  <FaPlay />
                </button>
              )}

              {playerState.state === "playing" && (
                <button
                  onClick={pause}
                  className="bg-black text-white w-12 h-12 rounded-full grid place-items-center"
                >
                  <FaPause />
                </button>
              )}

              <button className="bg-black text-white w-12 h-12 rounded-full grid place-items-center">
                <FaForward />
              </button>

              <button className="text-black w-12 h-12 rounded-full grid place-items-center">
                <FaRepeat />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
