document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".programme__header");

    headers.forEach(header => {
        header.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            const content = document.getElementById(targetId);

            if (this.classList.contains("active")) {
                this.classList.remove("active");
                content.style.display = "none";
            } else {
                // Hide all other contents
                document.querySelectorAll(".programme__content").forEach(c => c.style.display = "none");
                document.querySelectorAll(".programme__header").forEach(h => h.classList.remove("active"));

                // Show current content
                this.classList.add("active");
                content.style.display = "block";
            }
        });
    });
});


// script.js
const academicTab = document.getElementById('academic-tab');
const selectionTab = document.getElementById('selection-tab');
const academicContent = document.getElementById('academic-content');
const selectionContent = document.getElementById('selection-content');

academicTab.addEventListener('click', () => {
  academicTab.classList.add('criteria__tab--active');
  selectionTab.classList.remove('criteria__tab--active');
  academicContent.classList.remove('criteria__content--hidden');
  selectionContent.classList.add('criteria__content--hidden');
});

selectionTab.addEventListener('click', () => {
  selectionTab.classList.add('criteria__tab--active');
  academicTab.classList.remove('criteria__tab--active');
  selectionContent.classList.remove('criteria__content--hidden');
  academicContent.classList.add('criteria__content--hidden');
});
