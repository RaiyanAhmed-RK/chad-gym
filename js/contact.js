function switch_entry() {
  let form1 = document.getElementById("form1");
  form1.classList.toggle("be-visible");
  let form2 = document.getElementById("form2");
  form2.classList.toggle("be-visible");
  console.log("clicked");
  // setTimeout(() => {
  //   gohome();
  // }, 5000);
}
function gohome() {
  window.location.href = "/";
}
