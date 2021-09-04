var value = [
  {
    address: "Ludhiana",
    age: "21",
    fname: "Ajay",
    id: 1,
    lname: "Kumar",
  },
  {
    address: "Moga",
    age: "24",
    fname: "Vijay",
    id: 2,
    lname: "Kumar",
  },
  {
    address: "Jalandhar",
    age: "20",
    fname: "Sanjay",
    id: 3,
    lname: "Kumar",
  },
];
// On Load Function for static data
function loadList(id) {
  value.forEach((item) => {
    var newElement = document.createElement("li");

    var divEle = document.createElement("div");
    divEle.setAttribute("style", "border:1px solid");
    var dataSpan = document.createElement("span");
    divEle.innerHTML =
      "Firstname-" +
      item.fname +
      "<br>" +
      "Lastname-" +
      item.lname +
      "<br>" +
      "Age-" +
      item.age +
      "<br>" +
      "Address-" +
      item.address +
      "<br>";
    let editbutton = document.createElement("button");
    editbutton.innerText = "Edit";
    editbutton.addEventListener("click", function () {
      editList(item.id);
    });
    //editbutton.addEventListener("click", add);
    // editbutton.setAttribute('onClick')
    let deletebutton = document.createElement("button");
    deletebutton.innerText = "Delete";
    deletebutton.addEventListener("click", function () {
      deleteList(item.id);
    });
    divEle.appendChild(editbutton);
    divEle.appendChild(deletebutton);
    dataSpan.appendChild(divEle);
    newElement.appendChild(dataSpan);
    document.getElementById("list").appendChild(newElement);
  });
}
// Add function for Input Data to List Item.
var selectedList = null;

function add(id) {
  const b = {};
  b["fname"] = document.getElementById("fname").value;
  b["lname"] = document.getElementById("lname").value;
  b["age"] = document.getElementById("age").value;
  b["address"] = document.getElementById("address").value;
  b.id = value.length + 1;

  value.push(b);
  console.log(value);

  var newElement = document.createElement("li");
  var divEle = document.createElement("div");
  divEle.setAttribute("style", "border:1px solid");

  divEle.innerHTML =
    "Firstname-" +
    b.fname +
    "<br>" +
    "Lastname-" +
    b.lname +
    "<br>" +
    "Age-" +
    b.age +
    "<br>" +
    "Address-" +
    b.address +
    "<br>";
  //"<br><button onClick=editList()>Edit</button><button onClick=deleteList("+ b.id +")>delete</button>";
  let editbutton = document.createElement("button");
  editbutton.innerText = "Edit";
  editbutton.addEventListener("click", function () {
    editList(b.id);
  });

  let deletebutton = document.createElement("button");
  deletebutton.innerText = "Delete";
  deletebutton.addEventListener("click", function () {
    deleteList(b.id);
  });

  divEle.appendChild(editbutton);
  divEle.appendChild(deletebutton);
  newElement.appendChild(divEle);
  document.getElementById("list").appendChild(newElement);
}
//Delete function
function deleteList(id) {
  let index = value.findIndex((el) => el.id == id);
  value.splice(index, 1);

  var delList = document.getElementById("list");
  delList.removeChild(delList.childNodes[index]);
}
// Edit Function
var selectedListItem = null;
function editList(id) {
  let index = value.findIndex((el) => el.id == id);
  document.getElementById("fname").value = value[index].fname;
  document.getElementById("lname").value = value[index].lname;
  document.getElementById("age").value = value[index].age;
  document.getElementById("address").value = value[index].address;
  //   var editlist = document.getElementById("list");
  //   editlist.replaceChild(editlist.childNodes[index]);
}
// Clear Input fields
function clrfrm() {
  document.getElementById("form1").reset();
}
function validate() {
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var age = document.getElementById("age");
  var address = document.getElementById("address");

  if (fname.value == "" || lname.value == "") {
    alert("Input Field Empty.");
  } else if (age.value == "" || address.value == "") {
    alert("Input Field Empty.");
  } else {
  }
}
