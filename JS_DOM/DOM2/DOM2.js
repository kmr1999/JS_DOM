
function f(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.email.value;
    const phonenumber=event.target.phonenumber.value;
    const obj={
        name:name,
        email:email,
        phonenumber:phonenumber
    
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
    
    var newp=document.createElement('p');
    var but=document.createElement('button');
    
    
    but.textContent='delete';
    but.addEventListener("click",(event)=>{event.target.parentElement.remove();localStorage.removeItem(obj.email)});
    newp.textContent=JSON.stringify(obj);
    newp.appendChild(but);
    var ed=document.createElement('button');
    ed.textContent='edit';
    let A=document.getElementById('A')
    let B=document.getElementById('B')
    let C=document.getElementById('C')
    
    
    
    
    console.log("hdhj")
    ed.addEventListener("click",(event)=>{A.value=obj.name;B.value=obj.email;C.value=obj.phonenumber;event.target.parentElement.remove();});
    newp.appendChild(ed);
    
    
    
    let b=document.body;
    b.appendChild(newp);
    
    
    
     
    
    
    }