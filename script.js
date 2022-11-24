{
  /* <span id="temp" class="fa"></span> */
}

const tempLoad = () => {
  let temp = document.getElementById("temp");
  temp.innerHTML = "&#xf2cb";

  setTimeout(() => {
    temp.innerHTML = "&#xf2ca";
    temp.style.color='#f8b627';
  }, 1000);
//   console.log("1");


setTimeout(() => {
  temp.innerHTML = "&#xf2c9";
//   console.log("2");
}, 2000);

setTimeout(() => {
  temp.innerHTML = "&#xf2c8";
//   console.log("3");
}, 3000);

setTimeout(() => {
    temp.innerHTML = "&#xf2c7";
    temp.style.color='#d63031'
    // console.log("4");
  }, 4000);

};

tempLoad();

setInterval(tempLoad,5000);
