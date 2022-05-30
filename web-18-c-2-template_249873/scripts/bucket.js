// On clicking remove button the item should be removed from DOM as well as localstorage.

var items=JSON.parse(localStorage.getItem("coffee"))

function getTotal(){
     let total=document.querySelector("#total_amount")

     var x=0;
     let price=items.reduce(function(sum,el,i){
         return sum=el.price
     },0)
     total.innerHTML=price
}
getTotal()

items.map(function(el,i){
    restore()
    function restore(){
        let anu =document.querySelector("#bucket")

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
        btn.setAttribute("id","remove_coffee")
        btn.textContent="remove";
        btn.addEventListener("click",function(){
            rmv(el,i)
        })

        function rmv(el,i){
            items.splice(i,1)
            localStorage.setItem("coffee",JSON.stringify(items))
            window.location.reload()
        }
        box.append(name,img,price,btn)
        document.querySelector("#bucket").append(box)

    }
})