let isNameEmailLocked = false;
const vendorForm = document.getElementById("vendorForm");
const productTable = document.getElementById("productTable").querySelector("tbody");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const productInput = document.getElementById("product");
const priceInput = document.getElementById("price");
const availabilitySelect = document.getElementById("availability");
const quantityInput = document.getElementById("quantity");

const addProductBtn = document.getElementById("addProductBtn");
const finalSubmitBtn = document.getElementById("finalSubmitBtn");

availabilitySelect.addEventListener("change", () => {
  if (availabilitySelect.value === "Out of Stock") {
    quantityInput.disabled = true;
    quantityInput.value = "";
  } else {
    quantityInput.disabled = false;
  }
});

addProductBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const product = productInput.value.trim();
  const price = priceInput.value.trim();
  const availability = availabilitySelect.value;
  const quantity = quantityInput.value.trim();

  if (!name || !email || !product || !price || !availability) {
    alert("Please fill all required fields.");
    return;
  }

  if (availability === "Available" && !quantity) {
    alert("Please enter quantity.");
    return;
  }

  // Freeze name and email after first product
  if (!isNameEmailLocked) {
    nameInput.disabled = true;
    emailInput.disabled = true;
    isNameEmailLocked = true;
  }

  const row = productTable.insertRow();
  row.insertCell(0).textContent = product;
  row.insertCell(1).textContent = price;
  row.insertCell(2).textContent = availability;
  row.insertCell(3).textContent = availability === "Available" ? quantity : "N/A";

  // Clear product inputs
  productInput.value = "";
  priceInput.value = "";
  availabilitySelect.value = "";
  quantityInput.value = "";
  quantityInput.disabled = false;
});

vendorForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (productTable.rows.length === 0) {
    alert("Please add at least one product before final submission.");
    return;
  }

  alert("Form submitted successfully!");
  // Here you can push the data to backend or console.log it
});
