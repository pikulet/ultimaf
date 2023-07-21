import React from "react";
import { hyphenDelimit } from "../utils";


export function GameCell(props) {
    const gameType = props.gameType;

    return <>
        <div className="game-cell">
            <GameIcon gameType={gameType} />
            <div className="game-cell-name">
                {gameType}
            </div>
        </div>    
    </>
}

export function GameIcon(props) {
    const gameType = hyphenDelimit(props.gameType);
    return (
      <div onClick={props.onClick} className={`game-icon ${gameType}`}></div>
    );
}