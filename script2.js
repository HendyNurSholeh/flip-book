const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const papers = document.querySelectorAll(".paper");

let currentLocation = 0;
const numOfPapers = papers.length;

function showPage(index) {
    papers.forEach((paper, i) => {
        paper.classList.remove("flipped");
        paper.style.display = (i === index) ? "block" : "none"; // Show only the current paper
    });
}

function goNextPage() {
  if (currentLocation < numOfPapers - 1) {
      papers[currentLocation].classList.add("flipped");
      currentLocation++;
      showPage(currentLocation);
      setTimeout(() => {
          papers[currentLocation - 1].classList.remove("flipped"); // Hapus kelas flipped setelah animasi selesai
      }, 600); // Waktu harus sesuai dengan waktu transisi CSS
  }
}

function goPrevPage() {
  if (currentLocation > 0) {
      papers[currentLocation].classList.add("flipped");
      currentLocation--;
      showPage(currentLocation);
      setTimeout(() => {
          papers[currentLocation + 1].classList.remove("flipped"); // Hapus kelas flipped setelah animasi selesai
      }, 600); // Waktu harus sesuai dengan waktu transisi CSS
  }
}


// Initialize
showPage(currentLocation);
nextBtn.addEventListener("click", goNextPage);
prevBtn.addEventListener("click", goPrevPage);
