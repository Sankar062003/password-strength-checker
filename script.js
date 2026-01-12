function checkStrength() {
  let password = document.getElementById("password").value;
  let strength = document.getElementById("strength");

  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) {
    strength.textContent = "Weak Password ❌";
    strength.style.color = "red";
  } else if (score <= 3) {
    strength.textContent = "Medium Password ⚠️";
    strength.style.color = "orange";
  } else {
    strength.textContent = "Strong Password ✅";
    strength.style.color = "lime";
  }
}
