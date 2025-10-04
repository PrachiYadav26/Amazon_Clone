// ---------------- Search Bar Interaction ----------------
const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("focus", () => {
  searchInput.style.backgroundColor = "#fff7e6"; // soft highlight
});

searchInput.addEventListener("blur", () => {
  searchInput.style.backgroundColor = "white";
});

// ---------------- Scroll-to-Top Button ----------------
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerText = "↑ Top";
scrollToTopBtn.classList.add("scroll-top");
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------------- Mini Cart Setup ----------------
let cartItemCount = 0;
const cartIcon = document.querySelector(".Cart-icon");

// Create cart badge
const cartBadge = document.createElement("span");
cartBadge.style.cssText = `
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
cartIcon.appendChild(cartBadge);

// Click behavior for cart
cartIcon.addEventListener("click", () => {
  if (cartItemCount === 0) {
    alert("Your cart is empty. Let's add some goodies!");
  } else {
    alert(`You have ${cartItemCount} item(s) in your cart.`);
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

const shopContainer = document.querySelector(".Shop");
shopContainer.innerHTML = ""; // clear old content

products.forEach((product, index) => {
  const productBox = document.createElement("div");
  productBox.classList.add("box");
  productBox.innerHTML = `
    <h2>${product.name}</h2>
    <div class="imgBox${index + 1}" style="background-image:url('${product.image}')">
      <p><a href="#">See More</a></p>
    </div>
    <p style="text-align:center; font-weight:bold; margin:10px 0;">$${product.price.toFixed(2)}</p>
    <div style="display:flex; justify-content:center;">
      <button class="add-to-cart">Add to Cart</button>
    </div>
  `;
  shopContainer.appendChild(productBox);
});

// ---------------- Add to Cart Functionality ----------------
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    cartItemCount++;
    cartBadge.innerText = cartItemCount;
    cartBadge.style.display = "block";
    alert("🎉 Item added to your cart!");
  });
});

// ---------------- Live Search Functionality ----------------
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  document.querySelectorAll(".box").forEach((box) => {
    const title = box.querySelector("h2").innerText.toLowerCase();
    box.style.display = title.includes(query) ? "block" : "none";
  });
});
