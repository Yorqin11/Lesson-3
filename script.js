// setTimeout(() => {
//     console.log('HELLO WORLD')
// }, 4000)

// let int = setInterval(() => {
//     console.log('Hello')
// }, 4000)
// clearInterval(int);

// let count = 0;
// let int = setInterval(() => {
//     count++
//     console.log(`Привет ${count}`)
//     if (count === 5) {
//         clearInterval(int)
//         console.log("Пока")
//     }
// }, 2000)


// function startCountdown() {
//     let hours = 15;
//     let minutes = 14;
//     let seconds = 10;
  
//     const hoursEl = document.getElementById("hours");
//     const minutesEl = document.getElementById("minutes");
//     const secondsEl = document.getElementById("seconds");
  
//     function updateTimer() {
//       seconds;
  
//       if (seconds < 0) {
//         seconds = 59;
//         minutes--;
//       }
  
//       if (minutes < 0) {
//         minutes = 59;
//         hours--;
//       }
  
//       if (hours < 0) {
//         hours = 0;
//         minutes = 0;
//         seconds = 0;
//       }
  
//       hoursEl.textContent = hours.toString().padStart(2, "0");
//       minutesEl.textContent = minutes.toString().padStart(2, "0");
//       secondsEl.textContent = seconds.toString().padStart(2, "0");
//     }
  
//     setInterval(updateTimer, 1000);
//   }
  
//   startCountdown();

let count = 19; 
const countDisplay = document.getElementById('count');
const numberInput = document.getElementById('numberInput');
const colorInput = document.getElementById('color');

document.getElementById('increment').addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

document.getElementById('decrement').addEventListener('click', () => {
    count--;
    countDisplay.textContent = count;
});

document.getElementById('send').addEventListener('click', () => {
    const inputValue = numberInput.value;
    if (inputValue) {
        count = parseInt(inputValue);
        countDisplay.textContent = count;
    }
});

colorInput.addEventListener('input', (event) => {
    document.querySelector('.counter').style.backgroundColor = event.target.value;
});