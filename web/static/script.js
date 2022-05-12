window.addEventListener("load", function () {
  updateClickLabels();
});

function colorClicked(color) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  };

  fetch(`/api/clicks/${color}`, requestOptions).then(() => {
    fetch(`/api/clicks/${color}`)
      .then((response) => response.json())
      .then((count) => {
        document.getElementById(`color-label-${color}`).innerHTML = `${color}: ${count}`;
      });
  });
}

function updateClickLabels() {
  fetch("/api/clicks")
    .then((response) => response.json())
    .then((count) => {
      document.getElementById("color-label-red").innerHTML = `red: ${count.redClicks}`;
      document.getElementById("color-label-green").innerHTML = `green: ${count.greenClicks}`;
      document.getElementById("color-label-blue").innerHTML = `blue: ${count.blueClicks}`;
    });
}
