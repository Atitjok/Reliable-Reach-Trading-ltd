function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you for contacting Reliable Reach Trading Ltd. We will respond shortly.");
});
