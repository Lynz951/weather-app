
document.body.onload = createElements;

var root = document.getElementById('root');  

let ul = document.getElementById('characters');

var button = document.createElement('input');
button.type = 'button';
button.id = 'submit';
button.value = 'Submit';
button.className = 'btn';
button.classList = 'toggle("bg-rose")';
 
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

            const weatherIcon = response.data.weather[0].icon;
            const pageIcon = document.createElement('img');

            let iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            pageIcon.src = iconUrl;

            createListItem('li', `City: ${response.data.name}`);
            createListItem('li', `Temperature: ${Math.round(response.data.main.temp)}°Kelvin OR ${Math.round((response.data.main.temp) - 273)}°Celsius OR ${Math.round((((response.data.main.temp)-273.15)*1.8)+32)}°Farenheit`);
            createListItem('li', `Conditions: ${response.data.weather[0].description}`);
            root.appendChild(pageIcon);

            createListItem(tag, text);
        })

        .catch(function (error) {
            console.log(error);
        })

        .then(function () {
            console.log("all done");
        });
    }

function createListItem(tag, text) {
    let list = document.createElement(tag);
    list.textContent = text;
    ul.appendChild(list);
}
