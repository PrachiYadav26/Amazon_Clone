// script.js

// ---------------- Search Bar Focus ----------------
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("focus", () => {
  searchInput.style.backgroundColor = "#fff7e6";
});
searchInput.addEventListener("blur", () => {
  searchInput.style.backgroundColor = "white";
});

// ---------------- Scroll-to-Top Button ----------------
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑ Top";
scrollBtn.classList.add("scroll-top");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------------- Mini Cart ----------------
let cartCount = 0;
const cartIcon = document.querySelector(".Cart-icon");

// Create a small cart counter bubble
const cartCounter = document.createElement("span");
cartCounter.style.cssText = `
  background: red;
  color: white;
  font-size: 0.75rem;
  border-radius: 50%;
  padding: 2px 6px;
  position: absolute;
  top: 5px;
  right: 10px;
  display: none;
`;
cartIcon.style.position = "relative";
cartIcon.appendChild(cartCounter);

cartIcon.addEventListener("click", () => {
  if (cartCount === 0) {
    alert("Your cart is currently empty!");
  } else {
    alert(`You have ${cartCount} item(s) in your cart.`);
  }
});

// ---------------- Dynamic Products ----------------
const products = [
  { name: "Wireless Headphones", price: 59.99, image: "box1_image.jpg" },
  { name: "Smartwatch", price: 129.99, image: "box2_image.jpg" },
  { name: "Portable Charger", price: 25.99, image: "box3_image.jpg" },
  { name: "Bluetooth Speaker", price: 49.99, image: "box4_image.jpg" },
  { name: "Camera Lens", price: 199.99, image: "box5_image.jpg" },
  { name: "Gaming Mouse", price: 39.99, image: "box6_image.jpg" },
  { name: "LED Desk Lamp", price: 29.99, image: "box7_image.jpg" },
  { name: "Fitness Tracker", price: 59.99, image: "box8_image.jpg" },
];

// Container to hold dynamic products
const shopSection = document.querySelector(".Shop");
shopSection.innerHTML = ""; // clear existing static boxes

products.forEach((product, index) => {
  const box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = `
    <h2>${product.name}</h2>
    <div class="imgBox${index + 1}" style="background-image:url('${product.image}')">
      <p><a href="#">See More</a></p>
    </div>
    <p style="text-align:center; font-weight:bold; margin:10px 0;">$${product.price}</p>
    <div style="display:flex; justify-content:center;">
      <button class="add-cart">Add to Cart</button>
    </div>
  `;
  shopSection.appendChild(box);
});

// ---------------- Add to Cart Functionality ----------------
document.querySelectorAll(".add-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartCounter.innerText = cartCount;
    cartCounter.style.display = "block";
    alert("Item added to cart!");
  });
});

// ---------------- Live Search ----------------
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    const title = box.querySelector("h2").innerText.toLowerCase();
    if (title.includes(searchTerm)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
});
