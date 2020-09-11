const dato = new Funciones();
class Ciclos {
    //  1.1.1.	Leer un número (n) e imprimir la sumatoria de 1 hasta n.
    Exercise_1() {

        let numero = dato.ingresarNumero("numero");
        let sumatoria = 0;

        for (let i = 1; i <= numero; i++) {
            sumatoria += i;        
        }

        alert(sumatoria);
    }
    //  1.1.2.	Leer 2 números e Imprimir el producto del primer número con el segundo número por intermedio de sumas.
    Exercise_2() {

        let numeroUno = dato.ingresarNumero("Primer Numero");
        let numeroDos = dato.ingresarNumero("Segundo Numero");

        alert(`${numeroUno} X ${numeroDos} = ${numeroUno*numeroDos}`);
    }
    //  1.1.3.	Imprimir la tabla de multiplicar del 5.
    Exercise_3() {
        let texto= "";
        
        for (let i = 0; i <= 10; i++) {
            texto += `5 X ${i} = ${5*i} \n`;
        }

        alert(texto);
    }
    //  1.1.4.	Leer el multiplicando y el multiplicador y hallar el producto e imprimir la tabla.
    Exercise_4() {

        let multiplicando = dato.ingresarNumero("multiplicando");
        let multiplicador = dato.ingresarNumero("multiplicador");
        let texto= "";

        for (let i = 0; i <= multiplicador; i++) {
            texto += `${multiplicando} X ${i} = ${multiplicando*i} \n`;
        }

        alert(texto);
    }
    /*  1.1.5.	Leer 2 números donde el primer número es la base y segundo es el exponente:
                -	Imprimir el resultado mediante multiplicaciones.    */
    Exercise_5() {

        let base = dato.ingresarNumero("base");
        let exponente = dato.ingresarNumero("exponente");
        let automultiplicacion=0;
        let texto="";

        for (let i = 2; i <= exponente; i++) {
            if (automultiplicacion==0) {
                automultiplicacion=base;
            } else {
                automultiplicacion*=base;
            }
            texto += `${automultiplicacion} X ${base} = ${automultiplicacion*base} \n`;
        }

        alert(texto);
    }
    //  1.1.6.	Leer dos números e imprimir el máximo común divisor.
    Exercise_6() {

        let numeroUno = dato.ingresarNumero("Primer Numero");
        let numeroDos = dato.ingresarNumero("Segundo Numero");
        let maximoComunDivisor = 0;

        for (let i = 1; i <= numeroUno; i++) {
            if (numeroUno%i==0) {
                for (let j = 1; j <= numeroDos; j++) {
                    if (numeroDos%j==0) {
                        if (i==j) {
                            maximoComunDivisor = i;
                        }
                    }
                }
            }
        }
        alert(maximoComunDivisor);
    }
    //  1.1.7.	Leer dos números e imprimir el mínimo común múltiplo.
    Exercise_7() {

        let numeroUno = dato.ingresarNumero("Primer Numero");
        let numeroDos = dato.ingresarNumero("Segundo Numero");
        let cantidad = numeroUno*numeroDos;
        let minimoComunMultiplo = cantidad;

        for (let i = 1; i <= cantidad; i++) {
            for (let j = 1; j <= cantidad; j++) {
                if (numeroDos==numeroUno) {
                    if ((numeroDos==numeroUno)<minimoComunMultiplo) {
                        minimoComunMultiplo = numeroUno;
                    }
                }
                numeroDos *= j;
            }
            numeroUno *= i;
        }
        alert(minimoComunMultiplo);
    }
    /*  1.1.8.	Leer dos números:
            -	Si el primer número es par imprimir el máximo común divisor.        */
    Exercise_8() {

        let numeroUno = dato.ingresarNumero("Primer Numero");
        let numeroDos = dato.ingresarNumero("Segundo Numero");
        let maximoComunDivisor = 0;

        if (numeroUno%2==0) {
            for (let i = 1; i <= numeroUno; i++) {
                if (numeroUno%i==0) {
                    for (let j = 1; j <= numeroDos; j++) {
                        if (numeroDos%j==0) {
                            if (i==j) {
                                maximoComunDivisor = i;
                            }
                        }
                    }
                }
            }
            alert(maximoComunDivisor);
        }
    }
    /*  1.1.9.	Leer dos números:
            -	Si el segundo número es impar imprimir el mínimo común múltiplo.        */
    Exercise_9() {

        let numeroUno = dato.ingresarNumero("Primer Numero");
        let numeroDos = dato.ingresarNumero("Segundo Numero");
        let cantidad = numeroUno*numeroDos;
        let minimoComunMultiplo = cantidad;

        if (numeroUno%2==0) {
            for (let i = 1; i <= cantidad; i++) {
                for (let j = 1; j <= cantidad; j++) {
                    if (numeroDos==numeroUno) {
                        if ((numeroDos==numeroUno)<minimoComunMultiplo) {
                            minimoComunMultiplo = numeroUno;
                        }
                    }
                    numeroDos *= j;
                }
                numeroUno *= i;
            }
            alert(minimoComunMultiplo);
        }
    }  
    //  1.1.10.	Imprimir la serie Fibonacci de 1 hasta 100.
    Exercise_10() {

        let a = 0, b = 1, c = 0, texto = "";
        
        for(let i=0; i < 100; i++){
            if (i<99) {
                texto += `${a} , `;
                c = a + b;
                a = b;
                b = c;
            }else{
                texto += a;
            } 
        }
        alert(texto);
    }
    //  1.1.11.	Imprimir la serie Fibonacci de 1 hasta n.
    Exercise_11() {

        let numero = dato.ingresarNumero("numero");
        let a = 0, b = 1, c = 0, texto = "";
        
        for(let i=0; i < numero; i++){
            if (i<99) {
                texto += `${a} , `;
                c = a + b;
                a = b;
                b = c;
            }else{
                texto += a;
            } 
        }
        alert(texto.substring(0,texto.length-3));
    }  
    //  1.1.12.	Leer un número e Imprimir si es primo o no.
    Exercise_12() {

        let numero = dato.ingresarNumero("numero");
        if (dato.primo(numero)){
            alert("Es un numero primo");
        }
        else{
            alert("No es un numero primo");
        }
    }
    //  1.1.13.	Imprimir los números primos desde 1 hasta 100.
    Exercise_13() {

        let texto = "";

        for (let i = 1; i <= 100; i++) {
            if (dato.primo(i)){
                texto += `${i} , `;
            }
        }
        alert(texto.substring(0,texto.length-3));
    }
    //  1.1.14.	Imprimir los números primos desde 1 hasta n.    
    Exercise_14() {

        let numero = dato.ingresarNumero("numero");
        let texto = "";

        for (let i = 1; i <= numero; i++) {
            if (dato.primo(i)){
                texto += `${i} , `;
            }
        }
        alert(texto.substring(0,texto.length-3));
    }
    //  1.1.15.	Imprimir cuantos números son primos de 1 hasta 100.
    Exercise_15() {

        let contador = 0;

        for (let i = 1; i <= 100; i++) {
            if (dato.primo(i)){
                contador ++;
            }
        }
        alert(`Numeros primos de 1-100: ${contador}`);
    }
    //  1.1.16.	Imprimir cuantos números son primos de 1 hasta n.
    Exercise_16() {

        let contador = 0;
        let numero = dato.ingresarNumero("numero");

        for (let i = 1; i <= numero; i++) {
            if (dato.primo(i)){
                contador ++;
            }
        }
        alert((numero<1)?"Ingrese un numero mayor":`Numeros primos de 1-${numero}: ${contador}`);
    }
    //  1.1.17.	Imprimir cuales números son primos cuales no de 1 hasta 100 y la cantidad.
    Exercise_17() {

        let Numerosprimos = "";
        let NumerosNoprimos = "";
        let ContadorPrimo = 0;
        let ContadorNoPrimo = 0;

        for (let i = 1; i <= 100; i++) {
            if (dato.primo(i)){
                Numerosprimos += `${i} , `;
                ContadorPrimo++;
            }else{
                NumerosNoprimos += `${i} , `;
                ContadorNoPrimo++;
            }
        }
        alert(`Numeros Primos :  ${ContadorPrimo}\n${Numerosprimos.substring(0,Numerosprimos.length-3)}`);
        alert(`Numeros No Primos :  ${ContadorNoPrimo}\n${NumerosNoprimos.substring(0,NumerosNoprimos .length-3)}`);
    }
    //  1.1.18.	Imprimir cuales números son primos cuales no de 1 hasta n y la cantidad.
    Exercise_18() {

        let Numerosprimos = "";
        let NumerosNoprimos = "";
        let ContadorPrimo = 0;
        let ContadorNoPrimo = 0;
        let numero = dato.ingresarNumero("numero");

        for (let i = 1; i <= numero; i++) {
            if (dato.primo(i)){
                Numerosprimos += `${i} , `;
                ContadorPrimo++;
            }else{
                NumerosNoprimos += `${i} , `;
                ContadorNoPrimo++;
            }
        }
        alert(`Numeros Primos :  ${ContadorPrimo}\n${Numerosprimos.substring(0,Numerosprimos.length-3)}`);
        alert(`Numeros No Primos :  ${ContadorNoPrimo}\n${NumerosNoprimos.substring(0,NumerosNoprimos .length-3)}`);
    }
    //  1.1.19.	Imprimir la serie Fibonacci de 1 hasta 100 y cuales son primos.
    Exercise_19() {
        alert("Nota este algoritmo demora alrededor de un minuto en su ejecucion, no cierre la pestaña del navegador.");
        let a = 0, b = 1, c = 0, texto = "", textoPrimo ="";
        
        for(let i=0; i < 100; i++){
            if (i<99) {
                texto += `${a} , `;
                c = a + b;
                a = b;
                b = c;
                if (dato.primo(c)){
                    textoPrimo += `${c} , `;
                }
            }else{
                texto += a;
            } 
        }
        alert(`Serie Fibonacci hasta 100:\n${texto}`);
        alert(`Numeros Primos de Serie Fibonacci hasta 100:\n${textoPrimo.substring(0,textoPrimo.length-3)}`);
    }
    //  1.1.20.	Imprimir la serie Fibonacci de 1 hasta n y cuales son primos.
    Exercise_20() {

        let a = 0, b = 1, c = 0, texto = "", textoPrimo ="";
        let numero = dato.ingresarNumero("numero");
        
        for(let i=0; i < numero; i++){
            if (i<(numero-1)) {
                texto += `${a} , `;
                c = a + b;
                a = b;
                b = c;
                if (dato.primo(c)){
                    textoPrimo += `${c} , `;
                }
            }else{
                texto += a;
            } 
        }
        alert(`Serie Fibonacci hasta ${numero}:\n${texto}`);
        alert(`Numeros Primos de Serie Fibonacci hasta ${numero}:\n${textoPrimo.substring(0,textoPrimo.length-3)}`);
    }
    //  1.1.21.	Imprimir la serie Fibonacci de 1 hasta 100 y cuales son primos y cuáles no.
    Exercise_21() {
        let a = 0, b = 1, c = 0, texto = "", textoPrimo ="", textoNoPrimo = "0 , ";
        alert("Nota este algoritmo demora alrededor de un minuto en su ejecucion, no cierre la pestaña del navegador.");
        for(let i=0; i < 100; i++){
            if (i<99) {
                texto += `${a} , `;
                c = a + b;
                a = b;
                b = c;
                if (dato.primo(c)){
                    textoPrimo += `${c} , `;
                }else{
                    textoNoPrimo += `${c} , `;
                }
            }else{
                texto += a;
            } 
        }
        alert(`Serie Fibonacci hasta 100:\n${texto}`);
        alert(`Numeros Primos de Serie Fibonacci hasta 100:\n${textoPrimo.substring(0,textoPrimo.length-3)}`);
        alert(`Numeros No Primos de Serie Fibonacci hasta 100:\n${textoNoPrimo.substring(0,textoNoPrimo.length-3)}`);
    }
    //  1.1.22.	Imprimir la serie Fibonacci de 1 hasta n y cuales son primos y cuáles no.
    Exercise_22() {

        let a = 0, b = 1, c = 0, texto = "", textoPrimo ="", textoNoPrimo = "0 , ";
        let numero = dato.ingresarNumero("numero");
        
        for(let i=0; i < numero; i++){
            if (i<(numero-1)) {
                texto += `${a} , `;
                c = a + b;
                a = b;
                b = c;
                if (dato.primo(c)){
                    textoPrimo += `${c} , `;
                }else{
                    textoNoPrimo += `${c} , `;
                }
            }else{
                texto += a;
            } 
        }
        alert(`Serie Fibonacci hasta ${numero}:\n${texto}`);
        alert(`Numeros Primos de Serie Fibonacci hasta ${numero}:\n${textoPrimo.substring(0,textoPrimo.length-3)}`);
        alert(`Numeros No Primos de Serie Fibonacci hasta ${numero}:\n${textoNoPrimo.substring(0,textoNoPrimo.length-3)}`);
    }
    //  1.1.23.	Imprimir la serie Fibonacci de 1 hasta n y cuales son primos y cuáles no, cuántos son primos, cuantos no son primos.
    Exercise_23() {

        let a = 0, b = 1, c = 0, texto = "", textoPrimo ="", textoNoPrimo = "0 , ", ContadorPrimo = 0, ContadorNoPrimo = 1;
        let numero = dato.ingresarNumero("numero");
        
        for(let i=0; i < numero; i++){
            if (i<(numero-1)) {
                texto += `${a} , `;
                c = a + b;
                a = b;
                b = c;
                if (dato.primo(c)){
                    textoPrimo += `${c} , `;
                    ContadorPrimo++;
                }else{
                    textoNoPrimo += `${c} , `;
                    ContadorNoPrimo++;
                }
            }else{
                texto += a;
            } 
        }
        alert(`Serie Fibonacci hasta ${numero}:\n${texto}`);
        alert(`Numeros Primos de Serie Fibonacci hasta ${numero} :  ${ContadorPrimo}\n${textoPrimo.substring(0,textoPrimo.length-3)}`);
        alert(`Numeros No Primos de Serie Fibonacci hasta ${numero} :  ${ContadorNoPrimo}\n${textoNoPrimo.substring(0,textoNoPrimo.length-3)}`);
    }
    //  1.1.24.	Leer un número e imprimir el invertido.
    Exercise_24() {

        let numero = dato.ingresarNumero("numero");
        let texto = "";
        
        while( parseInt(numero / 10) != 0 ){ 
            texto += (numero % 10); 
            numero = parseInt(numero / 10); 
            if(parseInt(numero/10) == 0){ 
                texto += (numero % 10);
            } 
        } 
        alert(texto==0?0:texto)
    }
    //  1.1.25.	Imprimir los números pares de 1 hasta 100.
    Exercise_25() {

        let texto = "";

        for (let i = 0; i <= 100; i++) {
            if(i%2==0){
                texto += (i!=100)?`${i}, `:i;
            }   
        }
        alert(`Los numeros pares son:\n ${texto}`)
    }
    //  1.1.26.	Imprimir los números pares de 1 hasta n.
    Exercise_26() {

        
        let texto = "";
        let numero = dato.ingresarNumero("numero");

        for (let i = 0; i <= numero; i++) {
            if(i%2==0){
                texto += (i!=numero)?`${i}, `:i;
            }   
        }
        alert(`Los numeros pares son:\n ${texto}`)
    }
    //  1.1.27.	Imprimir los números impares de 1 hasta 10.
    Exercise_27() {

        let texto = "";

        for (let i = 0; i < 10; i++) {
            if(i%2!=0){
                texto += (i!=9)?`${i}, `:i;
            }   
        }
        alert(`Los numeros impares son:\n ${texto}`)
    }

