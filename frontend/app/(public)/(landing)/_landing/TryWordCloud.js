// File: frontend/app/(public)/(landing)/_landing/TryWordCloud.js
// Purpose: "Try it here" word cloud demo: the visitor adds words and they float into the cloud.
// Screens: PUB-01

"use client";

import { useState } from "react";
import panel from "./TryPanel.module.css";
import styles from "./TryWordCloud.module.css";

// Words already in the cloud: text, size in px, and highlight colour (null = no box)
const startingWords = [
  { text: "loops", size: 38, highlight: "lime" },
  { text: "itself", size: 30, highlight: "lemon" },
  { text: "mirror", size: 24, highlight: null },
  { text: "base case", size: 26, highlight: "peach" },
  { text: "stack", size: 20, highlight: null },
  { text: "dreams", size: 18, highlight: null },
  { text: "divide", size: 18, highlight: null },
];

const wordsToAdd = ["calls", "russian dolls", "base case"];

// Shows the cloud and one button for each word the visitor has not added yet.
export default function TryWordCloud() {
  const [addedWords, setAddedWords] = useState([]);

  // Adds a word to the cloud
  function addWord(word) {
    setAddedWords([...addedWords, word]);
  }

  const cloud = [...startingWords];
  for (let i = 0; i < addedWords.length; i++) {
    cloud.push({ text: addedWords[i], size: 30, highlight: "mint" });
  }

  const buttons = [];
  for (let i = 0; i < wordsToAdd.length; i++) {
    if (!addedWords.includes(wordsToAdd[i])) {
      buttons.push(wordsToAdd[i]);
    }
  }

  return (
    <div className={panel.panel}>
      <h3 className={panel.question}>Describe recursion in one word</h3>
      <div className={styles.cloud} aria-label="Word cloud">
        {cloud.map((word, index) => {
          let wordClass = styles.word;
          if (word.highlight) {
            wordClass = styles.word + " " + styles[word.highlight];
          }
          return (
            <span key={index} className={wordClass} style={{ fontSize: word.size + "px", animationDelay: index * 60 + "ms" }}>
              {word.text}
            </span>
          );
        })}
      </div>
      <div className={styles.buttons}>
        {buttons.map((word) => (
          <button key={word} type="button" className={styles.addButton + " " + panel.pressable} onClick={() => addWord(word)}>
            Add &quot;{word}&quot;
          </button>
        ))}
      </div>
    </div>
  );
}
