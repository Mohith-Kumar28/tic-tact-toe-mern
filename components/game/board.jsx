import React, { useState } from "react";
import Alert from "./alert";
import Box from "./box";

const win_Arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const option = {
  user: "X",
  comp: "0",
};


const Board = () => {
  const [isAlert, setIsAlert] = useState(null);
  const [stats, setStats] = useState({ computer: 0, user: 0 });
  const [gameState, setGameState] = useState(Array(9).fill(""));
  const [isNextX, setIsNextX] = useState(true);

  const resetgame = () => {
    setGameState(new Array(9).fill(null));
    setIsNextX(true);
  };

  const handleChange = async (index) => {
   
  };

  return (
    <div className="h-[90vh] w-full flex flex-col gap-4 justify-center items-center uppercase text-sm">
      {isAlert ? <Alert message={isAlert} close={() => setIsAlert(null)} /> : null}
      <div className="flex flex-col w-full max-w-xs border rounded-md bg-gray-800 text-white">
        <div className="flex border-b p-2 justify-center">Score Board</div>
        <div className="flex justify-between gap-2 w-full p-2">
          <p>player1 : {stats.computer}</p>
          <p>You : {stats.user}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-0.5 max-w-xs w-full text-xl font-bold">
        {gameState.map((box, idx) => (
          <Box key={idx} value={box} onClick={() => handleChange(idx)} />
        ))}
      </div>
    </div>
  );
};

export default Board;

// thanks for watching please keep supporting for more content
// bye bye :)
