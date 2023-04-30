const element=document.getElementById("btn")
element.addEventListener("click", add);
document.addEventListener('DOMContentLoaded', function(){
  

    axios
      .get('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Appointment', {
        timeout: 5000
      })
      .then(res => {for(var i=0;i<res.data.length;i++){
        showOutput(res.data[i])

      }})
      .catch(err => console.error(err));
  }   
);



function showOutput(res) {

let a=res.Name;
let b=res.email;
let c=res.phno;

let d=a+"-"+b+"-"+c;
let  linode=document.createElement("li")
    let  del=document.createElement("button")
    let  edit=document.createElement("button")
    let dtxt=document.createTextNode("delete")
    let etxt=document.createTextNode("edit")     
    del.appendChild(dtxt)
    edit.appendChild(etxt)
    let litxt=document.createTextNode(d)

    edit.addEventListener("click",function(){
    
    
      document.getElementById("Name").value=a
  
      document.getElementById("email").value=b
  
  
      document.getElementById("phno").value=c

      axios
      .delete('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Appointment/'+res._id)
      .then(res=>console.log(id))
      .catch(err => console.error(err))
  
  
  
      this.parentNode.style.display='none';
  
  })
  del.addEventListener("click",function(){
        


    axios
.delete('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Appointment/'+res._id)
.then(res=>console.log(id))
.catch(err => console.error(err))

this.parentNode.style.display='none';


})

linode.appendChild(litxt)    
linode.appendChild(del)
linode.appendChild(edit)
document.body.appendChild(linode)

   
  }





function add(){
let id;
    let  linode=document.createElement("li")
    let  del=document.createElement("button")
    let  edit=document.createElement("button")
    let dtxt=document.createTextNode("delete")
    let etxt=document.createTextNode("edit")     
    del.appendChild(dtxt)
    edit.appendChild(etxt)
   
    let a=document.getElementById("Name").value
    
    let b=document.getElementById("email").value
    
    
    let c=document.getElementById("phno").value


    axios
          .post('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Appointment', {
            Name:a,
            email:b,
            phno:c
          })
          .then((res) => {id=res.data._id;console.log(id)})
          .catch(err => console.error(err));





    let d=a+"-"+b+"-"+c

     let litxt=document.createTextNode(d)

     edit.addEventListener("click",function(){
    
    
        document.getElementById("Name").value=a
    
        document.getElementById("email").value=b
    
    
        document.getElementById("phno").value=c

        axios
        .delete('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Appointment/'+id)
        .then(res=>console.log(id))
        .catch(err => console.error(err))
    
    
    
        this.parentNode.style.display='none';
    
    })

    del.addEventListener("click",function(){
        


        axios
    .delete('https://crudcrud.com/api/c67686484a154f749db6d6b201c1bd10/Appointment/'+id)
    .then(res=>console.log(id))
    .catch(err => console.error(err))

    this.parentNode.style.display='none';


    })
     linode.appendChild(litxt)    
    linode.appendChild(del)
    linode.appendChild(edit)
    document.body.appendChild(linode)
    }