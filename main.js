
document.body.onload = createElements;

var button = document.createElement('input');
button.type = 'button';
button.id = 'submit';
button.value = 'Submit';
button.className = 'btn';

    const zip = document.getElementById("zipCodeInput").value;

  
 
    button.onclick = function() {
        const zip = document.getElementById("zipCodeInput").value;
        console.log("zipcode",zip);
        createElements(zip);
    };
 
    var container = document.getElementById('root');
    container.appendChild(button);


function createElements(zip) {

    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=369d23ad5471bf036f577bbec69ebdd3`;
    

    axios.get(url)

        .then(function (response) {

            const root = document.getElementById('root');
            const currentDiv = document.getElementById("root");
            document.body.insertBefore(root, currentDiv);

            const cityElement = document.createTextNode(`City: ${response.data.name}`);
            const tempElement = document.createTextNode(`Temperature: ${response.data.main.temp}°Kelvin`);
            const condElement = document.createTextNode(`Conditions: ${response.data.weather[0].description}`);
            const weatherIcon = response.data.weather[0].icon;
            const pageIcon = document.createElement('img');

            let iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            pageIcon.src = iconUrl;

            root.appendChild(cityElement);
            root.appendChild(tempElement);
            root.appendChild(condElement);
            root.appendChild(pageIcon);

        })

        .catch(function (error) {
            console.log(error);
        })

        .then(function () {
            console.log("all done");
        });
    }
    

