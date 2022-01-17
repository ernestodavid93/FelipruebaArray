let carreritas = ['Lucia', 'Roberto', 'Maria','Jesus','Andrea','Jose'];
console.log(carreritas);

carreritas.splice(4,1); //Elimina a Andrea
carreritas.splice(2,0, 'Andrea'); //Agrega a Andrea A la posicion 2 eliminando 1 elemento osea Maria
console.log(carreritas);

carreritas.unshift('Federico');
carreritas.pop();
carreritas.splice(2,0,'Cristobal', 'Fernando', 'Armando');
console.log(carreritas);

