const countToDate = new Date('2024-10-27T08:00:00'); // change this line for updated ( Date ) for countdown

let previousTimeBetweenDates;
let interval = setInterval(() => {
  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);

  if (timeBetweenDates <= 0) {
    flipAllCards(0); // Set all segments to zero
    clearInterval(interval); // Clear the interval
    return; // Exit the function to prevent further execution
  }

  flipAllCards(timeBetweenDates);

  previousTimeBetweenDates = timeBetweenDates;
}, 250);

// calculate time for flip cards
function flipAllCards(time) {
  const seconds = time % 60
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)

  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
  flip(document.querySelector("[data-hours-ones]"), hours % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}

// flip & styling function
function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}

// interval funciton to calulate the time from current date and time till added date time count down
setInterval(() => {
  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)

  // Check if the countdown has finished
  if (timeBetweenDates <= 0) {
    flipAllCards(0) // Set all segments to zero
    return; // Exit the function to prevent further execution
  }

  flipAllCards(timeBetweenDates)

  previousTimeBetweenDates = timeBetweenDates
}, 250)