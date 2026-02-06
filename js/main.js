const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxbyzEpIzZxOqX_L96sBM7xjEUj4ZYs5yAVI2aHKv2-Vaw8ZxSOCFRK4SO3rEsuakWM/exec";

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch(SCRIPT_URL, {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(() => {
    alert("✅ Booking confirmed!");
    this.reset();
  })
  .catch(() => {
    alert("❌ Network error. Please try again.");
  });
});
