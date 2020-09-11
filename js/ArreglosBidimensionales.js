const dato = new Funciones();
let filaTienda = 50, columnaTienda = 20;
let matrizRegistro = dato.arregloCero(filaTienda,columnaTienda);
let matrizProducto = dato.arregloCero(filaTienda,columnaTienda);
//..................................  
let registroInfraccion = new Array(0,1,2,3);
registroInfraccion[0]=[];
registroInfraccion[1]=[];
registroInfraccion[2]=[];
registroInfraccion[3]=[];
class arreglosBidimensionales{
    //  1.3.1. Hacer un algoritmo que almacene números en una matriz de 5 * 6. Imprimir la suma de los números almacenados en la matriz.
    Exercise_1() {
        let matriz = dato.arreglo(5,6);
        let suma = 0;
        
        for (const iterador of matriz) {
            for (const iterado of iterador) {
                suma += iterado;
            }
        }
        dato.tabla(matriz);
        setTimeout(()=>{
            alert(suma);
        },100)
    }
    //  1.3.2. Hacer un algoritmo que llene una matriz de 10 * 10 y determine la posición [renglón, columna] del número mayor almacenado en la matriz. Los números son diferentes.
    Exercise_2() {
        let mayor = 0, fila = 10,columna = 10, texto = "";
        let matriz = dato.arreglo(fila,columna);
        for (let i = 0; i < fila; i++) {
            for (let j = 0; j < columna; j++) {
                if (matriz[i][j]>mayor) {
                    mayor = matriz[i][j];
                    texto = `El numero mayor se encuentra en 'matriz[${i+1}][${j+1}]'`
                }
            }
        }
        dato.tabla(matriz);
        setTimeout(()=>{
            alert(texto);
        },100)
    }
    //  1.3.3. Hacer un algoritmo que llene una matriz de 7 * 7. Calcular  la suma de cada renglón y almacenarla en un vector, la suma de cada columna y almacenarla en otro vector.
    Exercise_3() {
        let fila = 7,columna = 7, sumaF = 0, sumaC = 0;
        let matriz = dato.arreglo(fila,columna);
        let sumaFila = dato.arregloSumaFila(matriz);
        let sumaColumna = dato.arregloSumaColumna(fila,columna,matriz);
        dato.tabla(matriz);
        setTimeout( () => {
            alert(`Suma de cada fila: ${sumaFila}`);
            alert(`Suma de cada columna: ${sumaColumna}`);
        },100);
    }
    //  1.3.4. Hacer un algoritmo que llene una matriz de 20 * 20. Sumar las columnas e imprimir que columna tuvo la máxima suma y la suma de esa columna.
    Exercise_4() {
        let fila = 20,columna = 20, suma = 0, bucle = 0, posicion = 0;
        let matriz = dato.arreglo(fila,columna);
        let sumaColumna = dato.arregloSumaColumna(fila,columna,matriz);

        for (const iterator of sumaColumna) {
            if (iterator>suma) {
                suma = iterator;
                posicion = bucle;
            }
            bucle++;
        }
        dato.eliminarDiv();
        dato.show("block");
        dato.tabla(matriz,2);
        setTimeout( () => {
            alert(`La columna que tuvo la maxima suma fue la columna ${posicion} y su suma fue: ${suma}`);
        },100);
        setTimeout( () => {
            dato.show("none",0);
        },100);
    }    
    //  1.3.5. Hacer un algoritmo que llene una matriz de 5 * 5 y que almacene la diagonal principal en un vector. Imprimir el vector resultante.
    Exercise_5() {
        
        let diagonal = new Array();
        let fila = 5,columna = 5;
        let matriz = dato.arreglo(fila,columna);

        for (let i = 0; i < fila; i++) {
            for (let j = 0; j < columna; j++) {
                if (i==j) {
                    diagonal.push(matriz[i][j]);
                }
            }
        }
        dato.tabla(matriz);
        setTimeout( () => {
            alert(diagonal);
        },100);
    }
    //  1.3.6. Hacer un algoritmo que llene una matriz de 10 * 10 y que almacene en la diagonal principal unos y en las demás posiciones ceros.
    Exercise_6() {
        
        let fila = 10,columna = 10;
        let diagonal = dato.arreglo(fila,columna);

        for (let i = 0; i < fila; i++) {
            for (let j = 0; j < columna; j++) {
                if (i==j) {
                    diagonal[i][j]=1;
                }else{
                    diagonal[i][j]=0;
                }
            }
        }
        dato.tabla(diagonal);
        setTimeout( () => {
            alert(diagonal);
        },100);
    }
    //  1.3.7. Hacer un algoritmo que llene una matriz de 6 * 8 y que almacene toda la matriz en un vector. Imprimir el vector resultante.
    Exercise_7() {
        
        let vector = new Array();
        let matriz = dato.arreglo(6,8);
        
        for (const iterador of matriz) {
            for (const iterado of iterador) {
                vector.push(iterado);
            }
        }
        dato.tabla(matriz);
        setTimeout( () => {
            alert(vector);
        },100);
    }
    //  1.3.8. Hacer un algoritmo que llene una matriz de 8 * 8, que almacene la suma de los renglones y la suma de las columnas en un vector. Imprimir el vector resultante.
    Exercise_8() {
        
        let fila = 8, columna = 8, vector = new Array();
        let matriz = dato.arreglo(fila,columna);
        let sumaFila = dato.arregloSumaFila(matriz);
        let sumaColumna = dato.arregloSumaColumna(fila,columna,matriz);
        for (const iterator of sumaFila) {
            vector.push(iterator);
        }
        for (const iterator of sumaColumna) {
            vector.push(iterator);
        }
        dato.tabla(matriz);
        setTimeout( () => {
            alert(vector);
        },100);
    }
    //  1.3.9. Hacer un algoritmo que llene una matriz de 5 * 6 y que imprima cuantos de los números almacenados son ceros, cuántos son positivos y cuantos son negativos.
    Exercise_9() {
        
        let fila = 5, columna = 6;
        let cero = 0, positivo = 0, negativo = 0;
        let matriz = dato.arreglo(fila,columna);

        for (let i = 0; i < fila; i++) {
            for (let j = 0; j < columna; j++) {
                if (matriz[i][j]==0) {
                    cero++;
                }else if (matriz[i][j]>0){
                    positivo++;
                }else if(matriz[i][j]<0){
                    negativo++;
                }
            }
        }
        
        dato.tabla(matriz);
        setTimeout( () => {
            alert(`Numeros Almacenados en la matriz con '0' :  ${cero}\nNumeros Almacenados en la matriz con numeros positivos :  ${positivo}\nNumeros Almacenados en la matriz con numeros negativos :  ${negativo}`);
        },100);
    }
    //  1.3.10. Diseñe un pseudocódigo que escriba el número de la hilera cuya suma sea mayor que las demás hileras. Suponga que todas las hileras suman diferente cantidad.
    Exercise_10() {
        let fila = 5,columna = 5, suma = 0, bucle = 0, posicion = 0;
        let matriz = dato.arreglo(fila,columna);
        let sumaFila = dato.arregloSumaFila(matriz);

        for (const iterator of sumaFila) {
            if (iterator>suma) {
                suma = iterator;
                posicion = bucle;
            }
            bucle++;
        }
        dato.tabla(matriz);
        setTimeout( () => {
            alert(`La hilera que tuvo la maxima suma fue la hilera ${posicion+1} y su suma fue: ${suma}`);
        },100);
    }
    /*  1.3.11. El dueño de una cadena de tiendas de artículos deportivos desea controlar sus ventas por medio de una computadora. Los datos de entrada son :
    a) El número de la tienda (1 a 50)
    b) Un número que indica el deporte del articulo (1 a 20)
    c) El costo del artículo.
    Hacer un pseudocódigo que escriba al final del día lo siguiente
    Las ventas totales en el  día para cada tienda
    Las ventas totales para cada uno de  los deportes.
    Las ventas totales de todas las tiendas.        */
    Exercise_11() {
        
        let ingreso = dato.ingresoTienda("Ingrese:\n1. Administrador.\n2. Usuario.");
        if (ingreso==1) {
            this.administrador();
        }else{
            this.usuario();
        }
    }
    matrizRegistros() {
        
        let tienda = 0, articulo = 0, valor = 0, segundo = 0;
        do {
            tienda = dato.ingresarNumero("Numero De Tienda");
            articulo = dato.ingresarNumero("Numero Del Articulo");
            valor = dato.ingresarNumero("Valor Del Articulo");
            segundo = dato.ingresarNumero("Cuantos Segundos Desea Ver La Matriz");
        } while ((tienda>50||tienda<1)||(articulo>20||articulo<1)||(valor<0)||(segundo<0));
        
        matrizRegistro[tienda-1][articulo-1] = valor;
    }
    mostrarVentas() {
        let venta = 0;
        do {
            venta = dato.confirmacion("\n1. Las ventas totales en el  día para cada tienda\n2. Las ventas totales para cada uno de  los deportes.\n3. Las ventas totales de todas las tiendas.");
        } while (venta!=1&&venta!=2&&venta!=3);

        if (venta==1) {
            let ventas = new Array(), suma = 0;
        

            matrizProducto.forEach((elemento, tienda) => {
                elemento.forEach((cantidad, articulo) => {
                    suma += (cantidad*matrizRegistro[tienda][articulo]);
                });
                ventas.push(suma);
                suma = 0;            
            });
            dato.unidimensional(ventas);
        }else if (venta==2) {
            let suma = 0, sumaColumna = new Array();
            for (let x = 0; x < columnaTienda; x++) {
                for (let i = 0; i < filaTienda; i++) {
                    for (let j = 0; j < columnaTienda; j++) {
                        if (j==x) {
                            suma += matrizProducto[i][x]*matrizRegistro[i][x];
                        }
                    }
                }
                sumaColumna.push(suma);
                suma=0;
            }
            dato.unidimensional(sumaColumna);
        }else {
            let suma = 0;
        
            matrizProducto.forEach((elemento, tienda) => {
                elemento.forEach((cantidad, articulo) => {
                    suma += (cantidad*matrizRegistro[tienda][articulo]);
                });
            });
            dato.interfazCiclo(`La suma total es: ${suma}`);
        }
    }
    administrador() {
        let ingreso = dato.ingresoTienda("Ingrese:\n1. Para Registrar Datos En La Matriz.\n2. Para Mostrar Las Ventas");
        if (ingreso == 1) {
            this.matrizRegistros();
        }else{
            this.mostrarVentas();
        }
    }
    usuario(){
        let tienda = 0, articulo = 0, cantidad = 0, segundo = 0;
        do {
            tienda = dato.ingresarNumero("Numero De Tienda");
            articulo = dato.ingresarNumero("Numero Del Articulo");
            cantidad = dato.ingresarNumero("Cantidad Del Articulo");
            segundo = dato.ingresarNumero("Cuantos Segundos Desea Ver La Matriz");
        } while ((tienda>50||tienda<1)||(articulo>20||articulo<1)||(cantidad<1)||(segundo<0));
        
        matrizProducto[tienda-1][articulo-1] += cantidad;
        
        dato.eliminarDiv();
        dato.show("block",1);
        dato.tabla(matrizProducto,2);
        setTimeout( () => {
            dato.show("none",2);
        },segundo*1000);

    }
    /*  1.3.12. El departamento de policía de la ciudad de Tuxtepec ha acumulado información referente a las infracciones de los límites de velocidad durante un determinado periodo de tiempo. El departamento ha dividido la ciudad en cuatro cuadrantes y desea realizar una estadística de las infracciones a los límites de velocidad en cada uno de ellos. Para cada infracción se ha preparado una tarjeta que contiene la siguiente información:

        - número de registro del vehículo
        - cuadrante en el que se produjo la infracción
        - límite de velocidad en milla por hora

    Diseñe un diagrama para producir 2 informes; el 1o. Que contiene una lista de la multa de velocidad recolectada, donde la multa se calcula como la suma del costo de la corte ($20,000) mas $ 1,250 por cada mph que exceda la velocidad limite. Prepare una tabla con los siguientes resultados:

                                    INFRACCIONES A LOS LIMITES DE VELOCIDAD

    Registro del        	       Velocidad        	            Velocidad       	    Multa
    Vehículo                	  registrada (MPH)              	   límite

    Este informe debe ser seguido de un segundo en el cual se proporcione un análisis de las infracciones por cuadrante. Para cada uno de los 4 cuadrantes mencionados, debe darse el número de infracciones y la multa promedio.               */
    Exercise_12() {
        let limiteVelocidad = 0, cuadrante = 0, limite = 31, registro = "", multa = 20000, mph = 1250, multaVelocidad = multa, matrizRegistro_12 = Array(0,1,2,3), promedio = 0, promedioTotal = 0, segundo = 0;
        
        do {
            limiteVelocidad = dato.ingresarNumero("Ingrese Limite De Velocidad En MPH");
            cuadrante = dato.ingresarNumero("Ingrese Numero De Cuadrante En El Que Se Produjo La Infraccion");
            registro = prompt("Ingrese Numero De Registro Del Vehículo:");
            segundo = dato.ingresarNumero("Ingrese cuantos segundos desea ver el informe");
        } while ((limiteVelocidad<=limite)||(cuadrante<1||cuadrante>4));
        
        for (let i = 0; i < (limiteVelocidad-limite); i++) {
            multaVelocidad += mph;
        }
        for (const key in registroInfraccion) {
            if (key==cuadrante-1) {
                for (const x of matrizRegistro_12) {
                    switch (x) {
                        case 0:
                            matrizRegistro_12[x] = registro;
                            break;
                        case 1:
                            matrizRegistro_12[x] = limiteVelocidad;
                            break;
                        case 2:
                            matrizRegistro_12[x] = limite;
                            break;
                        case 3:
                            matrizRegistro_12[x] = multaVelocidad;
                            break;
                    }
                }
                registroInfraccion[key].push(matrizRegistro_12);
            }
        }
        dato.eliminarDiv();
        dato.show("block",2);
        dato.interfazCiclo(`Registro del vehiculo :  ${registro}<br>Velocidad Limite :  ${limite}<br>Velocidad Registrada (MPH) :  ${limiteVelocidad}<br>Multa :  ${multaVelocidad}<br>`,0,0);
        registroInfraccion.forEach((elemento,iterador)=>{
            elemento.forEach((value,iterar)=>{
                value.forEach((valor,itera)=>{
                    if (itera==3) {
                        promedio += valor;
                    }
                });
            });
            if (registroInfraccion[iterador].length!=0) {
                promedioTotal = promedio / (registroInfraccion[iterador].length);
                promedio = 0;
                dato.interfazCiclo(`Cuadrante :  ${iterador+1} &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; Infracciones :  ${registroInfraccion[iterador].length} &emsp; &emsp; &emsp;&emsp; &emsp; &emsp;  Multa Promedio :  ${promedioTotal}`,0,0);
            }
        });
        setTimeout( () => {
            dato.show("none");
        },segundo*1000);
    }
    /*  1.3.13. Se tiene almacenada la matriz M (50,5) la cual contiene la información sobre las calificaciones de la materia de LENGUAJES ALGORITMICOS. Diseñe un pseudocódigo que imprima:

    Cantidad de alumnos que aprobaron la materia.
    Cantidad de alumnos que tienen derecho a nivelación.
    El (o los) numero (s) de control de lo(s) alumno(s) que haya (n) obtenido la máxima calificación final.
    */

