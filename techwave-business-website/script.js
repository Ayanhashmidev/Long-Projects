// Go to services page from home
const btn = document.getElementById("goServices");
if (btn) {
  btn.addEventListener("click", function () {
    window.location.href = "services.html";
  });
}

// Contact form submit alert
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks! Your message has been sent.");
    form.reset();
  });
}
