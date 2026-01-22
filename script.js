let editSection = document.querySelector(".edit_section");
let container = document.querySelector(".container");
let leftContainer = document.querySelector(".left_container");
let rightContainer = document.querySelector(".right");
function updateProfile() {
  let name = document.querySelector(".nameInput").value;
  let bio = document.querySelector(".bioInput").value;
  let location = document.querySelector(".locationInput").value;
  if (name !== "") {
    document.querySelector(".prfile_text h1").innerText = name;
  }
  if (bio !== "") {
    document.querySelector(".bio_section p").innerText = bio;
  }
  if (location !== "") {
    document.querySelector(".prfile_text p").innerText = location;
  }
  editSection.classList.add("nodisplay");
  container.style.filter = "blur(0px)";
  leftContainer.style.filter = "blur(0px)";
  rightContainer.style.filter = "blur(0px)";
}

let home = document.querySelector(".home");
let profile = document.querySelector(".profile");
let profileSection = document.querySelector(".profile_section");
let middle_section = document.querySelector(".middle_container");

home.addEventListener("click", function () {
  profileSection.classList.add("nodisplay");
  profile.classList.remove("bold_color");
  middle_section.classList.remove("nodisplay");
  home.classList.add("bold_color");
});
profile.addEventListener("click", function () {
  middle_section.classList.add("nodisplay");
  home.classList.remove("bold_color");
  profileSection.classList.remove("nodisplay");
  profile.classList.add("bold_color");
});
function openEdit() {
  document.querySelector(".nameInput").value =
    document.querySelector(".prfile_text h1").innerText;
  document.querySelector(".bioInput").value =
    document.querySelector(".bio_section p").innerText;
  document.querySelector(".locationInput").value =
    document.querySelector(".prfile_text p").innerText;
  editSection.classList.remove("nodisplay");
  container.style.filter = "blur(8px)";
  leftContainer.style.filter = "blur(8px)";
  rightContainer.style.filter = "blur(8px)";
}
function closeEdit() {
  editSection.classList.add("nodisplay");
  container.style.filter = "blur(0px)";
  leftContainer.style.filter = "blur(0px)";
  rightContainer.style.filter = "blur(0px)";
}
