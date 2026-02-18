// let h1 = document.querySelector("h1");

// h1.textContent = "Hello Ketan"

// Select all li elements and print their text using a loop
// let lis = document.querySelectorAll("li");

// console.log(lis);

// lis.forEach((val) =>{
//     console.log(val.textContent);
// })

// let para = document.querySelector("p");
// para.innerHTML = `<b>Updated</b> by Javascript`;

// let img = document.querySelector("img");

// console.log(img.src);
// console.log(img.getAttribute("src"));

// img.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1697019921949-d5ec698cb6ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
// );


// let a = document.querySelector("a");
// console.log(a.href);
// a.href = "https://www.amazon.in/";




// let div = document.querySelector("div");
// div.setAttribute("title", "temp");



// let button = document.querySelector("button");

// button.removeAttribute("disabled")


// let lists = document.querySelector("ul");

// let list = document.createElement("li");
// list.textContent = "New Task";

// lists.appendChild(list)



// let div = document.querySelector("div");

// let img = document.createElement("img");
// img.src = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2025/Uber/Unrec_GW/Updated/D323819370_3000._CB788515770_.jpg";

// div.prepend(img);


// let lis = document.querySelectorAll("li");

// lis[0].remove();
// console.log(lis);



let lis = document.querySelectorAll("ul li:nth-child(2n)");
console.log(lis)

lis.forEach((val) =>{
    val.classList.add("highlight")
})