const element=document.getElementById("btn")
element.addEventListener("click", add);

document.addEventListener('DOMContentLoaded', async function(){
  

    let res=await axios.get('https://crudcrud.com/api/64b1542b9bb84835b349f83be21635d1/Res')
     
        for(var i=0;i<res.data.length;i++){
        showOutput(res.data[i])

      }
     
  }   
);

function showOutput(res){
    if(res.category=="table1"){
        let  del=document.createElement("button")
        let dtxt=document.createTextNode("delete")
        del.appendChild(dtxt)
        del.addEventListener("click",async function(){  
    
       let res1= await     axios.delete('https://crudcrud.com/api/64b1542b9bb84835b349f83be21635d1/Res/'+res._id)
        
        console.log(res1)
        
        
        
        
        
        this.parentNode.style.display='none';
        })


        let str=res.expense+"-" +res.descrip;
        let e=document.getElementById("t1");
        
        let  li=document.createElement("li")
        
        let txt=document.createTextNode(str);
        li.appendChild(txt)
        li.appendChild(del)
        e.appendChild(li)











    }


    if(res.category=="table2"){
        let  del=document.createElement("button")
        let dtxt=document.createTextNode("delete")
        del.appendChild(dtxt)
        del.addEventListener("click",async function(){  
    
            let res1= await axios.delete('https://crudcrud.com/api/64b1542b9bb84835b349f83be21635d1/Res/'+res._id)
        console.log(res1)
       
        
        
        
        
        
        this.parentNode.style.display='none';
        })


        let str=res.expense+"-" +res.descrip;
        let e=document.getElementById("t2");
        
        let  li=document.createElement("li")
        
        let txt=document.createTextNode(str);
        li.appendChild(txt)
        li.appendChild(del)
        e.appendChild(li)











    }

    if(res.category=="table3"){
        let  del=document.createElement("button")
        let dtxt=document.createTextNode("delete")
        del.appendChild(dtxt)
        del.addEventListener("click",async function(){  
    
            let res1= await axios.delete('https://crudcrud.com/api/64b1542b9bb84835b349f83be21635d1/Res/'+res._id)
        console.log(res1)
        
        
        
        
        
        this.parentNode.style.display='none';
        })


        let str=res.expense+"-" +res.descrip;
        let e=document.getElementById("t3");
        
        let  li=document.createElement("li")
        
        let txt=document.createTextNode(str);
        li.appendChild(txt)
        li.appendChild(del)
        e.appendChild(li)












    }





}
























async function add(){


    let id;
let a=document.getElementById("price").value;

let b=document.getElementById("dish").value;

let c=document.getElementById("table").value;

if(c=="1"){
    let  del=document.createElement("button")
    let dtxt=document.createTextNode("delete")
    del.appendChild(dtxt)
del.addEventListener("click",async function(){  
    
    let res=await axios
.delete('https://crudcrud.com/api/64b1542b9bb84835b349f83be21635d1/Res/'+id)






this.parentNode.style.display='none';
})

let res=await axios
          .post('https://crudcrud.com/api/64b1542b9bb84835b349f83be21635d1/Res', {
            expense:a,
            descrip:b,
            category:"table1"
          })
         id=res.data._id
         
    let str=a+"-"+b
let e=document.getElementById("t1");

let  li=document.createElement("li")

let txt=document.createTextNode(str);
li.appendChild(txt)
li.appendChild(del)
e.appendChild(li)
}

if(c=="2")
{
    let  del=document.createElement("button")
    let dtxt=document.createTextNode("delete")
    del.appendChild(dtxt)
del.addEventListener("click",async function(){  
    
    let res=await axios
.delete('https://crudcrud.com/api/64b1542b9bb84835b349f83be21635d1/Res/'+id)





this.parentNode.style.display='none';
})

let res=await axios
          .post('https://crudcrud.com/api/64b1542b9bb84835b349f83be21635d1/Res', {
            expense:a,
            descrip:b,
            category:"table2"
          })
         id=res.data._id
    let str=a+"-"+b
let e=document.getElementById("t2");

let  li=document.createElement("li")

let txt=document.createTextNode(str);
li.appendChild(txt)
li.appendChild(del)
e.appendChild(li)
   
}

if(c=="3")
{
    
    let  del=document.createElement("button")
    let dtxt=document.createTextNode("delete")
    del.appendChild(dtxt)
del.addEventListener("click",async function(){  
    
    let res=await axios
    .delete('https://crudcrud.com/api/64b1542b9bb84835b349f83be21635d1/Res/'+id)





this.parentNode.style.display='none';
})

let res=await axios
          .post('https://crudcrud.com/api/64b1542b9bb84835b349f83be21635d1/Res', {
            expense:a,
            descrip:b,
            category:"table3"
          })
          id=res.data._id
    let str=a+"-"+b
let e=document.getElementById("t3");

let  li=document.createElement("li")

let txt=document.createTextNode(str);
li.appendChild(txt)
li.appendChild(del)
e.appendChild(li)
}


}