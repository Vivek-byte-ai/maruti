function toggleDetail(productElement) {
  const all = document.querySelectorAll(".product");
  all.forEach(p => {
    if (p !== productElement) {
      p.classList.remove("open");
    }
  });
  productElement.classList.toggle("open");
}
