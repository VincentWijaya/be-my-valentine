"use client";
import { useState } from "react";

const pharses = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please",
  "Don't do this to me ;(",
  "I'm gonna cry...",
  "You're breaking my heart ;("
]

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return pharses[Math.min(noCount, pharses.length - 1)];
  }

  return (
    <main>
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img
              alt="bears kissing"
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            />
            <div className="text">Yay!!!</div>
          </>
        ) : (
          <>
            <img 
              alt="bear with hearts"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            
            <div>Will you be my valentine?</div>
            <div>
              <button
                className="yesButton"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button onClick={handleNoClick} className="noButton">
                {getNoButtonText()}
              </button>
            </div>
          </>
        )
        }
      </div>
    </main>
  );
}
