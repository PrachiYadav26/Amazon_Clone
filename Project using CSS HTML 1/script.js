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
const cartCounter = document.querySelector(".cart-count");
const cartItemsContainer = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total span");

// ---------------- Dynamic Products ----------------
const products = [
  { name: "Wireless Headphones", price: 59.99, image: "images/box1_image.jpg" },
  { name: "Smartwatch", price: 129.99, image: "images/box2_image.jpg" },
  { name: "Portable Charger", price: 25.99, image: "images/box3_image.jpg" },
  { name: "Bluetooth Speaker", price: 49.99, image: "images/box4_image.jpg" },
  { name: "Camera Lens", price: 199.99, image: "images/box5_image.jpg" },
  { name: "Gaming Mouse", price: 39.99, image: "images/box6_image.jpg" },
  { name: "LED Desk Lamp", price: 29.99, image: "images/box7_image.jpg" },
  { name: "Fitness Tracker", price: 59.99, image: "images/box8_image.jpg" },
];

const productsContainer = document.querySelector(".products-container");

function renderProducts(list) {
  productsContainer.innerHTML = "";
  list.forEach((product, index) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button data-index="${index}">Add to Cart</button>
    `;
    productsContainer.appendChild(card);
  });

  // Add click listeners to buttons
  document.querySelectorAll(".product-card button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      addToCart(products[i]);
    });
  });
}

// ---------------- Add to Cart Functionality ----------------
function addToCart(product) {
  cartCount++;
  cartCounter.innerText = cartCount;

  // Add product to cart items container
  const item = document.createElement("div");
  item.classList.add("cart-item");
  item.innerHTML = `
    ${product.name} - $${product.price.toFixed(2)}
  `;
  cartItemsContainer.appendChild(item);

  // Update total
  const currentTotal = parseFloat(cartTotal.innerText);
  cartTotal.innerText = (currentTotal + product.price).toFixed(2);
}

// Cart icon click
cartIcon.addEventListener("click", () => {
  if (cartCount === 0) {
    alert("Your cart is currently empty!");
  } else {
    alert(`You have ${cartCount} item(s) in your cart.`);
  }
});

// ---------------- Live Search ----------------
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  // Filter dynamic products
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);

  // Optionally: filter static boxes
  const boxes = document.querySelectorAll(".Shop .box");
  boxes.forEach((box) => {
    const title = box.querySelector("h2").innerText.toLowerCase();
    box.style.display = title.includes(searchTerm) ? "block" : "none";
  });
});

// Initial render
renderProducts(products);
