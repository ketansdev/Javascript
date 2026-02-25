const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    const isActive = item.classList.contains("active");

    // Close all items first
    faqItems.forEach((i) => {
      i.classList.remove("active");
    });

    // If it was NOT active, open it
    if (!isActive) {
      item.classList.add("active");
    }

  });
});