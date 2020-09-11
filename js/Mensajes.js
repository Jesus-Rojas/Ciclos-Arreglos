let valor = "";
let controlador = "";

function Instancia(a) {
    switch (a) {
        case 'ciclos':
            return controlador = new Ciclos();
        case 'unidimensionales':
            return controlador = new arreglosUnidimensionales();
        case 'bidimensionales':
            return controlador = new arreglosBidimensionales();
    }
}
function mensaje(html) {
    let x = document.querySelector('.mensaje');
    if (x.style.display=="block") {
        cerrar();
    }else{
        eliminar();
        x.style.display="block";
        parrafo = problemas(html);
        let p = document.createElement('p');
        p.innerHTML=parrafo;
        let padre = document.querySelector('.problema');
        padre.appendChild(p);
        
        valor = html;
        
        let a = document.querySelector('#ejecutar');
        a.style.width = "7em";
        a.style.marginLeft = "14em";
        a.style.marginTop = "0.7em";
        a.addEventListener('click',solucion);
    }
}
function eliminar() {
    document.querySelector('.problema').remove();    
    let div = document.createElement('div');
    div.classList = "problema";
    document.querySelector('#ejecutar').before(div);
}
function cerrar() {
    let x = document.querySelector('.mensaje');
    x.style.display="none";
}
function problemas(x) {
    switch (x) {
        case "c1":
            return "Leer un número (n) e imprimir la sumatoria de 1 hasta n.";
        case "c2":
            return "Leer 2 números e Imprimir el producto del primer número con el segundo número por intermedio de sumas.";
        case "c3":
            return "Imprimir la tabla de multiplicar del 5.";
        case "c4":
            return "Leer el multiplicando y el multiplicador y hallar el producto e imprimir la tabla.";
        case "c5":
            return "Leer 2 números donde el primer número es la base y segundo es el exponente: <br> - Imprimir el resultado mediante multiplicaciones.";
        case "c6":
            return "Leer dos números e imprimir el máximo común divisor.";
        case "c7":
            return "Leer dos números e imprimir el mínimo común múltiplo.";
        case "c8":
            return "Leer dos números: <br> - Si el primer número es par imprimir el máximo común divisor.";
        case "c9":
            return "Leer dos números: <br> - Si el segundo número es impar imprimir el mínimo común múltiplo.";
        case "c10":
            return "Imprimir la serie Fibonacci de 1 hasta 100.";
        case "c11":
            return "Imprimir la serie Fibonacci de 1 hasta n.";
        case "c12":
            return "Leer un número e Imprimir si es primo o no.";
        case "c13":
            return "Imprimir los números primos desde 1 hasta 100.";
        case "c14":
            return "Imprimir los números primos desde 1 hasta n.";
        case "c15":
            return "Imprimir cuantos números son primos de 1 hasta 100.";
        case "c16":
            return "Imprimir cuantos números son primos de 1 hasta n.";
        case "c17":
            return "Imprimir cuales números son primos cuales no de 1 hasta 100 y la cantidad.";
        case "c18":
            return "Imprimir cuales números son primos cuales no de 1 hasta n y la cantidad.";
        case "c19":
            return "Imprimir la serie Fibonacci de 1 hasta 100 y cuales son primos.";
        case "c20":
            return "Imprimir la serie Fibonacci de 1 hasta n y cuales son primos.";
        case "c21":
            return "Imprimir la serie Fibonacci de 1 hasta 100 y cuales son primos y cuáles no.";
        case "c22":
            return "Imprimir la serie Fibonacci de 1 hasta n y cuales son primos y cuáles no.";
        case "c23":
            return "Imprimir la serie Fibonacci de 1 hasta n y cuales son primos y cuáles no, cuántos son primos, cuantos no son primos.";
        case "c24":
            return "Leer un número e imprimir el invertido.";
        case "c25":
            return "Imprimir los números pares de 1 hasta 100.";
        case "c26":
            return "Imprimir los números pares de 1 hasta n.";
        case "c27":
            return "Imprimir los números impares de 1 hasta 10.";
        case "c28":
            return "Imprimir los números impares de 1 hasta n.";
        case "c29":
            return "Leer un número n hasta que el usuario decida e imprimir si es primo o no.";
        case "c30":
            return "Imprimir el factorial de 1 hasta 100.";
        case "c31":
            return "Imprimir el factorial de 1 hasta n.";
        case "c32":
            return "Imprimir el factorial de 1 hasta n e imprimir si el número es primo o no.";
        case "c33":
            return "Imprimir el factorial de 1 hasta n e imprimir los números primos de 1 hasta el resultado del factorial.";
        case "u1":
            return "Almacenar en un vector los números de 1 hasta 100.";
        case "u2":
            return "Almacenar en un vector los números de 1 hasta n.";
        case "u3":
            return "Almacenar en un vector los números de 1 hasta n y posteriormente imprimir su contenido.";
        case "u4":
            return "Almacenar en un vector los números de 1 hasta n y posteriormente imprimir los números pares e impares.";
        case "u5":
            return "Almacenar en un vector los números de 1 hasta n y posteriormente imprimir los números primos.";
        case "u6":
            return "Almacenar en un vector los números de 1 hasta n y posteriormente imprimir los números menores a 500.";
        case "u7":
            return "Almacenar en un vector los números de 1 hasta n y posteriormente imprimir los números primos.";
        case "u8":
            return "Almacenar en un vector los números de 1 hasta n y posteriormente imprimir los números primos y la cantidad de números que no son primos.";
        case "u9":
            return "Almacenar en un vector los números de 1 hasta n y posteriormente imprimir la sumatoria de los números primos y no primos.";
        case "u10":
            return "Calcular el promedio de 50 valores almacenados en un vector. Determinar además cuantos son mayores que el promedio, imprimir el promedio, el número de datos mayores que el promedio y una lista de valores mayores que el promedio.";
        case "u11":
            return "Capturar 4 sueldos y desplegarlos aumentados en un 25%.";
        case "u12":
            return "Llenar dos vectores A y B de 45 elementos cada uno, sumar el elemento uno del vector A con el elemento uno del vector B y así sucesivamente hasta 45, almacenar el resultado en un vector C, e imprimir el vector resultante.";
        case "u13":
            return "Las claves de respuesta de 5 preguntas están guardadas en un arreglo : <br><br> res[0]='A' <br> res[1]='C' <br> res[2]='A' <br> res[3]='B' <br> res[4]='A' <br><br> Y las respuestas del usuario deben almacenarcen en otro arreglo, indicar cuantos respuestas fueron contestadas correctamente, incorrectamente e indicar si pasó la prueba donde 3 es la cantidad de preguntas mínimas que debe contestar bien para pasar la prueba.";
        case "u14":
            return "Llenar un vector de 20 elementos, imprimir la posición y el valor del elemento mayor almacenado en el vector. Suponga que todos los elementos del vector son diferentes.";
        case "u15":
            return "Almacenar 500 números en un vector, elevar al cuadrado cada valor almacenado en el vector, almacenar el resultado en otro vector. Imprimir el vector original y el vector resultante.";
        case "u16":
            return "Almacenar 300 números en un vector, imprimir cuantos son ceros, cuantos son negativos, cuantos positivos. Imprimir además la suma de los negativos y la suma de los positivos.";
        case "u17":
            return "Almacenar 150 números en un vector, almacenarlos en otro vector en orden inverso al vector original e imprimir el vector resultante.";
        case "u18":
            return "Se tienen almacenados en la memoria dos vectores M y N de cien elementos cada uno. Hacer un algoritmo que escriba la palabra “Iguales” si ambos vectores son iguales y “Diferentes” si no lo son. Serán iguales cuando en la misma posición de ambos vectores se tenga el mismo valor para todos los elementos.";
        case "u19":
            return "Se tiene el vector A con 100 elementos almacenados. Diseñe un algoritmo que escriba “SI” si el vector esta ordenado ascendentemente o “NO” si el vector no está ordenado.";
        case "u20":
            return "Diseñe un algoritmo que lea un número cualquiera y lo busque en el vector X, el cual tiene almacenados 80 elementos. Escribir la posición donde se encuentra almacenado el número en el vector o el mensaje “NO” si no lo encuentra. Búsqueda secuencial.";
        case "u21":
            return "Diseñe un algoritmo que lea dos vectores A y B de 20 elementos cada uno y multiplique el primer elemento de A con el último elemento de B y luego el segundo elemento de A por el diecinueveavo elemento de B y así sucesivamente hasta llegar al veinteavo elemento de A por el primer elemento de B. El resultado de la multiplicación almacenarlo en un vector C.";
        case "u22":
            return "Diseñe un algoritmo que almacene en un vector llamado FIB[100] los 100 primeros números de la serie Fibonacci.";
        case "b1":
            return "Hacer un algoritmo que almacene números en una matriz de 5 * 6. Imprimir la suma de los números almacenados en la matriz.";
        case "b2":
            return "Hacer un algoritmo que llene una matriz de 10 * 10 y determine la posición [renglón, columna] del número mayor almacenado en la matriz. Los números son diferentes.";
        case "b3":
            return "Hacer un algoritmo que llene una matriz de 7 * 7. Calcular  la suma de cada renglón y almacenarla en un vector, la suma de cada columna y almacenarla en otro vector.";
        case "b4":
            return "Hacer un algoritmo que llene una matriz de 20 * 20. Sumar las columnas e imprimir que columna tuvo la máxima suma y la suma de esa columna.";
        case "b5":
            return "Hacer un algoritmo que llene una matriz de 5 * 5 y que almacene la diagonal principal en un vector. Imprimir el vector resultante.";
        case "b6":
            return "Hacer un algoritmo que llene una matriz de 10 * 10 y que almacene en la diagonal principal unos y en las demás posiciones ceros.";
        case "b7":
            return "Hacer un algoritmo que llene una matriz de 6 * 8 y que almacene toda la matriz en un vector. Imprimir el vector resultante.";
        case "b8":
            return "Hacer un algoritmo que llene una matriz de 8 * 8, que almacene la suma de los renglones y la suma de las columnas en un vector. Imprimir el vector resultante.";
        case "b9":
            return "Hacer un algoritmo que llene una matriz de 5 * 6 y que imprima cuantos de los números almacenados son ceros, cuántos son positivos y cuantos son negativos.";
        case "b10":
            return "Diseñe un pseudocódigo que escriba el número de la hilera cuya suma sea mayor que las demás hileras. Suponga que todas las hileras suman diferente cantidad.";
        case "b11":
            return "El dueño de una cadena de tiendas de artículos deportivos desea controlar sus ventas por medio de una computadora. Los datos de entrada son: <br><br> a) El número de la tienda (1 a 50) <br> b) Un número que indica el deporte del articulo (1 a 20) <br> c) El costo del artículo. <br><br> Hacer un pseudocódigo que escriba al final del día lo siguiente: <br><br> - Las ventas totales en el  día para cada tienda <br> - Las ventas totales para cada uno de  los deportes. <br> - Las ventas totales de todas las tiendas.";
        case "b12":
            return "El departamento de policía de la ciudad de Tuxtepec ha acumulado información referente a las infracciones de los límites de velocidad durante un determinado periodo de tiempo. El departamento ha dividido la ciudad en cuatro cuadrantes y desea realizar una estadística de las infracciones a los límites de velocidad en cada uno de ellos. Para cada infracción se ha preparado una tarjeta que contiene la siguiente información: <br><br> - número de registro del vehículo. <br> - cuadrante en el que se produjo la infracción. <br> - límite de velocidad en milla por hora. <br><br> Diseñe un diagrama para producir 2 informes; el 1o. Que contiene una lista de la multa de velocidad recolectada, donde la multa se calcula como la suma del costo de la corte ($20,000) mas $ 1,250 por cada mph que exceda la velocidad limite. Prepare una tabla con los siguientes resultados: <br><br> <center> INFRACCIONES A LOS LIMITES DE VELOCIDAD <br><br> Registro del Vehículo &emsp; &emsp; &emsp; Velocidad límite &emsp; &emsp; &emsp; Velocidad registrada (MPH) &emsp; &emsp; &emsp; Multa </center> <br> Este informe debe ser seguido de un segundo en el cual se proporcione un análisis de las infracciones por cuadrante. Para cada uno de los 4 cuadrantes mencionados, debe darse el número de infracciones y la multa promedio.";
        case "b13":
            return "Se tiene almacenada la matriz M (50,5) la cual contiene la información sobre las calificaciones de la materia de LENGUAJES ALGORITMICOS. Diseñe un pseudocódigo que imprima: <br><br> - Cantidad de alumnos que aprobaron la materia. <br> - Cantidad de alumnos que tienen derecho a nivelación. <br> - El (o los) numero (s) de control de lo(s) alumno(s) que haya (n) obtenido la máxima calificación final.";
    }
}
function solucion() {
    switch (valor) {
        case "c1":
            return controlador.Exercise_1();
        case "c2":
            return controlador.Exercise_2();
        case "c3":
            return controlador.Exercise_3();
        case "c4":
            return controlador.Exercise_4();
        case "c5":
            return controlador.Exercise_5();
        case "c6":
            return controlador.Exercise_6();
        case "c7":
            return controlador.Exercise_7();
        case "c8":
            return controlador.Exercise_8();
        case "c9":
            return controlador.Exercise_9();
        case "c10":
            return controlador.Exercise_10();
        case "c11":
            return controlador.Exercise_11();
        case "c12":
            return controlador.Exercise_12();
        case "c13":
            return controlador.Exercise_13();
        case "c14":
            return controlador.Exercise_14();
        case "c15":
            return controlador.Exercise_15();
        case "c16":
            return controlador.Exercise_16();
        case "c17":
            return controlador.Exercise_17();
        case "c18":
            return controlador.Exercise_18();
        case "c19":
            return controlador.Exercise_19();
        case "c20":
            return controlador.Exercise_20();
        case "c21":
            return controlador.Exercise_21();
        case "c22":
            return controlador.Exercise_22();
        case "c23":
            return controlador.Exercise_23();
        case "c24":
            return controlador.Exercise_24();
        case "c25":
            return controlador.Exercise_25();
        case "c26":
            return controlador.Exercise_26();
        case "c27":
            return controlador.Exercise_27();
        case "c28":
            return controlador.Exercise_28();
        case "c29":
            return controlador.Exercise_29();
        case "c30":
            return controlador.Exercise_30();
        case "c31":
            return controlador.Exercise_31();
        case "c32":
            return controlador.Exercise_32();
        case "c33":
            return controlador.Exercise_33();
        case "b1":
            return controlador.Exercise_1();
        case "b2":
            return controlador.Exercise_2();
        case "b3":
            return controlador.Exercise_3();
        case "b4":
            return controlador.Exercise_4();
        case "b5":
            return controlador.Exercise_5();
        case "b6":
            return controlador.Exercise_6();
        case "b7":
            return controlador.Exercise_7();
        case "b8":
            return controlador.Exercise_8();
        case "b9":
            return controlador.Exercise_9();
        case "b10":
            return controlador.Exercise_10();
        case "b11":
            return controlador.Exercise_11();
        case "b12":
            return controlador.Exercise_12();
        case "b13":
            return controlador.Exercise_13();
        case "u1":
            return controlador.Exercise_1();
        case "u2":
            return controlador.Exercise_2();
        case "u3":
            return controlador.Exercise_3();
        case "u4":
            return controlador.Exercise_4();
        case "u5":
            return controlador.Exercise_5();
        case "u6":
            return controlador.Exercise_6();
        case "u7":
            return controlador.Exercise_7();
        case "u8":
            return controlador.Exercise_8();
        case "u9":
            return controlador.Exercise_9();
        case "u10":
            return controlador.Exercise_10();
        case "u11":
            return controlador.Exercise_11();
        case "u12":
            return controlador.Exercise_12();
        case "u13":
            return controlador.Exercise_13();
        case "u14":
            return controlador.Exercise_14();
        case "u15":
            return controlador.Exercise_15();
        case "u16":
            return controlador.Exercise_16();
        case "u17":
            return controlador.Exercise_17();
        case "u18":
            return controlador.Exercise_18();
        case "u19":
            return controlador.Exercise_19();
        case "u20":
            return controlador.Exercise_20();
        case "u21":
            return controlador.Exercise_21();
        case "u22":
            return controlador.Exercise_22();
    }
}