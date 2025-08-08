const cookie = document.getElementById("cookie");
const messageBox = document.getElementById("message");
const clickText = document.getElementById("click-text");

const riddles = [
  {
    question: "What comes from nothing, is everywhere, but if you have too much of it, you're lost?",
    answer: "silence"
  },
  {
    question: "I have no beginning, middle, or end, yet I contain all. What am I?",
    answer: "circle"
  },
  {
    question: "The more you know me, the less I am. What am I?",
    answer: "mystery"
  },
  {
    question: "I cannot be seen, cannot be felt, cannot be heard, cannot be smelt. I lie behind stars and under hills, and empty holes I fill. What am I?",
    answer: "darkness"
  },
  {
    question: "I bind without ropes, blind without smoke. What am I?",
    answer: "love"
  },
  {
    question: "If you look at me, I’m everyone. But if you look through me, I’m no one. What am I?",
    answer: "mirror"
  },
  {
    question: "You see me once in June, twice in November, but not at all in May. What am I?",
    answer: "e"
  },
  {
    question: "Always running, never walking. Often babbling, never talking. Has a bed, but never sleeps. Has a mouth, but never eats. What am I?",
    answer: "river"
  },
  {
    question: "If you have me, you want to share me. If you share me, I’m gone. What am I?",
    answer: "secret"
  },
  {
    question: "I'm always ahead of you, yet never in sight. What am I?",
    answer: "future"
  },
  {
    question: "I am taken from a mine and shut in a wooden case, from which I’m never released, and yet I am used by almost every student. What am I?",
    answer: "pencil lead"
  },
  {
    question: "It cannot be seen, cannot be felt, cannot be heard, cannot be smelt. It lies behind stars and under hills and fills empty holes. What is it?",
    answer: "dark"
  }
];

const goodFortunes = [
  "Your curiosity is your superpower — keep questioning.",
  "You're not just lucky, you're prepared — fortune favors you.",
  "Brains, charm, and timing? You're running a triple threat.",
  "You think fast and shine bright — a rare combo.",
  "Every riddle you solve rewrites your destiny.",
  "You saw the pattern when others only saw chaos. Impressive.",
  "Great minds think alike — but yours thinks ahead.",
  "You’re two steps ahead and three dimensions deep.",
  "You cracked the code — now the universe is listening.",
  "You're not following the stars. You're building constellations."
];

// Roasts / bad fortunes
const badFortunes = [
  "You just failed an open-book test...",
  "Your brain cells left the chat.",
  "Even Google can’t help you now.",
  "Somewhere, a fortune cookie cried.",
  "Your future is buffering… try again.",
  "404: Brain not found.",
  "Maybe riddles aren't your thing.",
  "You should stick to reading cereal boxes.",
  "Wisdom called, but you were on mute.",
  "Your fortune is to keep trying.",
  "You might want to Google that one."
];

// Show riddle as a letter
function askRiddle() {
  const { question, answer } = riddles[Math.floor(Math.random() * riddles.length)];

  messageBox.innerHTML = `
    <div style="margin-bottom: 10px; font-style: italic;">✉ A letter arrives...<br><br>${question}</div>
    <input type="text" id="riddle-answer" placeholder="Type your answer..." style="margin-top:10px; padding: 5px; font-family: 'Press Start 2P'; font-size: 10px; width: 90%;">
    <br/><button id="submit-answer" style="margin-top:10px; padding: 5px 10px; font-family: 'Press Start 2P'; font-size: 10px;">Submit</button>
  `;
  messageBox.style.opacity = 1;

  document.getElementById("submit-answer").addEventListener("click", () => {
    const userAnswer = document.getElementById("riddle-answer").value.trim().toLowerCase();
    if (userAnswer === answer.toLowerCase()) {
      showFortune(goodFortunes);
    } else {
      showFortune(badFortunes);
    }
  });
}

// Show fortune
function showFortune(fortunesArray) {
  const fortune = fortunesArray[Math.floor(Math.random() * fortunesArray.length)];

  messageBox.innerHTML = `
    <div style="margin-bottom: 10px;">${fortune}</div>
    <button id="reload" style="margin-top:15px; padding: 5px 10px; font-family: 'Press Start 2P'; font-size: 10px;">🔁 Try Again</button>
  `;
  messageBox.style.opacity = 1;

  document.getElementById("reload").addEventListener("click", () => {
    window.location.href = "index.html";
  });

  setTimeout(() => {
    cookie.src = "cookie1.png";
    cookie.classList.remove("cracked");
    clickText.style.display = "block";
  }, 6000);
}

// On cookie click
cookie.addEventListener("click", () => {
  if (cookie.classList.contains("cracked")) return;

  cookie.src = "broken-cookie.png";
  cookie.classList.add("cracked");

  clickText.style.display = "none";

  setTimeout(() => {
    askRiddle();
  }, 600);
});