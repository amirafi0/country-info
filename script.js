fetch('https://restcountries.com/v3.1/all')
 .then(res => res.json())
 .then((res) => {

    print(res)})


function print(countries){

    let root = document.getElementById('root');

    let htmlCode = ' ';
    
    countries.forEach(country => {
        htmlCode+=  make(country)
    });

    root.innerHTML= htmlCode;


    console.log(countries)
}



function make(country){

    
    const {name, flags, capital, population,region }=country;

   

    let html = `
        <div class="result">
            <img src='${flags.png}  '/>
            <h3>Name: ${name.common} </h3>
            <h4>Capital: ${capital} </h4>
            <h5>Population: ${population}</h5>
            <h6>Region: ${region}</h6>
            
    
        </div>
    
    
    `;


    return html;
}


let form = document.getElementById('form')

form.addEventListener('submit', (e)=>{

    e.preventDefault();

    const text = e.target.searchBox.value;

    const searchvalue = text.toLowerCase();

    

    fetch(`https://restcountries.com/v3.1/name/${searchvalue}`)
        .then(res=> res.json())
        .then(res => print(res))



})






