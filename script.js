function toggleAnswer(element) {
  var answer = element.nextElementSibling; // 使用 nextElementSibling 获取下一个兄弟元素

  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}

function redirectToPage1() {
  // 使用 window.location.href 实现页面跳转
  window.location.href = 'order.html';
}

function redirectToPage0(){
  window.location.href = "home.html";
}

function redirectToPage2(){
  window.location.href = "price.html";
}

function  redirectToPage3(){
  window.location.href="team.html";
}

function  redirectToPage4(){
  window.location.href="refund.html";
}

function  redirectToPage5(){
  window.location.href="join-us.html";
}