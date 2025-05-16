import { $ } from "../selectors/selectors";

export function animateCircle(id, score) {
  const circle = $(`#circle-${id}`);
  let current = 0;
  const target = score;

  let color = "";

  if (score >= 60) {
    color = "text-green-400";
  } else if (score >= 40) {
    color = "text-yellow-400";
  } else if (score >= 30) {
    color = "text-orange-400";
  } else {
    color = "text-red-400";
  }

  if (circle) {
    circle.setAttribute("class", `text-gray-700 ${color}`);
  }

  const interval = setInterval(() => {
    current++;
    if (circle) {
      circle.setAttribute("stroke-dasharray", `${current}, 100`);
    }
    if (current >= target) {
      clearInterval(interval);
    }
  }, 15);
}
