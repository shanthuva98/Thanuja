/* PASSWORD */
function unlock() {
  const input = document.getElementById("password").value.trim();
  if (input === "1702") {
    document.querySelector(".lock").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    typeWriter();
    startFireworks();
  } else {
    document.getElementById("error").innerText = "Enoda Birthday Theriyati Saavu🙂";
  }
}

/* TYPEWRITER */
const text =
"You are not just my best friend.\n" +
"You are my celebration.\n\n" +
"Our friendship deserves fireworks 🎆\n" +
"Today and always 💙";

let i = 0;
function typeWriter() {
  const el = document.getElementById("typeText");
  if (i < text.length) {
    el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    setTimeout(typeWriter, 40);
  }
}

/* FIREWORKS */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createFirework() {
  const x = random(100, canvas.width - 100);
  const y = random(100, canvas.height / 2);
  const particles = [];

  for (let i = 0; i < 40; i++) {
    particles.push({
      x,
      y,
      angle: random(0, Math.PI * 2),
      speed: random(2, 6),
      radius: random(2, 4),
      life: 60
    });
  }
  fireworks.push(particles);
}

function drawFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  fireworks.forEach((particles, index) => {
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${random(0,360)},100%,60%)`;
      ctx.fill();

      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.life--;
    });

    if (particles[0].life <= 0) {
      fireworks.splice(index, 1);
    }
  });

  requestAnimationFrame(drawFireworks);
}

function startFireworks() {
  setInterval(createFirework, 900);
  drawFireworks();
}
