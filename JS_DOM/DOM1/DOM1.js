var itemList = document.getElementById('items');

var filter = document.getElementById('filter')
filter.addEventListener('keyup', filterItems);
var itemList = document.getElementById('items');
var itemdel=document.querySelectorAll('.btn')
var form = document.getElementById('addForm');

form.addEventListener('submit', addItem);


function addItem(e){
  e.preventDefault();

  
  var newItem = document.getElementById('item').value;

  
  var li = document.createElement('li');
  
  li.className = 'list-group-item';
 
  li.appendChild(document.createTextNode(newItem));

  
  var deleteBtn = document.createElement('button');

  
  deleteBtn.className = 'btn1 btn-danger btn-sm float-right delete';

  
  deleteBtn.appendChild(document.createTextNode('X'));
  deleteBtn.addEventListener("click",function(){

    this.parentElement.remove();
    
    })

 
  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}









for(let i=0;i<itemdel.length;i++){
itemdel[i].addEventListener("click",function(){

this.parentElement.remove();

})
}






function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = document.getElementsByTagName('li');
    console.log('items')
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }