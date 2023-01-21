

/*5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/
//En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const myListaContainer = document.getElementById("div");
console.log(myListaContainer);

const  showJugador = (jugadores) => {
	myListaContainer.innerHTML =" ";
for ( const jugador of jugadores ){
         
const myLi =  document.createElement('li')    
myLi.innerText = jugador.name
myListaContainer.appendChild(myLi)
   }
}
const drawJugador = (jugadores) => {   
    const input$$ = document.querySelector("input");  
    input$$.addEventListener("input", ()=> 
      searchJugadores(input$$.value, jugadores)  
    );
  };
searchJugadores = (filtro, jugadores) => { 
    let filteredJUgadores  = jugadores.filter((jugador) => 
    jugador.name.toLowerCase().includes(filtro.toLowerCase())  
    ); 
    showJugador(filteredJUgadores);
  };
 // showJugador()
  drawJugador(streamers3)
  //searchJugadores()


  
  document.getElementById("btn").addEventListener("click", handleClick);