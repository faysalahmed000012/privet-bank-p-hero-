document.getElementById("inputBtn").addEventListener("click", function () {
  const email = document.getElementById("floatingInput");
  const password = document.getElementById("floatingPassword");

  if (email.value == "privet@gmail.com" && password.value == "secret") {
    window.location.href = "bank.html";
  } else {
    alert("wrong e-mail or password!!!");
  }
});
