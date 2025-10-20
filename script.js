/* Minimal JS: form handling + toast */
(function () {
  const form = document.getElementById("notify-form");
  const emailInput = document.getElementById("email");
  const toast = document.getElementById("toast");
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  function showToast(message, opts) {
    toast.textContent = message;
    toast.hidden = false;
    toast.className = "toast" + (opts?.error ? " toast--error" : "");
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => {
      toast.hidden = true;
    }, Math.min(6000, Math.max(2000, opts?.duration ?? 3000)));
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  }

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = String(emailInput?.value || "").trim();
    if (!isValidEmail(email)) {
      emailInput?.focus();
      showToast("Por favor, escribe un correo válido.", { error: true });
      return;
    }
    try {
      const endpoint = form.getAttribute("data-endpoint")?.trim();
      if (endpoint) {
        const data = new FormData();
        data.append("email", email);
        const resp = await fetch(endpoint, {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: data
        });
        if (!resp.ok) throw new Error("Bad response");
      } else {
        // fallback local demo: guarda en localStorage
        await new Promise((res) => setTimeout(res, 400));
        const list = JSON.parse(localStorage.getItem("notify:list") || "[]");
        if (!list.includes(email)) list.push(email);
        localStorage.setItem("notify:list", JSON.stringify(list));
      }
      showToast("¡Gracias! Te avisaremos al abrir.");
      form.reset();
    } catch (err) {
      showToast("Ups, algo salió mal. Inténtalo de nuevo.", { error: true });
    }
  });
})();
