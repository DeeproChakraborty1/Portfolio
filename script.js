function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/DeeproChakraborty_CV.pdf';
    link.download = 'DeeproChakraborty_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }  