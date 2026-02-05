const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwhXi327MTxDFYODUeABwIqQp0bUmcJFFcQOGRYljjITxeGNiXciQ8h0pmPHkMMmrVt/exec";

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
