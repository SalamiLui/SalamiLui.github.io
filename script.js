document.addEventListener("DOMContentLoaded", () => {
  // Typewriter rotating messages in terminal header
  const messages = [
    "jl's trash codes fr fr",
    "please hire me :(",
    "profanities in comments is for aesthetics",
    "I'll make more trash in the future",
    "sjdflkajsdhflkjahsdlfkjhadsl"
  ];

  const typewriterElem = document.getElementById("typewriter");
  let msgIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let delayAfterComplete = 1500;

  function typeRotate() {
    const currentMsg = messages[msgIndex];
    if (!deleting) {
      typewriterElem.textContent = currentMsg.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentMsg.length) {
        deleting = true;
        setTimeout(typeRotate, delayAfterComplete);
      } else {
        setTimeout(typeRotate, 100);
      }
    } else {
      typewriterElem.textContent = currentMsg.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        msgIndex = (msgIndex + 1) % messages.length;
        setTimeout(typeRotate, 500);
      } else {
        setTimeout(typeRotate, 50);
      }
    }
  }
  typeRotate();

  // Age verification modal & BIOS loader
  const modal = document.getElementById("ageModal");
  const btnEnter = document.getElementById("btnEnter");
  const btnNo = document.getElementById("btnNo");
  const biosLoading = document.getElementById("biosLoading");

  const contactPanel = document.getElementById("contactPanel");
  const toggleContact = document.getElementById("toggleContact");

  if (!localStorage.getItem("ageAccepted")) {
    modal.style.display = "flex";
  } else {
    contactPanel.classList.add("show");
  }

  btnNo.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/watch?v=hPr-Yc92qaY";
  });

  btnEnter.addEventListener("click", () => {
    btnEnter.disabled = true;
    btnNo.disabled = true;

    biosLoading.style.display = "block";
    biosLoading.textContent = "";

    const biosLines = [
      "Booting BIOS...",
      "Initializing system hardware...",
      "Loading kernel modules...",
      "Checking memory... OK",
      "Detecting peripherals... OK",
      "Starting system services...",
      "Welcome to this shit...",
      "Loading complete. Enjoy!"
    ];

    let lineIndex = 0;

    function showNextLine() {
      if (lineIndex < biosLines.length) {
        biosLoading.textContent += biosLines[lineIndex] + "\n";
        lineIndex++;
        setTimeout(showNextLine, 700);
      } else {
        localStorage.setItem("ageAccepted", "true");
        modal.style.display = "none";
        contactPanel.classList.add("show");
      }
    }

    showNextLine();
  });

  // Minimize/Maximize toggle for contact panel
  toggleContact.addEventListener("click", () => {
    if (contactPanel.classList.contains("minimized")) {
      contactPanel.classList.remove("minimized");
      toggleContact.innerHTML = "&#x2212;"; // minus sign
      toggleContact.setAttribute("aria-label", "Minimize contact panel");
    } else {
      contactPanel.classList.add("minimized");
      toggleContact.innerHTML = "&#x2b;"; // plus sign
      toggleContact.setAttribute("aria-label", "Maximize contact panel");
    }
  });
});
