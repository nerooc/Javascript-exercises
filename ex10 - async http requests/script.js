// /////////////////////////////////////////////////////////////// XMLHttpRequest
// ///////////////////////////////////////////////////////////////

/*
let responseUI = document.querySelector('.response');

let year = '1999';

var url = `http://ergast.com/api/f1/driverStandings/1/drivers.json`;

var xhr = new XMLHttpRequest();

let obj;

xhr.responseType = "json";

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        //console.log(this.response);
    }
});

xhr.open("GET", "http://ergast.com/api/f1/2020/drivers.json");
xhr.send();
*/

/*
///////////////////////////////////////////////////////////////// CALLBACK ///////////////////////////////////////////////////////////////
let renResults;

elementsArray = [];

fetch("https://ergast.com/api/f1/drivers/alonso/constructors/renault/results.json").then((response) => {
    response
        .json()
        .then((data) => {
            renResults = data.MRData.RaceTable;
            getResults(renResults);
        })
        .catch((error) => {
            return error;
        })
})

function getResults(elements) {
    elements
        .Races
        .forEach(element => {
            elementsArray.push(`<div>
          <h1>Circuit: ${element.Circuit.circuitName} </h1>
          <h3>Date:  ${element.date} </h3>
      </div>
      <br/>
      `);
        });
    responseUI.innerHTML = elementsArray.join(" ");
}
*/

// /////////////////////////////////////////////////////////////// PROMISE
// ///////////////////////////////////////////////////////////////

/*

let renResults;

let elementsArray = [];

function getResults() {
    return fetch("https://ergast.com/api/f1/drivers/alonso/constructors/renault/results.json").then((response) => {
        return response
            .json()
            .then((data) => {
                return data.MRData.RaceTable;
            })
            .catch((error) => {

                return error;
            })
    })
}

function showResults() {
    getResults().then((elements) => {
        elements
            .Races
            .forEach(element => {
              elementsArray.push(`
              <div>
                  <h1>Circuit: ${element.Circuit.circuitName} </h1>
                  <h3>Date:  ${element.date} </h3>
              </div>
              <br/>
      `);
        });
    responseUI.innerHTML = elementsArray.join(" ");
})}

showResults();

*/

// /////////////////////////////////////////////////////////////// ASYNC AWAIT
// ///////////////////////////////////////////////////////////////

let elementsArray = [];

async function getResults() {
    let res = await fetch("https://ergast.com/api/f1/drivers/alonso/constructors/renault/results.json");
    let resJson = await res.json();
    console.log(resJson);

    return resJson.MRData.RaceTable;
}

function showResults() {
    getResults().then((elements) => {
        elements
            .Races
            .forEach(element => {
                elementsArray.push(`
            <div>
                <h1>Circuit: ${element.Circuit.circuitName} </h1>
                <h3>Date:  ${element.date} </h3>
            </div>
            <br/>
    `);
            });
        responseUI.innerHTML = elementsArray.join(" ");
    })
}

showResults();