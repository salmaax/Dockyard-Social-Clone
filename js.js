//loading page
$(window).on("load", function () {
  $(".center").fadeOut(1000);
  $(".content").fadeIn(1000);
});

//scroll spinner in mid1
const text = document.getElementById("rotated");
const rotate = new CircleType(rotated).radius(50);

window.addEventListener("scroll", function () {
  text.style.transform = "rotate(" + window.scrollY * 0.15 + "deg)";
});

//event swipper
var swiper = new Swiper(".event-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// // shopping cart
// var products_container = document.querySelector(".cart-tickets");
// var shopping_cart = document.querySelectorAll(".cart");
// var total_price = document.querySelectorAll(".total-price");
// var total = 0;
// var products = [
//   {
//     id: 0,
//     quantity: 0,
//     count: 0,
//     title: "Shoes",
//     description: "This is a very nice shoes",
//     price: 20,
//     img: "http://cdn.shopify.com/s/files/1/0075/3929/4305/collections/G22_WA_AP_NAV-Shoes.jpg?v=1645999375",
//   },
//   {
//     id: 1,
//     quantity: 0,
//     count: 0,
//     title: "T-shirt",
//     description: "Black t-shirt",
//     price: 30,
//     img: "https://cdn.mukama.com/31812-thickbox_default/formal-friday-ultrafine-merino-t-shirt-black.jpg",
//   },
//   {
//     id: 2,
//     quantity: 0,
//     count: 0,
//     title: "Pants",
//     description: "Comfy pants",
//     price: 40,
//     img: "https://media.wired.com/photos/611c5312798f0e2c853b702f/1:1/w_993,h_993,c_limit/Gear-Cargo-Pants-are-Back-1302952122.jpg",
//   },
//   {
//     id: 3,
//     quantity: 0,
//     count: 0,
//     title: "Watch",
//     description: "Elegent watch",
//     price: 50,
//     img: "https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126284rbr-0049.png?impolicy=v6-upright&imwidth=270",
//   },
// ];
// var cart_products = [];
// function displayProducts() {
//   products_container.innerHTML = "";
//   products.map(
//     (product) =>
//       (products_container.innerHTML += `
//         <div class="card" style="width: 18rem;">
//         <img class="card-img-top" src="${product.img}" alt="Card image cap">
//         <div class="card-body" style="text-align:center;">
//           <h5 class="card-title">${product.title}</h5>
//           <p class="card-text">${product.description}</p>
//           <p>${product.price} </p>
//           <div class="quantity-container">
//           <button onclick="decrement(${product.id})">-</button>
//             <p> ${product.count}</p>
//             <button onclick="increment(${product.id})">+</button>
//           </div>
//           <a href="#" onclick="buyProduct(${product.id})" class="btn btn-primary">Buy now</a>
//         </div>
//       </div>
//         `)
//   );
// }

// function displayCart() {
//   shopping_cart.innerHTML = "";
//   cart_products.map(
//     (product) =>
//       (shopping_cart.innerHTML += `
//         <div class="card" style="width: 18rem;">
//         <img class="card-img-top" src="${product.img}" alt="Card image cap">
//         <div class="card-body">
//           <h5 class="card-title">${product.title}</h5>
//           <p class="card-text">${product.description}</p>
//           <p>${product.price} </p>
//           <p>${product.quantity}</p>
//           <a href="#" onclick="deleteProduct(${product.id})" class="btn btn-primary">Delete</a>
//         </div>
//       </div>
//         `)
//   );
//   total = 0;
//   cart_products.map((product) => (total += product.quantity * product.price));
//   total_price.innerHTML = "The total is " + total;
// }
// displayProducts();
// displayCart();

// function buyProduct(id) {
//   let product_to_buy = products.filter((product) => {
//     return product.id == id;
//   });
//   if (product_to_buy[0].count == 0) {
//     alert("Select quantity");
//     return;
//   }
//   cart_products.push(product_to_buy[0]);
//   let index = cart_products.findIndex((element) => element.id == id);
//   cart_products[index].quantity += product_to_buy[0].count;
//   let final_cart = cart_products.filter(
//     (value, index, self) => self.indexOf(value) === index
//   );
//   cart_products = final_cart;
//   console.log(cart_products);
//   displayCart();
// }

// function deleteProduct(id) {
//   // cart_products
//   let product_to_remain = cart_products.filter((product) => {
//     return product.id !== id;
//   });
//   let index = cart_products.findIndex((element) => element.id == id);
//   cart_products[index].quantity = 0;
//   cart_products = product_to_remain;
//   displayCart();
// }

// function decrement(id) {
//   if (products[id].count >= 1) {
//     products[id].count--;
//   }
//   displayProducts();
// }
// function increment(id) {
//   products[id].count++;
//   displayProducts();
// }
