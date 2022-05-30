// Add the coffee to local storage with key "coffee"
// https://masai-mock-api.herokuapp.com/coffee/menu

// let url=`https://masai-mock-api.herokuapp.com/coffee/menu`

async function getItem(){
    let url=`https://masai-mock-api.herokuapp.com/coffee/menu`

    let res=await fetch(url)

    let data=await res.json()

    append(data.menu.data)
    console.log(data)
}
getItem()

// let url =`https://masai-mock-api.herokuapp.com/coffee/menu`
// fetch(url)
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (res) {
//     console.log(res.data);
//     itemsdata(res.data);
//   })


function append(data) {
  data.map(function (el, i) {
    
   
    let box=document.createElement("div")
    box.setAttribute("id","box")

    let name=document.createElement("h2")
    name.textContent=el.title;
    name.setAttribute("class","name");

    let img=document.createElement("img")
    img.src=el.image;
    img.setAttribute("class","image");

    let price=document.createElement("p")
    price.textContent=el.price;
    price.setAttribute("class","price");

    let btn=document.createElement("button")
    btn.setAttribute("id","add_to_bucket")
    btn.textContent="add to bucket";
    btn.addEventListener("click",function(){
        add(el,i)
        
    })


    box.append(name,img,price,btn);
        document.querySelector("#menu").append(box);
    })

    function add(el,i){
      var data=JSON.parse(localStorage.getItem("coffee"))||[]

    }
    data.push(el);
    localStorage.setItem("coffee",JSON.stringify(data));

    let count=document.querySelector("#coffee_count>p")
    count.innerHTML=JSON.parse(localStorage.getItem("coffee")).length

  }