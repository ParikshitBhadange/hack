
// Vendor/Supplier form toggle buttons from hero section
const heroVendorBtn = document.getElementById('vendor-signup-btn');
const heroSupplierBtn = document.getElementById('supplier-signup-btn');

// Form section elements
const vendorForm = document.getElementById('vendor-form');
const supplierForm = document.getElementById('supplier-form');

// Optional: also toggle the top selector buttons
const userTypeBtns = document.querySelectorAll('.user-type-btn');

function activateVendorForm() {
    vendorForm.classList.add('active');
    supplierForm.classList.remove('active');
    userTypeBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('.user-type-btn.vendor')?.classList.add('active');
}

function activateSupplierForm() {
    supplierForm.classList.add('active');
    vendorForm.classList.remove('active');
    userTypeBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('.user-type-btn.supplier')?.classList.add('active');
}

// Event listeners for hero buttons
heroVendorBtn.addEventListener('click', activateVendorForm);
heroSupplierBtn.addEventListener('click', activateSupplierForm);


window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get("type");

    const vendorForm = document.getElementById("vendor-form");
    const supplierForm = document.getElementById("supplier-form");

    if (type === "vendor") {
        vendorForm.style.display = "block";
        supplierForm.style.display = "none";
    } else if (type === "supplier") {
        vendorForm.style.display = "none";
        supplierForm.style.display = "block";
    }
});
