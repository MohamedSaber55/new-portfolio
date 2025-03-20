'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    console.log(this.innerHTML);
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// // Select modal elements
// const projectModal = document.querySelector("[data-modal]");
// const modalCloseBtnModal = document.querySelector("[data-modal-close]");
// const overlayModal = document.querySelector("[data-overlay]");
// const modalTitleModal = document.querySelector("[data-modal-title]");
// const modalCategory = document.querySelector("[data-modal-category]");
// const modalImage = document.querySelector("[data-modal-image]");
// const modalDescription = document.querySelector("[data-modal-description]");
// const modalTechnologies = document.querySelector("[data-modal-technologies]");
// const modalLink = document.querySelector("[data-modal-link]");

// // Function to toggle modal visibility
// const toggleModal = () => {
//   projectModal.classList.toggle("active");
//   overlayModal.classList.toggle("active");
// };

// // Add click event to all project items
// document.querySelectorAll(".project-item").forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.preventDefault();

//     // Get project details
//     const title = item.querySelector(".project-title").innerText;
//     const category = item.querySelector(".project-category").innerText;
//     const imageSrc = item.querySelector("img").src;
//     const livePreviewLink = item.querySelector("a").href;

//     // Get additional details from data attributes
//     const description = item.dataset.description;
//     const technologies = item.dataset.technologies.split(","); // Split technologies into an array

//     // Populate modal with project details
//     modalTitleModal.innerText = title;
//     modalCategory.innerText = category;
//     modalImage.src = imageSrc;
//     modalDescription.innerText = description;

//     // Clear existing technologies list
//     modalTechnologies.innerHTML = "";

//     // Populate technologies as a list
//     technologies.forEach((tech) => {
//       const li = document.createElement("li");
//       li.textContent = tech.trim(); // Remove extra spaces
//       modalTechnologies.appendChild(li);
//     });

//     modalLink.href = livePreviewLink;

//     // Show the modal
//     toggleModal();
//   });
// });

// // Close modal when clicking the close button
// modalCloseBtnModal.addEventListener("click", toggleModal);

// // Close modal when clicking outside the modal (on the overlay)
// overlayModal.addEventListener("click", toggleModal);

// // Prevent modal from closing when clicking inside the modal content
// document.querySelector(".modal-content").addEventListener("click", (e) => {
//   e.stopPropagation(); // Stop the click event from propagating to the overlay
// });