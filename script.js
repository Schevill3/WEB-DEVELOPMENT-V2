// ==========================
// Part 1: Event Handling
// ==========================

// Toggle Light/Dark Mode
const toggleBtn = document.getElementById("toggleModeBtn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ==========================
// Part 2: Interactive Elements
// ==========================

// Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// ==========================
// Part 3: Form Validation
// ==========================

const form = document.getElementById("myForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from refreshing

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Simple validation rules
  if (name === "") {
    message.textContent = "❌ Name cannot be empty.";
    message.style.color = "red";
    return;
  }

  // Regex to check basic email pattern
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.textContent = "❌ Please enter a valid email.";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  // If all validation passes
  message.textContent = "✅ Form submitted successfully!";
  message.style.color = "green";
});
