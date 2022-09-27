const url = 'https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}';
const apiKey = '369d23ad5471bf036f577bbec69ebdd3';
const input = document.querySelector('input');

// axios.get(url)
//     .then(function (response) {
//         console.log(response);
//     })

//     .catch(function (error) {
//         console.log(error);
//     })
//     .then(function () {
//     });

//     or

//     axios.get('/user', {
//         params: {
//           ID: 12345
//         }
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//       .then(function () {
//         // always executed
//       });  
    