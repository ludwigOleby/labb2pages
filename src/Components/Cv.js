

export default function fetchData() {
  fetch('work.json',{})
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let output = '<h2>cv</h2>'
      data.forEach(function (item) {
        output += `
        <ul>
          <li>cv: ${item.year}</li>
          <li>work: ${item.work}</li>
        </ul>
      `
      })
      document.getElementsByClassName('cv').dangerouslySetInnerHTML = output
    })
}

