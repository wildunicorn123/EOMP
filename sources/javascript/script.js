let people = [
{
    id: 1,
    image: "https://i.postimg.cc/P5PvR62V/C12-Abdoelmaaliek-Samaai-1.jpg",
    name: "Abdoel-Maliek",
    desc: "Abdoel is our very own gingerbread-man. He does not only specialise in gingerbread but he also makes a delicious sour dough bread",
},
{
    id: 2,
    image: "https://i.postimg.cc/vH2YgGbD/C12-Tara-Snell-1.jpg",
    name: "Tara",
    desc: "Tara is our Pastry Queen. She loves to make her famous eclairs and has been with us since the beginning.",
},
{
    id: 3,
    image:"https://i.postimg.cc/SRsWdm5j/20220503-112206.jpg",
    name: "Laeeq",
    desc: "Meet our Fancy-man. Laeeq, is the one who takes on our fancy orders with the help of his small team",
},
{
    id: 4,
    image:"https://i.postimg.cc/TwvwTbDn/Screenshot-20230613-101632.jpg",
    name: "Amber-Kaye",
    desc:"This is our founder and the person in charge of our schedule and orders."

},
];

let peopleShow = document.querySelector(".people");
people.forEach((data)=>{
    people.innerHtml += `
    <div class ="grid-container">
    <div class="card" style="width:18rem;">
    <div class="card-details">
    <p class="text-title"><img src="${data.image}"></p>
    <p class="text-body">${data.name}</p></div>
    <button class="card-button">${data.desc}</button></div></div>`
});
