// fav button event
let favIcon = Array.from(document.getElementsByClassName("fav-icon"));
for (let fav of favIcon) {
  fav.addEventListener("click", function (event) {
    if (fav.style.color == "black") {
      fav.style.color = "red";
    } else {
      fav.style.color = "black";
    }
  });
}
// del button event
let delIcon = Array.from(document.getElementsByClassName("del-icon"));
for (let del of delIcon) {
  del.addEventListener("click", function () {
    del.parentNode.remove();
    Total();
  });
}
// quantity event
let Plus = Array.from(document.getElementsByClassName("addition"));
for (let add of Plus) {
  add.addEventListener("click", function () {
    add.nextElementSibling.innerHTML++;
    Total();
  });
}

let Minus = Array.from(document.getElementsByClassName("soustraction"));
for (let i = 0; i < Minus.length; i++) {
  Minus[i].addEventListener("click", function () {
    if (Minus[i].previousElementSibling.innerHTML > 0) {
      Minus[i].previousElementSibling.innerHTML--;
      Total();
    }
  });
}
//  Total price
function Total() {
  let p = Array.from(document.getElementsByClassName("price"));
  let q = Array.from(document.getElementsByClassName("qty"));
  let s = 0;
  for (let i = 0; i < p.length; i++) {
    s += p[i].innerHTML * q[i].innerHTML;
  }
  document.getElementById("intro").innerHTML = "Your total is " +s + "$";
}
