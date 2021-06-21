import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [emoji, setEmoji] = useState("");

  const emojiDictionary = {
    "😃": "Smiling Face",
    "🤗": "Hugging face",
    "😂": "Face with tears of joy.",
    "😟": "sad face",
    "🤢": " Nauseated Face",
    "🤤": "Drooling Face",
    "👿": " Angry Face with Horns",
    "🤬": " Face with Symbols on Mouth",
    "🖐️": " Hand with Fingers Splayed",
    "👋": "Waving Hand",
    "✌️": "Victory Hand",
    "👍": "Thumbs Up",
    "🙏": "Folded Hands",
    "💪": "Flexed biceps"
  };

  var emojiWeHave = Object.keys(emojiDictionary);

  function eventClickHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this emoji";
    }
    setEmoji(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmoji(meaning);
  }

  return (
    <div className="App">
      <div className="section">
        <h2 className="title">Emoji Dictionary</h2>
      </div>
      <div className="container-fluid">
        <h1 className="Emoji-data">Emoji dictionary with meaning</h1>
        <input
          key={emoji}
          onChange={eventClickHandler}
          style={{
            borderRadius: "5px",
            lineHeight: "2",
            width: "30%",
            textDecoration: "none"
          }}
        />
        <div>{emoji}</div>
        <h2 style={{ padding: "1rem", color: "gray" }}>Emoji's we have</h2>
        {emojiWeHave.map((emoji) => {
          return (
            <button
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{
                cursor: "pointer",
                margin: "1rem",
                padding: "0.5rem",
                fontSize: "1.5rem"
              }}
            >
              {emoji}
            </button>
          );
        })}
      </div>
    </div>
  );
}
