var value = []
function add(){
   const b = {};
   b["fname"]  = document.getElementById("fname").value;
   b["lname"]= document.getElementById("lname").value;
   b["age"]= document.getElementById("age").value;
   b["address"] = document.getElementById("address").value;
  
   value.push(b);
   console.log(value);
  
   var newElement = document.createElement("li");   // Create a <button> element
   var s = '<div></div>'
   newElement.innerHTML ="Firstname-" + b.fname  + "<br>" + "Lastname-" + b.lname + "<br>" + "Age-" + b.age  + "<br>" + "Address-" + b.address + "<br>";           
   document.getElementById("list").appendChild(newElement);  

   var edit = document.createElement("button");
   var eText = document.createTextNode("Edit");
   edit.className = "edit";
   edit.appendChild(eText);
   list.appendChild(edit);

   var edit = document.createElement("button");
   var eText = document.createTextNode("Delete");
   edit.className = "delete";
   edit.appendChild(eText);
   list.appendChild(edit);
   
   var deleteButton = document.createElement("button");
   var eText = document.createTextNode("Delete");
   var element = document.getElementById(newElement);
   element.parentNode.removeChild(element);
}
function clrfrm(){
   document.getElementById('form1').reset();
}
function validate(){
   var fname = document.getElementById("fname");
   var lname = document.getElementById("lname");
   var age = document.getElementById("age");
   var address = document.getElementById("address");

   if (fname.value =="" || lname.value ==""){
      alert("Input Field Empty.")
   }
   else if (age.value =="" || address.value ==""){
      alert("Input Field Empty.")
   }
   else{
   }
}
       