let Message = document.getElementById("message");
let msg = document.querySelector("#marked");
let unsee = document.querySelector(".unsee");
let allblue = document.querySelectorAll(".bgblue");
let amount = document.querySelector(".noti");

function RemoveShown() {
  for (i = 0; i < allblue.length; i++) {
    allblue[i].classList.toggle("bgremove");
    let res = allblue[i].classList.contains("bgremove");
    if (res) {
      msg.textContent = `Unread Messages`;
      amount.textContent = "0";
    } else {
      msg.textContent = `Mark all as read`;
      amount.textContent = "3";
    }
  }
}
function OpenMessage() {
  Message.classList.toggle("show");
  let result = Message.classList.contains("show");
  if (result) {
    unsee.textContent = `Click to unsee`;
  } else {
    unsee.textContent = `Click to see`;
  }
}
