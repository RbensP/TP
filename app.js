// const li = document.createElement('li')
// li.className = 'collection-item'
// li.appendChild(document.createTextNode('Hello world'));
//const ul = document.querySelector('ul.collection')
// ul.appendChild(li)
// const newli = document.createElement('li')
// newli.className = 'collection-item'
// newli.appendChild(document.createTextNode('Hi'))
// ul.insertBefore(newli, li)
// console.log(ul)

let btn = document.querySelector(".btn");
btn.addEventListener("click",function(e){
    e.preventDefault();
    let task = document.querySelector("#task").value;
    if(task !== "")
    {
        let i = document.createElement("i");
        i.className = "fa fa-times";

        let a = document.createElement("a");
        a.href = "#";
        a.className = "delete-item secondary-content";
        a.appendChild(i);
        a.addEventListener("click", function(e){
            e.preventDefault();
            a.parentElement.remove();
        });

        let li = document.createElement("li");
        li.className = "collection-item";
        li.appendChild(document.createTextNode(task));
        li.appendChild(a);

        let ul = document.querySelector("ul.collection");
        ul.appendChild(li);
    }
});

let btn1 = document.querySelector(".clear-tasks");
btn1.addEventListener("click", function(e){
    e.preventDefault();
    let ul = document.querySelector("ul.collection");
    let li = document.querySelectorAll(".collection-item");
    list = Array.from(li);
    list.forEach(element => {
        element.remove();
    });
})

let del = document.querySelectorAll(".delete-item");
let dlt = Array.from(del);
dlt.forEach(element  =>{
    element.addEventListener("click", function(e){
        e.preventDefault();
        element.parentElement.remove();
    });
});
