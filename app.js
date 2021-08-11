const add = document.getElementById("add");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
const pagination = document.getElementById("pagination");

add.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    const li = document.querySelectorAll("li");
    if (li.length % 5 == 0) {
      li.forEach((a) => a.classList.add("hide"));
  
    }
    ul.innerHTML += `
        <li style="background:${rand()};">${input.value}</li>
    `;
    paginate();
    input.value = "";
    document.body.style.background = rand();
  } 
  else {
    alert("INPUT REQUIRED !");
  }
});


function rand() {
  let color = "#";
  let symbols = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    color += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  return color;
}


function paginate() {
  pagination.innerHTML = "";
  const li = document.querySelectorAll("li");
  for (let i = 0; i < Math.ceil(li.length / 5); i++) {
    pagination.innerHTML += `
        <button onclick="showPage(${i})" class="page">${i + 1}</button>
        `;     
  }
}

function showPage(a) {
  document.querySelectorAll("li").forEach((a) => a.classList.add("hide"));
  for (let i = a * 5; i < a * 5 + 5; i++) {
    document.querySelectorAll("li")[i].classList.remove("hide");
  }
}
  