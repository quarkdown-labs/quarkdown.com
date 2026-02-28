document.querySelectorAll<HTMLElement>("[data-copyable]").forEach((el) => {
  el.addEventListener("click", async () => {
    const text = el.querySelector("code")?.textContent ?? el.textContent ?? "";
    await navigator.clipboard.writeText(text);
    el.dataset.copied = "";
  });

  el.addEventListener("mouseenter", () => {
    delete el.dataset.copied;
  });
});
