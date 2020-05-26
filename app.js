var Trello = require("trello");
require('dotenv').config();
var trello = new Trello(process.env.APIKEY_TRELLO, process.env.API_TOKEN_TRELLO);

//obtiene todos los tableros de un usuario
// trello.getBoards("ignacio_ainol").then(data =>
//     data.map(panel => {
//         console.log(panel.name, panel.id)
//         // trello.getActionsOnBoard(panel.id).then(dataBoard => {
//         //     console.log(dataBoard.name);
//         // })
//     })
// );


//ver acciones realizadas en un tablero
// trello.getActionsOnBoard('5ecc952a1622681b7a39a5fa').then(data => {
//     data.map(item => console.log(item))
// })

//ver listas de un tablero
// trello.getListsOnBoard('5ecc952a1622681b7a39a5fa').then(data => {
//     console.log(data)
// })