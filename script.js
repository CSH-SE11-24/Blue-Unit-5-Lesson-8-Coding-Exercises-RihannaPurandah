console.log("Script running...")
// Task 1: Hello button flow
// Select the 'Click me for hello' button
let button = document.querySelector("#helloButton")
console.log(button)
// Select the empty p tag under that button
let p = document.querySelector("#helloText")

// Add an event listener to the hello button such that when it's click, the p tag text says "Hello"
button.addEventListener("click", function(event){
  p.textContent ="Hello"
})


// Task 2: All caps button flow
// Select the 'Click me for all caps' button
let click = document.querySelector("#capsButton")

// Select the p tag under that button (says there's no need to shout)
let p1 = document.querySelector("#capsText")

// Add an event listener to the caps button such that when it's clicked, the p tag text is "THERE'S NO NEED TO SHOUT"
click.addEventListener("click", function(event){
  p1.textContent = "THERE'S NO NEED TO SHOUT"
})


// Task 3: Dog image flow
// Select the dog image
let image = document.querySelector(".dogImage")

// Add an event listener to the dog image such that when the mouse is over it, the image src becomes happy-dog.jpeg
image.addEventListener("mouseover", function(event){
  image.src = "happy-dog.jpeg"
})


// Add an event listener to the dog image such that when the mouse is off it, the image src becomes sad-dog.jpeg
image.addEventListener("mouseout", function(event){
  image.src = "sad-dog.jpeg"
})


// Task 4: Name input flow
// Select the submit button
let sub = document.querySelector("#nameButton")

// Select the input 
let input = document.querySelector("#name")

// Select the empty p tag under them
let p3 = document.querySelector("#nameText")

// Add an event listener to the submit button such that when it is clicked, the p tag text is "Nice to meet you " + input.value
sub.addEventListener("click", function(event){
  p3.textContent = "Nice to meet you " + input.value
})



