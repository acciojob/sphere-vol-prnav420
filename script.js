function volume_sphere() {
  //Write your code here

  let radiuss = document.getElementById("radius").value;
  let volumes = document.getElementById("volume");

  if (radiuss.length > 0) {
    volumes.value = (4 / 3) * 3.14285714286 * Math.pow(radiuss,3);
  }
}

window.onload = function () {
  document.getElementById("MyForm").onsubmit = function (event) {
    event.preventDefault(); // Prevent form submission
    volume_sphere();
  };
};


