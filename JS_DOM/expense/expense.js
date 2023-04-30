const element=document.getElementById("btn")

element.addEventListener("click", add);


function add(){
let  linode=document.createElement("li")
let  del=document.createElement("button")
del.addEventListener("click",function(){
    this.parentNode.style.display='none';
})
let a=document.getElementById("expenseamount").value

let b=document.getElementById("description").value


let c=document.getElementById("category").value


let dtxt=document.createTextNode("delete")
let etxt=document.createTextNode("edit")
let  edit=document.createElement("button")

edit.addEventListener("click",function(){
    

    document.getElementById("expenseamount").value=a

    document.getElementById("description").value=b
    
    
    document.getElementById("category").value=c


    this.parentNode.style.display='none';

})





del.addEventListener("click",function(){
    this.parentNode.style.display='none';
})





del.appendChild(dtxt)
edit.appendChild(etxt)


 let d=a+"-"+b+"-"+c
console.log(d)
 let litxt=document.createTextNode(d)

linode.appendChild(litxt)

linode.appendChild(del)
linode.appendChild(edit)
document.body.appendChild(linode)








}