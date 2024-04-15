//fetch Api:

//create a card:-
fetch("https:restcountries.com/v3.1/all")
.then((res) => res.json())
.then((data) => {
  data.map((ele) => {
    console.log(ele);
    createDataCard(ele);
  });
})
.catch((err) => console.log(err));


function createDataCard(ele){
     document.body.innerHTML +=`
     <div class="container">
     <img id="flag" src=${ele.flags.png} alt="somename" />
     <div class="card-info">
     <h2>${ele.name.common}</h2>
     <p><span>Population:</span>${ele.population}</p>
     <p><span>Region:</span>${ele.region}</p>
     <p><span>Capital:</span>${ele.capital}</p>
        </div>
    </div>
     
     `
}