    Exercise_13() {
        let alumno = new Array(), notaPromedio = 0, notaIteracion = 0, aprobado = 0, reprobado = 0, alumnos = 0, nota = "cadena", estudiantes = 50, notas = 5;
        let segundo = dato.ingresarNumero("Ingrese cuantos segundos desea ver el informe");
        for (let j = 0; j < estudiantes; j++) {
            alumno.push(dato.validar(j,nota,notas));
        }
        for (const iterator of alumno) {
            for (let i = 0; i < iterator.length; i++) {
                notaIteracion += iterator[i];
                if (i==iterator.length-1) {
                    notaPromedio = notaIteracion / iterator.length;
                    notaIteracion = 0;
                }
            }
            if (notaPromedio == 5) {
                alumnos++;
            }
            if (notaPromedio>=3) {
                aprobado++;
            }else{
                reprobado++;
            }
        }
        dato.eliminarDiv();
        dato.show("block",1);
        dato.tabla(alumno,0);
        dato.interfazCiclo(`<br>Los alumnos aprobados son: ${aprobado}<br><br>Los alumnos que tienen derecho a nivelacion: ${reprobado}<br><br>Alumnos que tuvieron la maxima calificacion: ${alumnos}`,0,0);
        setTimeout( () => {
            dato.show("none");
        },segundo*1000);
    }
}