const menDiv = document.getElementById("men");
const womenDiv = document.getElementById("women");
const kidsdiv = document.getElementById("kids");
const maindiv = document.getElementById("maindiv");

async function displaymen() {
  clearMainDiv();

  const api =
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";

  try {
    const response = await fetch(api);
    const data = await response.json();

    // Check if 'data' and 'categories' are defined
    if (data && data.categories) {
      const menProducts = data.categories.find(
        (category) => category.category_name === "Men"
      )?.category_products;
      console.log(menProducts);

      // Check if 'menProducts' is defined and is an array
      if (menProducts && Array.isArray(menProducts)) {
        maindiv.innerHTML = ""; // Clear existing products
        menProducts.forEach((product) => {
          const productCard = createProductCard(product);
          maindiv.appendChild(productCard);
        });
      } else {
        console.error("No valid Men products found in the API response.");
      }
    } else {
      console.error("Invalid data structure in the API response.");
    }
  } catch (error) {
    console.error("Error fetching and displaying Men products:", error);
  }
}

const createProductCard = (product) => {
  const productCard = document.createElement("div");
  productCard.className = "product-card";

  if (product.badge_text) {
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.innerText = product.badge_text;
    productCard.appendChild(badge);
  }

  const productTumb = document.createElement("div");
  productTumb.className = "product-tumb";
  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.alt = product.title;
  productTumb.appendChild(productImage);

  const productDetails = document.createElement("div");
  productDetails.className = "product-details";

  const tittleVendorDiv = document.createElement("div");
  tittleVendorDiv.classList.add("title_vendor_div");
  // title
  const productTitle = document.createElement("h4");

  productTitle.innerText = product.title;
  tittleVendorDiv.appendChild(productTitle);
  // vendor
  const productDescription = document.createElement("p");
  productDescription.innerText = product.vendor;
  tittleVendorDiv.appendChild(productDescription);

  productDetails.appendChild(tittleVendorDiv);
  //
  const priceDiv = document.createElement("div");
  priceDiv.classList.add("priceDiv");
  // discount price
  const discountPrice = document.createElement("p");
  discountPrice.innerText = `Rs ${product.price}.00`;
  priceDiv.appendChild(discountPrice);
  // original price
  const pricee = document.createElement("p");
  pricee.innerText = `${product.compare_at_price}.00`;
  priceDiv.appendChild(pricee);
  // discount
  const dicountP = document.createElement("p");
  dicountP.innerText = "50% Off";
  priceDiv.appendChild(dicountP);
  productDetails.appendChild(priceDiv);

  // add to cart button
  const addBtn = document.createElement("button");
  addBtn.innerHTML = "Add to Cart";
  addBtn.classList.add("addBtn");
  productDetails.appendChild(addBtn);

  //
  const productPrice = document.createElement("div");
  productPrice.className = "product-price";
  const smallPrice = document.createElement("small");
  smallPrice.innerText = product.discounted_price;
  const originalPrice = document.createElement("span");
  originalPrice.innerText = product.original_price;
  productPrice.appendChild(smallPrice);
  productPrice.appendChild(originalPrice);

  productCard.appendChild(productTumb);
  productCard.appendChild(productDetails);

  return productCard;
};

async function displaywomen() {
  clearMainDiv();

  const api =
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";

  try {
    const response = await fetch(api);
    const data = await response.json();

    // Check if 'data' and 'categories' are defined
    if (data && data.categories) {
      const womenProducts = data.categories.find(
        (category) => category.category_name === "Women"
      )?.category_products;
      console.log(womenProducts);

      // Check if 'womenProducts' is defined and is an array
      if (womenProducts && Array.isArray(womenProducts)) {
        maindiv.innerHTML = ""; // Clear existing products
        womenProducts.forEach((product) => {
          const productCard = createProductCard(product);
          maindiv.appendChild(productCard);
        });
      } else {
        console.error("No valid Men products found in the API response.");
      }
    } else {
      console.error("Invalid data structure in the API response.");
    }
  } catch (error) {
    console.error("Error fetching and displaying Men products:", error);
  }
}

async function displaykids() {
  clearMainDiv();

  const api =
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";

  try {
    const response = await fetch(api);
    const data = await response.json();

    // Check if 'data' and 'categories' are defined
    if (data && data.categories) {
      const kidsProducts = data.categories.find(
        (category) => category.category_name === "Kids"
      )?.category_products;
      console.log(kidsProducts);

      // Check if 'kidsProducts' is defined and is an array
      if (kidsProducts && Array.isArray(kidsProducts)) {
        maindiv.innerHTML = ""; // Clear existing products
        kidsProducts.forEach((product) => {
          const productCard = createProductCard(product);
          maindiv.appendChild(productCard);
        });
      } else {
        console.error("No valid Men products found in the API response.");
      }
    } else {
      console.error("Invalid data structure in the API response.");
    }
  } catch (error) {
    console.error("Error fetching and displaying Men products:", error);
  }
}

function clearMainDiv() {
  const maindiv = document.getElementById("maindiv");

  if (maindiv) {
    maindiv.innerHTML = "";
  } else {
    console.error("Maindiv element not found.");
  }
}

displaymen();

menDiv.addEventListener("click", (e) => {
  e.preventDefault();
  displaymen();
});

womenDiv.addEventListener("click", (e) => {
  e.preventDefault();
  displaywomen();
});

kidsdiv.addEventListener("click", (e) => {
  e.preventDefault();
  displaykids();
});

// tabs active styling
let tabs = document.querySelectorAll(".tab");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    let j = 0;
    while (j < tabs.length) {
      tabs[j++].className = "tab";
    }
    tabs[i].className = "tab active";
  });
}
