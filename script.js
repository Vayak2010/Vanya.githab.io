
const searchInput = document.getElementById("search");
const programs = document.querySelectorAll(".program");

searchInput.addEventListener("keyup", function(event) {
  const searchTerm = event.target.value.toLowerCase();

  programs.forEach(function(program) {
    const title = program.querySelector("h3").innerText.toLowerCase();
    const description = program.querySelector("p").innerText.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      program.style.display = "block";
    } else {
      program.style.display = "none";
    }
  });
});

// Download counter
const downloadButtons = document.querySelectorAll(".download");
let downloadCount = 0;

downloadButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    downloadCount++;
    console.log(Program ,downloaded ,$,{downloadCount} ,times);
  });
});

// Download confirmation pop-up
downloadButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const confirmDownload = confirm("Are you sure you want to download this program?");
    if (!confirmDownload) {
      event.preventDefault();
    }
  });
});
