document.body.onload = createElements;

function createElements() {

    const url = `https://api.openweathermap.org/data/2.5/weather?zip=40508,us&appid=369d23ad5471bf036f577bbec69ebdd3`;
    // const tempElement = document.getElementById("Temperature");
    // const cityElement = document.getElementById("City");
    // const condElement = document.getElementById("Conditions");
    

    axios.get(url)

        .then(function (response) {
            const root = document.getElementById('root');
            const cityElement = document.createTextNode(`City: ${response.data.name}`);

            root.appendChild(cityElement);

            const currentDiv = document.getElementById("root");
                document.body.insertBefore(root, currentDiv);

            const tempElement = document.createTextNode(`Temperature: ${response.data.main.temp}°Kelvin`);
            // tempElement.style.color = "black";

            root.appendChild(tempElement);

            const condElement = document.createTextNode(`Conditions: ${response.data.weather[0].description}`);

            root.appendChild(condElement);


            const weatherIcon = response.data.weather[0].icon;
            const pageIcon = document.createElement('img');


            let iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            pageIcon.src = iconUrl;
            root.appendChild(pageIcon);

        })

            // const weatherIcon = document.createElement(`Img: ${response.data.weather[0].icon}`);

            //  let iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

            // weatherIcon.src = iconUrl;

        //     root.appendChild(pageIcon);  

        // })

        .catch(function (error) {
            // tempElement.innerText = error;
            // tempElement.style.color = "red";
            console.log(error);
        })

        .then(function () {
            console.log("all done");
        });
    }
    

// window.onload = function() {
//     document.getElementById("sendButton").onclick = function() {
//         //get zip from text field
//         const zip = document.getElementById("zipCodeInput").value;
//         //call 
//         createElements();
//     }
// }