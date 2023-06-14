let cakes = JSON.parse(localStorage.getItem("cakes")) || [
{
        id: 1,
        name: "Cupcakes",
        image: "https://i.postimg.cc/P5Nyn2PF/Strawberry-Cupcakes-Recipe-Card.jpg",
        price: 100,
        category: "best-sellers",
},
{
        id: 2,
        name: "A Chocolate Cake",
        image: "https://i.postimg.cc/8czqMLzJ/chocolate.jpg",
        price: 150,
        category: "best-sellers",
},
{
        id: 3,
        name: "Caramel Cake",
        image:"https://i.postimg.cc/G27M0Vbt/Salted-Caramel-Cake1-Copy.webp",
        price: 150,
        category: "best-sellers",
},
{
        id: 4,
        name: "Cheese Cake",
        image: "https://i.postimg.cc/pX8g8V2B/Pefect-Cheesecake-7.jpg",
        price: 45,
        category: "best-sellers",
    },
    {
        id: 5,
        name: "Hertzoggie",
        image: "https://i.postimg.cc/C1q4t1rP/Hertzoggies.jpg",
        price: 80,
        category: "best-sellers",
    },
    {
        id: 6,
        name: "Elegant 3-Tier",
        image: "https://i.postimg.cc/3JRkJ6Y7/wedding1.jpg",
        price: 3000 ,
        category: "weddings",
    },
    {
        id: 7,
        name: "Autumn-styled",
        image:"https://i.postimg.cc/PJ2sL2b8/wedding2.jpg",
        price:1750,
        category: "weddings",
    },

    {
        id: 8,
        name: "Simplistic 2-tier",
        image:"https://i.postimg.cc/Nj88RS9V/wedding3.jpg",
        price: 1300,
        category: "weddings",
    },
    {
        id: 9,
        name: "Extravagant-white",
        image:"https://i.postimg.cc/0yCW9bfb/wedding4.webp",
        price:2500,
        category: "weddings",
    },
    {
        id: 10,
        name: "Black-themed",
        image:"https://i.postimg.cc/W1JNKc6W/wedding5.jpg",
        price:2000,
        category: "weddings",
    },
    {
        id: 11,
        name: "Simplistic pink",
        image: "https://i.postimg.cc/8C4zdBbN/IMG-20230608-WA0007.jpg",
        price: 500,
        category: "birthdays",
    },
    {
        id: 12,
        name: "Black & gold",
        image:"https://i.postimg.cc/76CbxJg4/IMG-20230608-WA0009.jpg",
        price:800,
        category: "birthdays",
    },
    {
        id: 13,
        name: "Jagermeister cake",
        image: "https://i.postimg.cc/gkjtGY7D/IMG-20230608-WA0010.jpg",
        price: 2500,
        category: "birthdays",
    },

    {
        id: 14,
        name: "Cartoon cake",
        image: "https://i.postimg.cc/1twhcD6J/IMG-20230608-WA0011.jpg",
        price:2500,
        category: "birthdays",
    },
    {
        id: 15,
        name: "Cartoon single-tier",
        image:"https://i.postimg.cc/jjfkGt5j/IMG-20230608-WA0014.jpg",
        price:1200,
        category: "birthdays",
    },
    {
        id: 16,
        name: "Eclairs",
        image: "https://i.postimg.cc/SRbXDLPs/eclairs.jpg",
        price:100 ,
        category: "fancies",
    },
    {
        id: 17,
        name: "Lamingtons",
        image: "https://i.postimg.cc/dt7X82Yd/lammingtons.jpg",
        price:100 ,
        category: "fancies",
    },
    {
        id: 18,
        name: "Cupcakes",
        image: "https://i.postimg.cc/P5Nyn2PF/Strawberry-Cupcakes-Recipe-Card.jpg",
        price: 100,
        category: "fancies",
    },
    {
        id: 19,
        name: "Cream Horns",
        image: "https://i.postimg.cc/J4bF61s4/cream-horns-square.jpg",
        price:100 ,
        category: "fancies",
    },
    {
        id: 20,
        name: "Lemon meringue",
        image: "https://i.postimg.cc/nrK1kh0y/Mini-Lemon-Meringue-Tarts-1.jpg",
        price:100 ,
        category: "fancies",
    },
];
window.onload = function (e) {
    let cakeItems = [];
    cakes.forEach((cake) => {
    if (cake.category == "best-sellers") {
        cakeItems +=
    `
            <div class="card">
            <img src="` +
        cake.image +
        `" alt="" width="100px" height="100px">
            <div class="card-body">
                <h5>` +
        cake.name +
        `</h5>
                <p> R ` +
        cake.price +
        `</p>
            <button class="btn" onclick="add()" >Add to cart</button>
            </div>
            </div>
            `;
    }
    document.querySelector("#stuff").innerHTML = cakeItems;
    });
    cakeItems = "";
    cakes.forEach((cake) => {
    if (cake.category == "weddings") {
        cakeItems +=
        `
        <div class="card">
            <img src="` +
        cake.image +
        `" alt="" width="100px" height="100px">
            <div class="card-body">
                <h5>` +
        cake.name +
        `</h5>
        <p> R ` +
        cake.price +
        `</p>
            <button class="btn" onclick="add()">Add to cart</button>
            </div>
        </div>`;
    }
    document.querySelector("#goed").innerHTML = cakeItems;
    });
    cakeItems = "";
    cakes.forEach((cake) => {
    if (cake.category == "birthdays") {
        cakeItems +=
        `
        <div class="card">
            <img src="` +
        cake.image +
        `" alt="" width="100px" height="100px">
            <div class="card-body">
            <h5>` +
        cake.name +
        `</h5>
            <p> R ` +
        cake.price +
        `</p>
            <button class="btn" onclick="add()">Add to cart</button>
            </div>
        </div>`;
    }
    document.querySelector("#dinges").innerHTML = cakeItems;
    });
    cakeItems = "";
    cakes.forEach((cake) => {
    if (cake.category == "fancies") {
        cakeItems +=
        `
        <div class="card">
            <img src="` +
        cake.image +
        `" alt="" width="100px" height="100px">
            <div class="card-body">
            <h5>` +
        cake.name +
        `</h5>
            <p> R ` +
        cake.price +
        `</p>
            <button class="btn" onclick="add()" >Add to cart</button>
            </div>
        </div>`;
    }
    document.querySelector("#lekker").innerHTML = cakeItems;
    });
};