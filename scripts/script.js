function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function validate() {
    var user = document.forms["loginpage_inputs"]["username"].value;
    var pass = document.forms["loginpage_inputs"]["password"].value;
    if (user, pass  == "") {
      alert("Name must be filled out");
      return false;
    }
  }