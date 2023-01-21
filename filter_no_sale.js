


/// ________

/*5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/
const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

/* EN CONSOLA */
const handleChange = () => {
 
	const filteredStreamers = streamers3.filter((streamer) =>
	  streamer.name.toLowerCase().includes(input$$.value.toLowerCase())
	);
  
  
	console.log(filteredStreamers);
  };
  
  const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
  
  input$$.addEventListener("input", handleChange);
  
  









