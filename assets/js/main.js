document.addEventListener("DOMContentLoaded", function () {
  const trackBtn = document.getElementById("trackBtn");
  if (trackBtn) {
    trackBtn.addEventListener("click", () => {
      const id = document.getElementById("trackId").value.trim();
      const result = document.getElementById("trackResult");
      if (!id) {
        result.textContent = "يرجى إدخال رقم التتبع";
        return;
      }
      const stages = ["تم استلام الطلب", "قيد التجهيز", "في الطريق", "تم التسليم"];
      const index = id.length % stages.length;
      result.textContent = "حالة الطلب: " + stages[index];
    });
  }

  const forms = document.querySelectorAll(".form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("تم إرسال الطلب بنجاح");
      form.reset();
    });
  });
});
