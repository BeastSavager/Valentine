document.addEventListener("DOMContentLoaded", () => {

  /* ================= TYPEWRITER HEADING ================= */
  const headingText = "Gujia 💖 Will you be my Valentine?";
  let headingIndex = 0;
  const headingEl = document.getElementById("typewriter");

  function typeWriter() {
    if (headingIndex < headingText.length) {
      headingEl.innerHTML += headingText.charAt(headingIndex++);
      setTimeout(typeWriter, 80);
    }
  }
  typeWriter();

  /* ================= FLOATING HEARTS + NAME ================= */
  const heartsContainer = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = Math.random() > 0.5 ? "💖" : "Gujia";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }, 450);

  /* ================= ELEMENTS ================= */
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const message = document.getElementById("message");
  const music = document.getElementById("bgMusic");

  /* ================= HAPTIC ================= */
  function haptic(pattern) {
    if (navigator.vibrate) navigator.vibrate(pattern);
  }

  /* ================= NO BUTTON LOGIC ================= */
  let noCount = 0;

  noBtn.addEventListener("click", () => {
    noCount++;
    haptic([50, 30, 50]);

    noBtn.style.transform = `scale(${1 - noCount * 0.15})`;
    yesBtn.style.transform = `scale(${1 + noCount * 0.2})`;

    if (noCount >= 4) {
      noBtn.style.display = "none";
      message.innerHTML = "<strong>Remote ka Restart Button daba 😌💗</strong>";
      haptic([200, 100, 200]);
    }
  });

  /* ================= CONFETTI ================= */
  function confettiGujia() {
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.innerText = "Gujia 💖";
      confetti.style.setProperty("--x", (Math.random() - 0.5) * 400 + "px");
      confetti.style.setProperty("--y", (Math.random() - 0.5) * 400 + "px");

      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 1200);
    }
  }

  /* ================= FIREWORKS ================= */
  function fireworks() {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(firework);

    setTimeout(() => firework.remove(), 1000);
  }

  /* ================= INSIDE JOKE TYPEWRITER ================= */
  function typeInsideJoke(element, text) {
    let i = 0;
    element.innerHTML = "";

    const typing = setInterval(() => {
      element.innerHTML += text.charAt(i++);
      if (i === text.length) clearInterval(typing);
    }, 70);
  }

  /* ================= YES BUTTON ================= */
  yesBtn.addEventListener("click", () => {
    haptic([100, 50, 100, 50, 200]);

    // Music fade in
    music.volume = 0;
    music.play();

    let vol = 0;
    const fadeIn = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        music.volume = vol;
      } else {
        clearInterval(fadeIn);
      }
    }, 100);

    confettiGujia();

    const fwInterval = setInterval(fireworks, 300);
    setTimeout(() => clearInterval(fwInterval), 3000);

    setTimeout(() => {
      document.body.innerHTML = `
        <div class="final">
          <h1>Yayyy Gujia 💖🥰</h1>
          <p>You are officially my Valentine 💕</p>
          <p id="insideJoke" class="inside-joke"></p>
        </div>
      `;

      typeInsideJoke(
        document.getElementById("insideJoke"),
        "Remote ka Restart Button daba 😌💗"
      );
    }, 1800);
  });

  /* ================= START MUSIC ON FIRST TOUCH ================= */
  document.body.addEventListener(
    "click",
    () => music.play(),
    { once: true }
  );

});
