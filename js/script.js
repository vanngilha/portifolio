document.addEventListener("DOMContentLoaded", function () {
  const animateElements = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  };

  const observer = new IntersectionObserver(animateElements, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  });

  document
    .querySelectorAll(".container-sobre, .container-softs, .container-projetos")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)";
      observer.observe(el);
    });
});
