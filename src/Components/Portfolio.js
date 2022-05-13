import {useState, useEffect} from "react";

export default function Portfolio()
{
    const [name, setName] = useState([]); //config
    useEffect(()=>{
        fetch('https://api.github.com/users/ludwigOleby/repos') //Fetch för att hämta info från git api
        .then(res => res.json()) //tar hand om det fetchade materiaet
        .then(data => {
            setName((prevname) =>[
                ...prevname,
                {
                    name: data[13].name,
                    description: data[13].description,
                    html_url: data[13].html_url
                },
                {
                    name: data[2].name,
                    description: data[2].description,
                    html_url: data[2].html_url
                },
                {
                    name: data[0].name,
                    description: data[0].description,
                    html_url: data[0].html_url
                },
            ]);
        });
    },[]); // Array = kör bara en gång


    return(
      <>
      <main>
      <h2>Mina Github-repos</h2>
        {name.map((names) =>(
            <>
            <h3>
                {names.name}
            </h3>
            <p>{names.description}</p>
            <p><a href={names.html_url}>{names.html_url}</a></p>
            </>
        ))}
      </main>
      </>
    )};