const button = document.querySelector(".addTask");
const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTask");

let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;

document.getElementById("hours").addEventListener("change", (e) => {
  hours = +e.target.value;
});

document.getElementById("minutes").addEventListener("change", (e) => {
  minutes = +e.target.value;
});

document.getElementById("seconds").addEventListener("change", (e) => {
  seconds = +e.target.value;
  console.log(e);
});
document.getElementById("startTimer").addEventListener("click", () => {
  console.log("hello people");
  let timeInSeconds = hours * 60 * 60 + minutes * 60 + seconds;
  const userInputContainer = document.createElement("li");
  const removeButton = document.createElement("button");
  const timerOut = document.createElement("p");
  const userInput = document.createElement("h3");

  userInputContainer.classList.add("userListItem");
  userInput.innerText = newTaskInput.value;
  taskList.appendChild(userInputContainer);
  userInputContainer.appendChild(userInput);
  userInputContainer.appendChild(removeButton);
  userInputContainer.appendChild(timerOut);
  timerOut.classList.add("timer-out");
  removeButton.classList.add("removeButton");
  removeButton.innerText = "x";
  removeButton.addEventListener("click", function () {
    userInputContainer.remove();
  });
  let displayTime = () => {
    let displayHours = Math.floor(timeInSeconds / (60 * 60));
    let remainder = timeInSeconds - displayHours * 60 * 60;
    let displayMinutes = Math.floor(remainder / 60);
    let displaySeconds = remainder - displayMinutes * 60;

    timerOut.innerHTML =
      displayHours + " : " + displayMinutes + " : " + displaySeconds;
  };

  interval = setInterval(() => {
    displayTime();
    timeInSeconds -= 1;
    if (timeInSeconds < 0) {
      clearInterval(interval);
    }
  }, 1000);
});

document.getElementById("stopButton").addEventListener("click", () => {
  clearInterval(interval);
});
