// function redirectToLinkedIn(){ window.location = "https://www.linkedin.com/in/sufian-mohammad-798830230"; }

// function redirectToGitHub(){ window.location = "https://github.com/Suf42"; }

function redirectToLinkedIn(){ window.open("https://www.linkedin.com/in/sufian-mohammad-798830230", "_blank"); }

function redirectToGitHub(){ window.open("https://github.com/Suf42", "_blank"); }

document.getElementById("button-LinkedIn").addEventListener("click", redirectToLinkedIn);

document.getElementById("button-GitHub").addEventListener("click", redirectToGitHub);