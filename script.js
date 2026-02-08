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

});

// Contact form submit
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) alert("Message sent successfully!");
    else alert("Failed to send message.");
  } catch (err) {
    console.error(err);
    alert("Error sending message.");
  }
});
