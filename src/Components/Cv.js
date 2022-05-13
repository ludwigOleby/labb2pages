
 export default function LoadCv(){
  fetch("./work.json", {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  })
  .then(response => response.json())
  .then(data => {
    let html='';
    data.forEach(post => {
      html += `
        <li>${post.company} ${post.work} ${post.year}</li>
      `;
    });
    document.getElementById('result').innerHTML = html;
  })
  };




