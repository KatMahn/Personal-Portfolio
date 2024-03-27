document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to profile links to change their color when hovered over
    var facebookLink = document.getElementById("profile-link-facebook");
    var githubLink = document.getElementById("profile-link-github");
    var twitterLink = document.getElementById("profile-link-twitter");
    var mailLink = document.getElementById("profile-link-mail");
    var callLink = document.getElementById("profile-link-call");

    function changeColor(event) {
        event.target.style.color = "red";
    }

    function revertColor(event) {
        event.target.style.color = "";
    }

    facebookLink.addEventListener("mouseenter", changeColor);
    facebookLink.addEventListener("mouseleave", revertColor);
    githubLink.addEventListener("mouseenter", changeColor);
    githubLink.addEventListener("mouseleave", revertColor);
    twitterLink.addEventListener("mouseenter", changeColor);
    twitterLink.addEventListener("mouseleave", revertColor);
    mailLink.addEventListener("mouseenter", changeColor);
    mailLink.addEventListener("mouseleave", revertColor);
    callLink.addEventListener("mouseenter", changeColor);
    callLink.addEventListener("mouseleave", revertColor);
});