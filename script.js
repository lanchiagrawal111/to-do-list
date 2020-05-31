

var arr=[];
console.log("lanchi");

                          // for adding item //
var addButton=document.getElementById("add");
addButton.addEventListener('click',addItem);
function addItem() {
	var input=document.getElementById('input');
	var value=input.value;
	var ul=document.getElementById("list");
	var textNode=document.createTextNode(value);
	


	if(value===''){
       var p=document.createElement('p');
       var textNode=document.createTextNode("Enter your task");
       p.appendChild(textNode);
       p.setAttribute('class','para');
       document.querySelector('h1').appendChild(p);
	}
	else{
		arr.push(value);
		var li=document.createElement('li');
		var checkbox=document.createElement('input');
		checkbox.type='checkbox';
		checkbox.setAttribute('id','check');
		var label=document.createElement('label');
		var i=document.createElement('i');
		i.setAttribute('id','remove');
		i.setAttribute('class',"fas fa-times-circle");
		li.appendChild(checkbox);
		label.appendChild(textNode);
		li.appendChild(label);
		li.appendChild(i);
		ul.insertBefore(li,ul.childNodes[0]);
		li.className='myCheck';
		input.value='';
		                    // for showing task left
	    var span=document.getElementById('count');
	    span.innerText=arr.length;

	}
}



                  // for removing item //


var removeButton=document.getElementById("remove");

console.log(removeButton);
removeButton.addEventListener('click',removeItem);
function removeItem() {
	window.alert("removed");
	console.log("removed");
	

}


  

