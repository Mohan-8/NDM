function de() {
  alert("Redirecting to Login page");
}

function login(event) {
  event.preventDefault();
  var rollNumber = document.getElementById("rollnumber").value;
  var password = document.getElementById("password").value;
  if (password === "Hits@123") {
    alert("welcome " + rollNumber);
    window.location.href =
      "./student.html?rollnumber=" + encodeURIComponent(rollNumber);
  } else {
    alert("Invalid credentials");
  }
}

function register(event) {
  event.preventDefault();
  var rollNumber = document.getElementsByName("rollnumber")[0].value;
  var password = document.getElementsByName("password")[0].value;
  var name = document.getElementsByName("name")[0].value;
  var email = document.getElementsByName("em")[0].value;
  var photoURL = document.getElementsByName("photoURL")[0].value;
  var schoolOfStudy = document.getElementsByName("schoolOfStudy")[0].value;
  var admissionYear = document.getElementsByName("admissionYear")[0].value;
  var address = document.getElementsByName("address")[0].value;
  var contactNumber = document.getElementsByName("contactNumber")[0].value;
  localStorage.setItem("rollNumber", rollNumber);
  localStorage.setItem("password", password);
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("photoURL", photoURL);
  localStorage.setItem("schoolOfStudy", schoolOfStudy);
  localStorage.setItem("admissionYear", admissionYear);
  localStorage.setItem("address", address);
  localStorage.setItem("contactNumber", contactNumber);
  alert("Form submitted successfully!");
  window.location.href = "index.html";
}
