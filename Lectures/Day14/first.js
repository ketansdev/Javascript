// const newElement = document.createElement("h2");
// newElement.textContent = "I am Learning JS from Coder Army";
// newElement.id = "second";

// console.dir(newElement);

// // select element
// const element = document.getElementById("first");
// // element.after(newElement);

// element.before(newElement);

// const newElement2 = document.createElement("h3");
// newElement2.textContent = "Happy Republic Day - 2026";
// newElement2.id = "third";

// newElement2.classList.add("india");
// newElement2.classList.add("bharat")

// element.after(newElement2);

// // newElement2.classList.remove("india");

// newElement2.style.color = "red";
// newElement2.style.backgroundColor = "yellow";

// newElement2.setAttribute("name", "Ketan");

// console.dir(newElement2.getAttribute("name"));



// const newList1 = document.createElement("li");
// newList1.textContent = "Milk";

// const newList2 = document.createElement("li");
// newList2.textContent = "Cake";

// const newList3 = document.createElement("li");
// newList3.textContent = "Bread";

// const newList4 = document.createElement("li");
// newList4.textContent = "Paneer";


// const unordereElement = document.getElementById("listing");

// unordereElement.append(newList1);
// unordereElement.append(newList2);
// unordereElement.prepend(newList3);

// newList1.after(newList4);


const arr = ["Milk", "Butter Milk", "Bread", "Paneer", "Tofu"];


const unordereElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();

for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}

unordereElement.append(fragment);


const heading2 = document.getElementById("heading2");
heading2.remove();