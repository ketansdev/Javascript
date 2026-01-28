// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Project are coming";
// }

const element = document.getElementById("first");

// element.onclick = function handleClick() {
//   element.textContent = "Project are coming";
// };


// single click

// element.addEventListener("click", () => {
//     element.textContent = "Project are coming";
//     element.style.backgroundColor = "brown";
// })


// double click 

// element.addEventListener("dblclick", () => {
//     element.textContent = "Project are coming";
//     element.style.backgroundColor = "brown";
// })



//  mouse enter
//  element.addEventListener("mouseenter", () => {
//     element.textContent = "Project are coming";
//     element.style.backgroundColor = "brown";
// })


//  mouse leave
//  element.addEventListener("mouseleave", () => {
//     element.textContent = "Project are coming";
//     element.style.backgroundColor = "brown";
// })



// const child1 = document.getElementById("child1");

// child1.addEventListener("click", () =>{
//     child1.textContent = "I am Clicked !";
// })


const parent = document.getElementById("parent");
console.log(parent.children)

function handleClick(e){
    e.target.textContent = "I am Clicked";
}

parent.addEventListener("click", handleClick);
parent.removeEventListener("click", handleClick);


// for(let child of parent.children){
//     child.addEventListener("click", () =>{
//         child.textContent = "I am Clicked";
//     })
// }



// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener("click", (e) =>{
//     console.log(e.target);
//     // console.log("GrandParent is Clicked");
// })

// const parent = document.getElementById("parent");
// parent.addEventListener("click", (e) =>{
//     // console.log("Parent is Clicked");
//     // e.stopPropagation();
// })

// const child = document.getElementById("child");
// child.addEventListener("click", (e) =>{
//     // console.log("Child is Clicked");
//     // e.stopPropagation();
// })

//  true, false --> capture on/off