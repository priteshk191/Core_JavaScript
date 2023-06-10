// script.js
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  document.body.classList.add("sent");
  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Create contact object
  const contact = {
    name,
    email,
    phone,
  };

  try {
    const response = await fetch("http://localhost:8080/api/contacts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    if (response.ok) {
      console.log("Contact created successfully!");
    } else {
      console.error("Error creating contact:", response.statusText);
    }
  } catch (error) {
    console.error("Error creating contact:", error.message);
  }
});
