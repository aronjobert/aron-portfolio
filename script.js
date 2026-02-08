$(document).ready(function () {

  /* =========================
     SCROLL REVEAL
  ========================= */
  function revealOnScroll() {
    var windowHeight = $(window).height();

    $(".reveal").each(function () {
      var elementTop = $(this).offset().top - $(window).scrollTop();
      var revealPoint = 100;

      if (elementTop < windowHeight - revealPoint) {
        $(this).addClass("active");
      }
    });
  }

  $(window).on("scroll", revealOnScroll);
  revealOnScroll();


  /* =========================
     MOBILE MENU
  ========================= */
  var $menuToggle = $("#menuToggle");
  var $navLinks = $("#navLinks");
  var $navBackdrop = $("#navBackdrop");
  var $icon = $menuToggle.find("i");

  function closeMenu() {
    $menuToggle.removeClass("active");
    $navLinks.removeClass("active");
    $navBackdrop.removeClass("active");

    $icon.removeClass("fa-xmark").addClass("fa-bars");
  }

  $menuToggle.on("click", function () {
    $menuToggle.toggleClass("active");
    $navLinks.toggleClass("active");
    $navBackdrop.toggleClass("active");

    if ($navLinks.hasClass("active")) {
      $icon.removeClass("fa-bars").addClass("fa-xmark");
    } else {
      $icon.removeClass("fa-xmark").addClass("fa-bars");
    }
  });

  $navBackdrop.on("click", closeMenu);

  $(".nav-links a").on("click", closeMenu);


// Contact form submit
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  status.textContent = "Sending...";

  const res = await fetch("/app/api/send/contact.js", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    status.textContent = "Message sent successfully!";
    form.reset();
  } else {
    status.textContent = "Something went wrong.";
  }
});


});

