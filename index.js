var editId = null;
//var list = new array();
//var pageList = new array();
var currentPage = 1;
var numberPerPage = 5;
var numberOfPages = 1;
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
  {
    address: "delhi",
    age: "20",
    fname: "Rohan",
    id: 4,
    lname: "gupta",
  },
  {
    address: "Chandigarh",
    age: "25",
    fname: "Arun",
    id: 5,
    lname: "Kumar",
  },
  {
    address: "Jalandhar",
    age: "20",
    fname: "Sanjay",
    id: 6,
    lname: "Kumar",
  },
  {
    address: "Ludhiana",
    age: "21",
    fname: "Ajay",
    id: 7,
    lname: "Kumar",
  },
  {
    address: "Moga",
    age: "24",
    fname: "Vijay",
    id: 8,
    lname: "Kumar",
  },
  {
    address: "Jalandhar",
    age: "20",
    fname: "Sanjay",
    id: 9,
    lname: "Kumar",
  },
  {
    address: "Jalandhar",
    age: "20",
    fname: "Sonu",
    id: 10,
    lname: "Kumar",
  },
];

// On Load Function for static data
function loadList() {
  value.forEach((item) => {
    var newElement = document.createElement("li");
    newElement.setAttribute("style", "border:1px solid");
    var divEle = document.createElement("div");
    divEle.setAttribute("id", "0");
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
    let deletebutton = document.createElement("button");
    deletebutton.innerText = "Delete";
    deletebutton.addEventListener("click", function () {
      deleteList(item.id);
    });
    newElement.appendChild(divEle);
    newElement.appendChild(editbutton);
    newElement.appendChild(deletebutton);
    document.getElementById("list").appendChild(newElement);
  });
}

// Add function for Input Data to List Item.
function add() {
  const b = {};
  b["fname"] = document.getElementById("fname").value;
  b["lname"] = document.getElementById("lname").value;
  b["age"] = document.getElementById("age").value;
  b["address"] = document.getElementById("address").value;
  if (editId) {
    let index = value.findIndex((el) => el.id == editId);
    console.log(index);
    value[index] = b;
    value[index].id = editId;
    //console.log(document.getElementById("list").childNodes[index].childNodes[0].innerHTML);
    document.getElementById("list").childNodes[index].childNodes[0].innerHTML =
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
    editId = null;
  } else {
    b.id = value.length + 1;
    value.push(b);
    //console.log(value);
    var newElement = document.createElement("li");
    newElement.setAttribute("style", "border:1px solid");
    var divEle = document.createElement("div");
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
    newElement.appendChild(divEle);
    newElement.appendChild(editbutton);
    newElement.appendChild(deletebutton);
    document.getElementById("list").appendChild(newElement);
  }
  document.getElementById("form1").reset();
}

//Delete function
function deleteList(id) {
  let index = value.findIndex((el) => el.id == id);
  value.splice(index, 1);
  var delList = document.getElementById("list");
  delList.removeChild(delList.childNodes[index]);
}
// Edit Function
function editList(id) {
  let index = value.findIndex((el) => el.id == id);
  document.getElementById("fname").value = value[index].fname;
  document.getElementById("lname").value = value[index].lname;
  document.getElementById("age").value = value[index].age;
  document.getElementById("address").value = value[index].address;
  editId = id;
}

// Clear Input fields
function clrfrm() {
  document.getElementById("form1").reset();
}

// Form Validation
function validate() {
  if (document.getElementById("fname").value == "") {
    alert("Enter First Name");
  } else if (document.getElementById("lname").value == "") {
    alert("Enter Last Name");
  } else if (document.getElementById("age").value == "") {
    alert("Enter Age");
  } else if (document.getElementById("address").value == "") {
    alert("Enter Address");
  } else {
    add();
  }
}

// Search Field
function searchInput() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("list");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("div")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().includes(filter)) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// List Item Pagination
function load() {
  makeList();
  numberOfPages = getNumberOfPages();
}
function getNumberOfPages() {
  return Math.ceil(li.length / numberPerPage);
}
function nextPage() {
  currentPage += 1;
  loadList();
}
function previousPage() {
  currentPage -= 1;
  loadList();
}
function firstPage() {
  currentPage = 1;
  loadList();
}
function lastPage() {
  currentPage = numberOfPages;
  loadList();
}
function loadListItem() {
  var begin = (currentPage - 1) * numberPerPage;
  var end = begin + numberPerPage;

  pageList = list.slice(begin, end);
  drawList(); // draws out our data
  check(); // determines the states of the pagination buttons
}
