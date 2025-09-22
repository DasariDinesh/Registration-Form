const f = document.getElementById("f");
const n = document.getElementById("n");
const e = document.getElementById("e");
const ph = document.getElementById("ph");
const p = document.getElementById("p");

f.onsubmit = ev => {
  ev.preventDefault();
  let ok = true;

  // Name validation
  if (n.value.trim().length < 3) {
    ne.textContent = "Min 3 chars";
    ok = false;
  } else ne.textContent = "";

  // Email validation
  const emailPat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!e.value.match(emailPat)) {
    ee.textContent = "Invalid email";
    ok = false;
  } else ee.textContent = "";

  // Phone validation
  const phonePat = /^[0-9]{10}$/;
  if (!ph.value.match(phonePat)) {
    phe.textContent = "Phone must be 10 digits";
    ok = false;
  } else phe.textContent = "";

  // Password validation
  if (p.value.length < 6) {
    pe.textContent = "Min 6 chars";
    ok = false;
  } else pe.textContent = "";

  // Final check
  if (ok) {
    alert(`Name: ${n.value}\nEmail: ${e.value}\nPhone: ${ph.value}\nRegistered!`);
    f.reset();
  }
};
