const products = [

    {
        id: 1,
        name: "Women's Printed Kurti",
        price: 210,
        category: "fashion",
        image: "https://images.meesho.com/images/products/423725527/hkm8h_512.avif?",
        link: "https://www.meesho.com/s/p/709wpj?utm_source=share_c45a2a5b5115877b14d13446e761034d96257ff3c4bd988c5f08c0875cf67ac3"
    },

    {
        id: 2,
        name: "Kurti Combo",
        price: 570,
        category: "Fashion",
        image: "https://images.meesho.com/images/products/471466027/1rdvt_512.avif?",
        link: "https://www.meesho.com/s/p/7sp5ij?utm_source=share_c45a2a5b5115877b14d13446e761034d96257ff3c4bd988c5f08c0875cf67ac3"
    },

    {
        id: 3,
        name: "Women's Kurti",
        price: 333,
        category: "Fashion",
        image: "https://images.meesho.com/images/products/471130720/myfr1_512.avif?",
        link: "https://www.meesho.com/s/p/7shysg?utm_source=share_c45a2a5b5115877b14d13446e761034d96257ff3c4bd988c5f08c0875cf67ac3"
    },

    {
        id: 4,
        name: "Formal Shirt Blue",
        price: 180,
        category: "Fashion",
        image: "https://images.meesho.com/images/products/459099706/6dquy_512.avif?",
        link: "https://www.meesho.com/s/p/7lc3lm?utm_source=share_c45a2a5b5115877b14d13446e761034d96257ff3c4bd988c5f08c0875cf67ac3"
    },

    {
        id: 5,
        name: "Formal shirt Pink",
        price: 153,
        category: "Fashion",
        image: "https://images.meesho.com/images/products/569422056/vit7d_512.avif?",
        link: "https://www.meesho.com/s/p/9f0ovc?utm_source=share_c45a2a5b5115877b14d13446e761034d96257ff3c4bd988c5f08c0875cf67ac3"
    },

    {
        id: 6,
        name: "Women's Watch",
        price: 182,
        category: "Accessories",
        image: "https://images.meesho.com/images/products/652543861/nx0g4_512.avif?",
        link: "https://www.meesho.com/s/p/asia2d?utm_source=share_c45a2a5b5115877b14d13446e761034d96257ff3c4bd988c5f08c0875cf67ac3"
    },
    {
        id: 7,
        name: "Women's Top",
        price: 278,
        category: "Fashion",
        image: "https://images.meesho.com/images/products/1087572129/fro5p_512.avif?width=512",
        link: "https://www.meesho.com/s/p/hzig0x?utm_source=share_c45a2a5b5115877b14d13446e761034d96257ff3c4bd988c5f08c0875cf67ac3"
    }
];


let wishlist = [];


const productContainer =
    document.getElementById("productContainer");

const wishlistCount =
    document.getElementById("wishlistCount");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");


/* Display Products */

function displayProducts(productList) {

    productContainer.innerHTML = "";


    if (productList.length === 0) {

        productContainer.innerHTML =
            "<p>No products found.</p>";

        return;
    }


    productList.forEach(product => {

        const isWishlist =
            wishlist.includes(product.id);


        const card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-info">

                <span class="category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <div class="price">
                    ₹${product.price}
                </div>

                <div class="buttons">

                    <a
                        href="${product.link}"
                        target="_blank"
                        class="view-btn"
                    >
                        View on Meesho
                    </a>

                    <button
                        class="wishlist-btn ${isWishlist ? "active" : ""}"
                        onclick="toggleWishlist(${product.id})"
                    >
                        ${isWishlist ? "❤️" : "♡"}
                    </button>

                </div>

            </div>
        `;


        productContainer.appendChild(card);

    });

}


/* Wishlist */

function toggleWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(item => item !== id);

    } else {

        wishlist.push(id);

    }


    updateWishlistCount();

    displayProducts(products);

}


/* Wishlist Count */

function updateWishlistCount() {

    wishlistCount.textContent =
        wishlist.length;

}


/* Search */

function filterProducts() {

    const search =
        searchInput.value.toLowerCase();

    const category =
        categoryFilter.value;


    const filtered =
        products.filter(product => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(search);


            const matchesCategory =
                category === "all" ||
                product.category === category;


            return matchesSearch &&
                   matchesCategory;

        });


    displayProducts(filtered);

}


searchInput.addEventListener(
    "input",
    filterProducts
);


categoryFilter.addEventListener(
    "change",
    filterProducts
);


/* Initial Load */

displayProducts(products);

updateWishlistCount();