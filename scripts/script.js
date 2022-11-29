const darkThemeButton = document.querySelector(".dark-theme");
const body = document.querySelector("body");
const aside = document.querySelector("aside");
const noteArea = document.querySelector(".note-area");
const newNoteButton = document.querySelector(".new-note");
const saveButton = document.querySelector(".save");
const cancelButton = document.querySelector(".cancel");

const darkTheme = () => {
  body.classList.toggle("dark-body");
  aside.classList.toggle("dark-aside");
  noteArea.classList.toggle("dark-note-area");
  newNoteButton.classList.toggle("dark-new-note");
  saveButton.classList.toggle("dark-save");
  darkThemeButton.classList.toggle("dark-dark-theme");
  cancelButton.classList.toggle("dark-cancel");
  if (darkThemeButton.textContent === "Dark Theme") {
    darkThemeButton.textContent = "Light Theme";
  } else if (darkThemeButton.textContent === "Light Theme") {
    darkThemeButton.textContent = "Dark Theme";
  }
};
darkThemeButton.addEventListener("click", darkTheme);

const hideContent = () => {
  noteArea.classList.add("hide");
  saveButton.classList.add("hide");
  cancelButton.classList.add("hide");
};
cancelButton.addEventListener("click", hideContent);

const unhideContent = () => {
  noteArea.classList.remove("hide");
  saveButton.classList.remove("hide");
  cancelButton.classList.remove("hide");
};
newNoteButton.addEventListener("click", unhideContent);

const clearNoteArea = () => {
  noteArea.value = "";
};
newNoteButton.addEventListener("click", clearNoteArea);