    //  1.1.28.	Imprimir los números impares de 1 hasta n.
    Exercise_28() {

        
        let texto = "";
        let numero = dato.ingresarNumero("numero");

        for (let i = 0; i <= numero; i++) {
            if(i%2!=0){
                texto += `${i}, `;
            }   
        }
        alert(`Los numeros impares son:\n ${texto.substring(0,texto.length-2)}`)
    }
    //  1.1.29.	Leer un número n hasta que el usuario decida e imprimir si es primo o no.
    Exercise_29() {

        let texto = "";
        let numero = dato.ingresarNumero("numero");
        let respuesta = dato.confirmacion("\n1. Para saber si el numero es primo o no");

        if (respuesta==1) {
            if (dato.primo(numero)) {
                texto = "El numero es primo";
            }else{
                texto = "El numero no es primo";
            }
            alert(texto);
        }    
    }
    //  1.1.30.	Imprimir el factorial de 1 hasta 100.
    Exercise_30() {

        let texto = "";
        let factorial = 1;

        for (let i = 1; i <= 100; i++) {
            factorial *= i;
            texto += `${i} X `;
        }
        alert(`Factorial de 100:\n${texto.substring(0,texto.length-3)} = ${factorial}`);
    }
    //  1.1.31.	Imprimir el factorial de 1 hasta n.
    Exercise_31() {

        let texto = "";
        let factorial = 1;
        let numero = dato.ingresarNumero("numero");

        for (let i = 1; i <= numero; i++) {
            factorial *= i;
            texto += `${i} X `;
        }
        alert(`Factorial de ${numero}:\n${texto.substring(0,texto.length-3)} = ${factorial}`);
    }
    //  1.1.32.	Imprimir el factorial de 1 hasta n e imprimir si el número es primo n o.
    Exercise_32() {

        let texto = "", primo = 0;
        let factorial = 1;
        let numero = dato.ingresarNumero("numero");
        
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
            texto += `${i} X `;
        }
        if (dato.primo(factorial)){
            primo="Es un numero primo";
        }
        else{
            primo="No es un numero primo";
        }
        alert(`Factorial de ${numero}:\n${texto.substring(0,texto.length-3)} = ${factorial}\n${primo}`);
    }
    //  1.1.33.	Imprimir el factorial de 1 hasta n e imprimir los números primos de 1 hasta el resultado del factorial.
    Exercise_33() {

        let texto = "", textoPrimo = "";
        let factorial = 1;
        let numero = dato.ingresarNumero("numero");
        
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
            texto += `${i} X `;
        }
        for (let i = 1; i <= factorial; i++) {
            if (dato.primo(i)){
                textoPrimo += `${i} , `;
            }
        }
        
        dato.interfazCiclo(`Factorial de ${numero}: <br><br> ${texto.substring(0,texto.length-3)} = ${factorial} <br><br> Numeros Primos del Factorial de ${numero}: <br><br> ${textoPrimo.substring(0,textoPrimo.length-3)}`);
        
    }
}