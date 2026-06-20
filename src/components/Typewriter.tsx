"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  words: readonly string[];
  prefix?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
};

export function Typewriter({
  words,
  prefix = "I am ",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseMs = 2000,
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex] ?? "";
    const doneTyping = text === current;
    const doneDeleting = text === "";

    let delay = typingSpeed;
    if (isDeleting) delay = deletingSpeed;
    if (doneTyping && !isDeleting) delay = pauseMs;
    if (doneDeleting && isDeleting) delay = 400;

    const timer = setTimeout(() => {
      if (!isDeleting && !doneTyping) {
        setText(current.slice(0, text.length + 1));
        return;
      }
      if (!isDeleting && doneTyping) {
        setIsDeleting(true);
        return;
      }
      if (isDeleting && !doneDeleting) {
        setText(current.slice(0, text.length - 1));
        return;
      }
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseMs,
  ]);

  return (
    <span className="inline-block min-h-[1.5em]">
      <span className="text-zinc-600">{prefix}</span>
      <span className="text-accent font-semibold">{text}</span>
      <span className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-pulse bg-accent align-middle" />
    </span>
  );
}
