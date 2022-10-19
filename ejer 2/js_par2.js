let num1,lee,num2,lee2,num3,lee3,res;

num1 = window.prompt("Ingresa la primera calificacion: ");
lee = parseInt(num1);
num2 = window.prompt("Ingresa la segunda calificacion: ");
lee2 = parseInt(num2);
num3 = window.prompt("Ingresa la tercera calificacion: ");
lee3 = parseInt(num3);

res= (num1+num2+num3)/3;

if(res>=5){document.write(`Alumno aprobado`);}
if(res<5){document.write(`Alumno reprobado`);}