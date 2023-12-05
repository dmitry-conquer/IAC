import MicroModal from "micromodal";

const feedbackFormWrap = document.getElementById("feedback-form-wrap");
const formErrorMessage = document.getElementById("form-error-message");
const feedbackForm = feedbackFormWrap.querySelector("form");

const formField = feedbackForm.querySelectorAll(".form-field");

feedbackForm.addEventListener("submit", e => {
  const errors = formValidate(formField);
  if (errors > 0) {
    e.preventDefault();
    formErrorMessage.style.display = "block";
    if (document.getElementById("modal-feedback-success")) {
      MicroModal.show("modal-feedback-success", {
        disableScroll: true
      });
    }
  } else {
    if (document.getElementById("modal-feedback-success")) {
      MicroModal.show("modal-feedback-success");
    }
  }
});

function formValidate(fields) {
  let errors = 0;
  fields.forEach(field => {
    if (field.value === "") {
      field.classList.add("field-error");
      errors++;
    }
  });
  return errors;
}

feedbackForm.addEventListener("focusin", e => {
  if (e.target.closest(".form-field")) {
    e.target.classList.remove("field-error");
  }
});
