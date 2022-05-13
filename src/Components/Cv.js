export default function LoadCv(){
fetch("./work.json")
  .then(function (response) {
    return response;
  })
  .then(function (data) {
    return data.json();
  })
  .then(function (Normal) {
    const html = Normal.map(
      (data) => `<div class="card"> 
        <h4> ${data.year}</h4>
        <h2> ${data.work}</</h2>
        <h3> ${data.company}</h3>
    </div>`
    );
    document.getElementById("appData").innerHTML = html;
  })
  .catch(function (err) {
    console.log("Fetch problem show: " + err.message);
  });
}