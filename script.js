// Button click event
document.getElementById("myButton").addEventListener("click", function () {
  this.style.backgroundColor = "green";
  this.innerHTML = "You clicked me!";
});

// Hover effect event
document.getElementById("hoverBox").addEventListener("mouseover", function () {
  this.style.backgroundColor = "orange";
});
document.getElementById("hoverBox").addEventListener("mouseout", function () {
  this.style.backgroundColor = "lightblue";
});

// Keypress detection event
document
  .getElementById("keypressInput")
  .addEventListener("keydown", function (event) {
    document.getElementById(
      "keyPressedMessage"
    ).innerHTML = `You pressed the ${event.key} key!`;
  });

// Bonus: Secret action on double-click
document.getElementById("myButton").addEventListener("dblclick", function () {
  alert("Surprise! You double-clicked me.");
});

// Image Gallery click event
const images = document.querySelectorAll(".galleryImage");
images.forEach((image) => {
  image.addEventListener("click", function () {
    alert(`You clicked on ${this.alt}`);
  });
});

// Tabs functionality
const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const activeTab = this.getAttribute("data-tab");
    document.querySelectorAll(".tabContent").forEach((content) => {
      content.style.display = "none";
    });
    document.getElementById(activeTab).style.display = "block";
  });
});

// Form Validation
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let feedback = "";

    // Validate Name
    if (name.length < 1) {
      feedback = "Name is required!";
    }
    // Validate Email
    else if (!/\S+@\S+\.\S+/.test(email)) {
      feedback = "Please enter a valid email address!";
    }
    // Validate Password
    else if (password.length < 8) {
      feedback = "Password must be at least 8 characters!";
    }

    if (feedback) {
      document.getElementById("formFeedback").innerHTML = feedback;
    } else {
      document.getElementById("formFeedback").innerHTML =
        "Form submitted successfully!";
    }
  });
