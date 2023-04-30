const element=document.getElementById("btn")
element.addEventListener("click", add);

document.addEventListener('DOMContentLoaded', function(){
  

    axios
      .get('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Res', {
        timeout: 5000
      })
      .then(res => {for(var i=0;i<res.data.length;i++){
        showOutput(res.data[i])

      }})
      .catch(err => console.error(err));
  }   
);

function showOutput(res){
    if(res.category=="table1"){
        let  del=document.createElement("button")
        let dtxt=document.createTextNode("delete")
        del.appendChild(dtxt)
        del.addEventListener("click",function(){  
    
            axios
        .delete('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Res/'+res._id)
        .then(res=>console.log(res))
        .catch(err => console.error(err))
        
        
        
        
        
        this.parentNode.style.display='none';
        })


        let str=res.expense+"-" +res.descrip;
        let e=document.getElementById("t1");
        
        let  p=document.createElement("p")
        
        let txt=document.createTextNode(str);
        p.appendChild(txt)
        p.appendChild(del)
        e.appendChild(p)











    }


    if(res.category=="table2"){
        let  del=document.createElement("button")
        let dtxt=document.createTextNode("delete")
        del.appendChild(dtxt)
        del.addEventListener("click",function(){  
    
            axios
        .delete('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Res/'+res._id)
        .then(res=>console.log(res))
        .catch(err => console.error(err))
        
        
        
        
        
        this.parentNode.style.display='none';
        })


        let str=res.expense+res.descrip;
        let e=document.getElementById("t2");
        
        let  p=document.createElement("p")
        
        let txt=document.createTextNode(str);
        p.appendChild(txt)
        p.appendChild(del)
        e.appendChild(p)











    }

    if(res.category=="table3"){
        let  del=document.createElement("button")
        let dtxt=document.createTextNode("delete")
        del.appendChild(dtxt)
        del.addEventListener("click",function(){  
    
            axios
        .delete('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Res/'+res._id)
        .then(res=>console.log(res))
        .catch(err => console.error(err))
        
        
        
        
        
        this.parentNode.style.display='none';
        })


        let str=res.expense+res.descrip;
        let e=document.getElementById("t3");
        
        let  p=document.createElement("p")
        
        let txt=document.createTextNode(str);
        p.appendChild(txt)
        p.appendChild(del)
        e.appendChild(p)











    }





}
























function add(){


    let id;
let a=document.getElementById("price").value;

let b=document.getElementById("dish").value;

let c=document.getElementById("table").value;

if(c=="1"){
    let  del=document.createElement("button")
    let dtxt=document.createTextNode("delete")
    del.appendChild(dtxt)
del.addEventListener("click",function(){  
    
    axios
.delete('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Res/'+id)
.then(res=>console.log(id))
.catch(err => console.error(err))





this.parentNode.style.display='none';
})

axios
          .post('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Res', {
            expense:a,
            descrip:b,
            category:"table1"
          })
          .then((res) => {id=res.data._id})
          .catch(err => console.error(err));
    let str=a+"-"+b
let e=document.getElementById("t1");

let  p=document.createElement("p")

let txt=document.createTextNode(str);
p.appendChild(txt)
p.appendChild(del)
e.appendChild(p)
}

if(c=="2")
{
    let  del=document.createElement("button")
    let dtxt=document.createTextNode("delete")
    del.appendChild(dtxt)
del.addEventListener("click",function(){  
    
    axios
.delete('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Res/'+id)
.then(res=>console.log(id))
.catch(err => console.error(err))





this.parentNode.style.display='none';
})

axios
          .post('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Res', {
            expense:a,
            descrip:b,
            category:"table2"
          })
          .then((res) => {id=res.data._id})
          .catch(err => console.error(err));
    let str=a+b
let e=document.getElementById("t2");

let  p=document.createElement("p")

let txt=document.createTextNode(str);
p.appendChild(txt)
p.appendChild(del)
e.appendChild(p)
   
}

if(c=="3")
{
    
    let  del=document.createElement("button")
    let dtxt=document.createTextNode("delete")
    del.appendChild(dtxt)
del.addEventListener("click",function(){  
    
    axios
.delete('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Res/'+id)
.then(res=>console.log(id))
.catch(err => console.error(err))





this.parentNode.style.display='none';
})

axios
          .post('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Res', {
            expense:a,
            descrip:b,
            category:"table3"
          })
          .then((res) => {id=res.data._id})
          .catch(err => console.error(err));
    let str=a+b
let e=document.getElementById("t3");

let  p=document.createElement("p")

let txt=document.createTextNode(str);
p.appendChild(txt)
p.appendChild(del)
e.appendChild(p)


}


}