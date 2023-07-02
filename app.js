// Selecting elements from the HTML document
let tensEl = document.getElementById('tens'); // Element with ID 'tens'
let secondsEl = document.getElementById('seconds'); // Element with ID 'seconds'
let minEl = document.getElementById('min'); // Element with ID 'min'
let buttonDiv = document.getElementById('btn-div'); // Element with ID 'btn-div'

// Selecting buttons from the HTML document
let startBtn = document.getElementById('start'); // Button with ID 'start'
let stopBtn = document.getElementById('stop'); // Button with ID 'stop'
let resetBtn = document.getElementById('reset'); // Button with ID 'reset'

// Creating variables
let minute = 0; // Variable to store minutes
let seconds = 0; // Variable to store seconds
let tens = 0; // Variable to store tenths of a second
let timer = false; // Variable to control the timer

// Function to handle button operations
function buttonOp() {
  createStopBtn(); // Call the function to create the stop button
}

// Function to create the stop button
function createStopBtn() {
  startBtn.remove(); // Remove the start button from the DOM
  let stop = document.createElement('button'); // Create a new 'button' element
  stop.textContent = "STOP"; // Set the text content of the stop button
  buttonDiv.prepend(stop); // Insert the stop button at the beginning of the buttonDiv
  stop.onclick = function() {
    stopTimer(); // Call the function to stop the timer
    stop.remove(); // Remove the stop button from the DOM
    createStartBtn(); // Call the function to create the start button
  }
}

// Function to create the start button
function createStartBtn() {
  let start = document.createElement('button'); // Create a new 'button' element
  start.textContent = "START"; // Set the text content of the start button
  buttonDiv.prepend(start); // Insert the start button at the beginning of the buttonDiv
  start.onclick = function() {
    start.remove(); // Remove the start button from the DOM
    createStopBtn(); // Call the function to create the stop button
    startTimer(); // Call the function to start the timer
  }
}

// Function to start the timer
function startTimer() {
  timer = true; // Set the timer variable to true
  stopWatch(); // Call the stopWatch function to update the timer
}

// Function to stop the timer
function stopTimer() {
  timer = false; // Set the timer variable to false
  clearInterval(interval); // Clear the interval to stop the timer from updating
}

// Function to reset the timer
function resetTimer() {
  timer = false; // Set the timer variable to false
  tens = 0; // Reset the tenths of a second to 0
  minute = 0; // Reset the minutes to 0
  seconds = 0; // Reset the seconds to 0
  tensEl.textContent = "0" + tens; // Update the display of tenths of a second
  minEl.textContent = "0" + minute; // Update the display of minutes
  secondsEl.textContent = "0" + seconds; // Update the display of seconds
  clearInterval(interval); // Clear the interval to stop the timer from updating
}

// Selecting elements from the HTML document
let lapsContainer = document.getElementById('laps-container'); // Element with ID 'laps-container'
let lapBtn = document.getElementById('lap'); // Button with ID 'lap'
let lapCount = 1; // Variable
// Function to add a lap time
function lapTimer() {
  let lapTime = formatTime(minute, seconds, tens); // Format the current time as a string
  let lapItem = document.createElement('p'); // Create a new 'p' element
  lapItem.textContent = `Lap ${lapCount}: ${lapTime}`; // Set the text content of the lap item
  lapsContainer.prepend(lapItem); // Insert the lap item at the beginning of the lapsContainer
  lapCount++; // Increment the lap count
}

// Function to format the time as a string
function formatTime(min, sec, tens) {
  return `${padZero(min)}:${padZero(sec)}.${padZero(tens)}`; // Format the time with leading zeros
}

// Function to pad a number with leading zeros
function padZero(num) {
  return num.toString().padStart(2, '0'); // Convert the number to a string and pad with leading zeros
}

// Function to reset the timer and laps
function resetTimer() {
  timer = false; // Set the timer variable to false
  tens = 0; // Reset the tenths of a second to 0
  minute = 0; // Reset the minutes to 0
  seconds = 0; // Reset the seconds to 0
  tensEl.textContent = "00"; // Update the display of tenths of a second with leading zeros
  minEl.textContent = "00"; // Update the display of minutes with leading zeros
  secondsEl.textContent = "00"; // Update the display of seconds with leading zeros
  clearInterval(interval); // Clear the interval to stop the timer from updating
  lapsContainer.innerHTML = ""; // Clear the laps container by removing all its HTML content
  lapCount = 1; // Reset the lap count to 1
}

// Function to update the stopwatch
function stopWatch() {
  if (timer === true) {
    tens++; // Increment the tenths of a second

    if (tens <= 9) {
      tensEl.textContent = "0" + tens; // Update the display of tenths of a second with leading zero
    }

    if (tens >= 10) {
      tensEl.textContent = tens; // Update the display of tenths of a second
    }

    if (tens === 99) {
      tens = 0; // Reset the tenths of a second to 0
      seconds++; // Increment the seconds

      if (seconds <= 9) {
        secondsEl.textContent = "0" + seconds; // Update the display of seconds with leading zero
      }

      if (seconds >= 10) {
        secondsEl.textContent = seconds; // Update the display of seconds
      }

      if (seconds === 59) {
        seconds = 0; // Reset the seconds to 0
        minute++; // Increment the minutes

        if (minute <= 9) {
          minEl.textContent = "0" + minute; // Update the display of minutes with leading zero
        }

        if (minute >= 10) {
          minEl.textContent = minute; // Update the display of minutes
        }
      }
    }

    interval = setTimeout(startTimer, 10); // Call startTimer after 10 milliseconds
  }
}
