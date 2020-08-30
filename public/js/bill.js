let submit = document.querySelector("#btn");
const container = document.getElementById('nodis');

container.style.display="none"
console.log("done!");

submit.addEventListener("click", function (e) {
  let name = document.querySelector("#iname").value;
  let gender = document.querySelector("#gender").value;
  console.log(gender);
  let img = document.querySelector("#img");
  img.src = `https://belikebill.ga/billgen-API.php?default=1&name=${name}&sex=${gender}`;
  container.style.display="block"
  console.log("done!");
});
