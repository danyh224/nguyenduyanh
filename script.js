AOS.init({
  duration: 1200,
});

function animateCounter(id, target) {
  let count = 0;

  let interval = setInterval(() => {
    count++;

    document.getElementById(id).innerText = count;

    if (count === target) {
      clearInterval(interval);
    }
  }, 25);
}

animateCounter("counter1", 100);
animateCounter("counter2", 5);
animateCounter("counter3", 10);

document.addEventListener("mousemove", (e) => {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  document.body.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
});
