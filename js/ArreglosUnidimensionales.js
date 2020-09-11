const dato = new Funciones();
class arreglosUnidimensionales{
    //  1.2.1.	Almacenar en un vector los números de 1 hasta 100.
    Exercise_1() {
        let vector = new Array();
        for (let i = 0;i < 100;i++) {
            vector.push(i+1);
        }
        dato.unidimensional(vector);
    }
    //  1.2.2.	Almacenar en un vector los números de 1 hasta n.
    Exercise_2() {
        let vector = new Array();
        let numero = dato.ingresarNumero("numero");
        for (let i = 0;i < numero;i++) {
            vector.push(i+1);
        }
        dato.unidimensional(vector);
    }
    //  1.2.3.	Almacenar en un vector los números de 1 hasta n y posteriormente imprimir su contenido.
    Exercise_3() {
        let vector = new Array();
        let numero = dato.ingresarNumero("numero");
        for (let i = 0;i < numero;i++) {
            vector.push(i+1);
        }
        dato.unidimensional(vector);
    }
    //  1.2.4.	Almacenar en un vector los números de 1 hasta n y posteriormente imprimir los números pares e impares.
    Exercise_4() {
        let vector = new Array(), par = "", impar = "";
        let numero = dato.ingresarNumero("numero");
        for (let i = 1;i <= numero;i++) {
            vector.push(i);
            if (i%2==0) {
                par += `${i}, `;
            }else{
                impar += `${i}, `;
            }
        }
        dato.interfazCiclo(`Numeros Pares : <br><br> ${par.substring(0,par.length-2)} <br><br> Numeros Impares : <br><br> ${impar.substring(0,impar.length-2)}<br>`);
        dato.unidimensional(vector);
    }
    //  1.2.5.	Almacenar en un vector los números de 1 hasta n y posteriormente imprimir los números primos.
    Exercise_5() {
        let vector = new Array(), primo = new Array();
        let numero = dato.ingresarNumero("numero");
        for (let i = 1;i <= numero;i++) {
            vector.push(i);
            if (dato.primo(i)) {
                primo.push(i);
            }
        }
        dato.unidimensional(primo);
        
    }
    //  1.2.6.	Almacenar en un vector los números de 1 hasta n y posteriormente imprimir los números menores a 500.
    Exercise_6() {
        let vector = new Array(), menor = new Array();
        let numero = dato.ingresarNumero("numero");
        for (let i = 1;i <= numero;i++) {
            vector.push(i);
        }
        for (let i = 0; i < vector.length; i++) {
            if (vector[i]<500) {
                menor.push(vector[i])
            }
        }
        dato.unidimensional(menor);
    }
    //  1.2.7.	Almacenar en un vector los números de 1 hasta n y posteriormente imprimir los números primos.
    Exercise_7() {
        let vector = new Array(), primo = new Array();
        let numero = dato.ingresarNumero("numero");
        for (let i = 1;i <= numero;i++) {
            vector.push(i);
            if (dato.primo(i)) {
                primo.push(i);
            }
        }
        dato.unidimensional(primo);
    }
    //  1.2.8.	Almacenar en un vector los números de 1 hasta n y posteriormente imprimir los números primos y la cantidad de números que no son primos.
    Exercise_8() {
        let vector = new Array(), primo = new Array(), contador = 0;
        let numero = dato.ingresarNumero("numero");
        for (let i = 1;i <= numero;i++) {
            vector.push(i);
            if (dato.primo(i)) {
                primo.push(i);
            }else{
                contador++;
            }
        }
        dato.unidimensional(primo);
        dato.interfazCiclo(`<br> ${contador} numeros no son primos`);
        
    }
    //  1.2.9.	Almacenar en un vector los números de 1 hasta n y posteriormente imprimir la sumatoria de los números primos y no primos.
    Exercise_9 () {
        let vector = new Array(), primo = 0, noPrimo = 0;
        let numero = dato.ingresarNumero("numero");
        for (let i = 1;i <= numero;i++) {
            vector.push(i);
            if (dato.primo(i)) {
                primo += i;
            }else{
                noPrimo += i;
            }
        }
        dato.unidimensional(vector);
        dato.interfazCiclo(`<br> Sumatoria De Numeros Primos : ${primo}<br><br>Sumatoria De Numeros No Primos :${noPrimo}`);
    }
    //  1.2.10.	Calcular el promedio de 50 valores almacenados en un vector. Determinar además cuantos son mayores que el promedio, imprimir el promedio, el número de datos mayores que el promedio y una lista de valores mayores que el promedio.
    Exercise_10 () {
        let vector = new Array(), promedio = 0, sumatoria = 0, texto = "";
        for (let i = 0;i < 50;i++) {
            vector.push(parseInt(Math.random()*100));
            sumatoria += i;
        }
        promedio = sumatoria / 50;
        sumatoria = 0;
        for (let i = 0; i < vector.length; i++) {
            if (promedio<vector[i]) {
                sumatoria++;
                texto += `${vector[i]} , `
            }
        }
        dato.unidimensional(vector);
        dato.interfazCiclo(`<br> El promedio es de ${promedio}<br><br>Hay ${sumatoria} numeros mayores que el promedio :<br><br>${texto.substring(0,texto.length-3)}`);
    }
    //  1.2.11.	Capturar 4 sueldos y desplegarlos aumentados en un 25%
    Exercise_11() {
        let vector = new Array();
        let numero = 0;
        for (let i = 1;i <= 4;i++) {
            numero = dato.ingresarNumero("suledo");
            vector.push(numero+(numero*25/100));
        }
        dato.unidimensional(vector);
    }
    //  1.2.12.	Llenar dos vectores A y B de 45 elementos cada uno, sumar el elemento uno del vector A con el elemento uno del vector B y así sucesivamente hasta 45, almacenar el resultado en un vector C, e imprimir el vector resultante.
    Exercise_12() {
        let vectorA = new Array(), vectorB = new Array(), vectorC = new Array();
        let numero = 0;
        for (let i = 0; i < 45; i++) {
            vectorA.push(i)
        }
        for (let i = 0; i < 45; i++) {
            vectorB.push(i)
        }
        for (let i = 0;i < vectorA.length;i++) {
            for (let j = 0; j < vectorB.length; j++) {
                if (i==j) {
                    vectorC.push(vectorA[i]+vectorB[j])
                }
            }
        }
        dato.unidimensional(vectorA,3);
        dato.unidimensional(vectorB,0);
        dato.unidimensional(vectorC,0);
    }
    /*  1.2.13.	Las claves de respuesta de 5 preguntas están guardadas en un arreglo : 
            res[0]="A";
            res[1]="C";
            res[2]="A";
            res[3]="B";
            res[4]="A";
        y las respuestas del usuario deben almacenarcen en otro arreglo, indicar cuantos respuestas fueron contestadas correctamente, incorrectamente e indicar si pasó la prueba donde 3 es la cantidad de preguntas mínimas que debe contestar bien para pasar la prueba.             */
    Exercise_13() {
        let usuario = new Array(), correcta = 0, incorrecta = 0;
        let caracter = "";
        let res = new Array();
        res[0]="A";
        res[1]="C";
        res[2]="A";
        res[3]="B";
        res[4]="A";
        for (let i = 0; i < 5; i++) {
            do {
                caracter = prompt(`Ingrese Respuesta: 'A' 'B' 'C'`);                
            } while ((caracter!="A")&&(caracter!="B")&&(caracter!="C"));
            usuario[i]=caracter;
        }
        for (let i = 0; i < res.length; i++) {
            if (res[i]==usuario[i]) {
                correcta++;
            }else{
                incorrecta++;
            }
        }
        dato.unidimensional(usuario);
        dato.interfazCiclo(`Respuestas Correctas :  ${correcta}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Respuestas Incorrectas :  ${incorrecta}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;El usuario ${correcta>=3?"Aprobo":"Reprobo"}`);
    }
    //  1.2.14.	Llenar un vector de 20 elementos, imprimir la posición y el valor del elemento mayor almacenado en el vector. Suponga que todos los elementos del vector son diferentes.
    Exercise_14() {
        let usuario = new Array(), mayor = 0, indice = 0;
        for (let i = 0; i < 20; i++) {
            usuario.push(parseInt(Math.random()*20));
        }
        for (let i = 0; i < usuario.length; i++) {
            if (usuario[i]>mayor) {
                mayor=usuario[i];
                indice=i;
            }
        }
        dato.unidimensional(usuario);
        dato.interfazCiclo(`El numero mayor es :  ${mayor}<br><br>Su posicion en el arreglo es :  ${indice+1}`);
    }
    //  1.2.15.	Almacenar 500 números en un vector, elevar al cuadrado cada valor almacenado en el vector, almacenar el resultado en otro vector. Imprimir el vector original y el vector resultante.
    Exercise_15() {
        let usuario = new Array(), elevacion = new Array();
        for (let i = 0; i < 500; i++) {
            usuario.push(parseInt(Math.random()*6));
        }
        for (let i = 0; i < usuario.length; i++) {
            elevacion[i]=Math.pow(usuario[i],2);
        }
        dato.interfazCiclo(`Vector Original :<br>`,2);
        dato.unidimensional(usuario,2);
        dato.interfazCiclo(`Vector Resultante :<br>`,0);
        dato.unidimensional(elevacion,0);
    }
    //  1.2.16.	Almacenar 300 números en un vector, imprimir cuantos son ceros, cuantos son negativos, cuantos positivos. Imprimir además la suma de los negativos y la suma de los positivos.
    Exercise_16() {
        let usuario = new Array(), negativo = 0, cero = 0, positivo = 0, sumaNegativo = 0, sumaPositivo = 0;
        for (let i = -100; i < 200; i++) {
            usuario.push(i);
        }
        for (let i = 0; i < usuario.length; i++) {
            if (usuario[i]==0) {
                cero++;
            }else if (usuario[i]<0) {
                sumaNegativo += usuario[i];
                negativo++;
            }else{
                positivo++;
                sumaPositivo += usuario[i];
            }
        }
        dato.unidimensional(usuario);
        dato.interfazCiclo(`Numeros Neutros : ${cero} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Numeros Positivos : ${positivo}&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Numeros Negativos : ${negativo}<br><br>&emsp; &emsp; &emsp;&emsp; &emsp; &emsp;&emsp;Suma De Positivos : ${sumaPositivo}&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Suma De Negativos : ${sumaNegativo}`);
    }
    //  1.2.17.	Almacenar 150 números en un vector, almacenarlos en otro vector en orden inverso al vector original e imprimir el vector resultante.
    Exercise_17() {
        let vectorA = new Array(), vectorB = new Array();
        for (let i = 0; i < 150; i++) {
            vectorA.push(parseInt(Math.random()*10));
        }
        for (let i = 149; i >= 0 ; i--) {
            vectorB.push(vectorA[i]);
        }
        dato.unidimensional(vectorA,2);
        dato.unidimensional(vectorB,0);
    }
    //  1.2.18.	Se tienen almacenados en la memoria dos vectores M y N de cien elementos cada uno. Hacer un algoritmo que escriba la palabra “Iguales” si ambos vectores son iguales y “Diferentes” si no lo son. Serán iguales cuando en la misma posición de ambos vectores se tenga el mismo valor para todos los elementos.
    Exercise_18() {
        let vectorA = new Array(), vectorB = new Array(), iguales = 0;
        for (let i = 0; i < 100; i++) {
            vectorA.push(i);
        }
        for (let i = 0; i < 100; i++) {
            vectorB.push(i);
        }
        for (let i = 0; i < 100 ; i++) {
            if (vectorA[i]==vectorB[i]) {
                iguales++;
            }
        }
        dato.unidimensional(vectorA,2);
        dato.unidimensional(vectorB,0);
        dato.interfazCiclo(`${iguales==vectorA.length?"Los Vectores Son Iguales":"Los Vectores Son Diferentes"}`);
    }
    //  1.2.19.	Se tiene el vector A con 100 elementos almacenados. Diseñe un algoritmo que escriba “SI” si el vector esta ordenado ascendentemente o “NO” si el vector no está ordenado.
    Exercise_19() {
        let vectorA = new Array(), incremento = 0;
        for (let i = 0; i < 100; i++) {
            vectorA.push(i);
        }
        dato.unidimensional(vectorA);
        for (let i = 0; i < vectorA.length; i++) {
            if (vectorA[i]>=incremento) {
                incremento=vectorA[i];
            }else{
                return setTimeout(()=>{
                    alert("NO");
                },100);
            }
        }
        setTimeout(()=>{
            alert("SI");
        },100);
    }
    //  1.2.20.	Diseñe un algoritmo que lea un número cualquiera y lo busque en el vector X, el cual tiene almacenados 80 elementos. Escribir la posición donde se encuentra almacenado el número en el vector o el mensaje “NO” si no lo encuentra. Búsqueda secuencial.
    Exercise_20() {
        let vectorA = new Array(), numero = dato.ingresarNumero("numero");
        for (let i = 0; i < 80; i++) {
            vectorA.push(parseInt(Math.random()*100));
        }
        dato.unidimensional(vectorA);
        for (let i = 0; i < vectorA.length; i++) {
            if (vectorA[i]==numero) {
                return setTimeout(()=>{
                    dato.interfazCiclo(`El Numero Se Encuentra Almacenado En La Posicion ${i+1}`);
                },100);
            }
        }
        setTimeout(()=>{
            dato.interfazCiclo(`El Numero No Se Encuentra Almacenado`);
        },100);
    }
    //  1.2.21.	Diseñe un algoritmo que lea dos vectores A y B de 20 elementos cada uno y multiplique el primer elemento de A con el último elemento de B y luego el segundo elemento de A por el diecinueveavo elemento de B y así sucesivamente hasta llegar al veinteavo elemento de A por el primer elemento de B. El resultado de la multiplicación almacenarlo en un vector C.
    Exercise_21() {
        let vectorA = new Array(), vectorB = new Array(), vectorC = new Array(), j = 0;
        for (let i = 0; i < 20; i++) {
            vectorA.push(parseInt(Math.random()*20));
        }
        dato.unidimensional(vectorA,3);
        for (let i = 0; i < 20; i++) {
            vectorB.push(parseInt(Math.random()*20));
        }
        dato.unidimensional(vectorB,0);
        j = vectorB.length-1;
        for (let i = 0; i < vectorA.length; i++) {
            vectorC[i] = vectorA[i]*vectorB[j];
            j--;
        }
        dato.unidimensional(vectorC,0);
    }
    //  1.2.22.	Diseñe un algoritmo que almacene en un vector llamado FIB[100] los 100 primeros números de la serie Fibonacci.
    Exercise_22() {
        let FIB = [0,1];
        for (let i = 2; i < 100; i++) {
            FIB.push(FIB[i-2]+FIB[i-1]);
        }
        dato.unidimensional(FIB);
    }
}