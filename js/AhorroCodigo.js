class Funciones{
    
    ingresarNumero(a) {
        let numero = "string";
        do {
            if (isNaN(numero)) {
                numero = parseInt(prompt(`Ingrese ${a}:`));                
            }
        } while (isNaN(numero));
        return numero;
    }
    confirmacion(a){
        let numero = "string";
        do {
            if (isNaN(numero)) {
                numero = parseInt(prompt(`Ingrese:${a}`));                
            }
        } while (isNaN(numero));
        return numero;
    }
    primo(numero) {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return numero !== 1;
    }
    arreglo(a,b){
        let matriz = new Array();
        for (let i = 0; i < a; i++) {
            matriz[i] = new Array();
            for (let j = 0; j < b; j++) {
                matriz[i][j]=parseInt(Math.random()*10);
            }
        }
        return matriz;
    }
    arregloSumaFila(a){
        let suma = 0, sumaFila = new Array();
        for (const iterador of a) {
            for (const iterado of iterador) {
                suma += iterado;
            }
            sumaFila.push(suma);
            suma=0;
        }
        return sumaFila;
    }
    arregloSumaColumna(fil,col,arreglo){
        let suma = 0, sumaColumna = new Array();
        for (let x = 0; x < col; x++) {
            for (let i = 0; i < fil; i++) {
                for (let j = 0; j < col; j++) {
                    if (j==x) {
                        suma += arreglo[i][x];
                    }
                }
            }
            sumaColumna.push(suma);
            suma=0;
        }
        return sumaColumna;
    }
    ingresoTienda(a){
        let ingreso = 0;
    do {
        ingreso = parseInt(prompt(a));
    } while (ingreso!=1&&ingreso!=2);
    return ingreso;
    }
    arregloCero(filaTienda,columnaTienda){
        let matrizRegistro = new Array();
        for (let i = 0; i < filaTienda; i++) {
            matrizRegistro[i] = new Array();
            for (let j = 0; j < columnaTienda; j++) {
                matrizRegistro[i][j]=0;
            }
        }
        return matrizRegistro;
    }
    validar(a,x,b){
        let notas = new Array();
        for (let i = 0; i < b; i++) {
            while (isNaN(x)||x<1||x>5) {
                x = parseFloat(Math.random()*6)
            }
            notas[i]=x.toFixed(1);
            x="cadena"
        }
        return notas;
    }
    tabla(x,j=1){
        (j==1)?j=".problema":j='.matriz';
        let table = document.createElement("table");
        table.id = "tabla";
        table.border = 1;
        table.align = "center";
        table.style.marginTop = "1em";
        let tblBody = document.createElement("tbody");

        for (const iterador of x) {
            let tr = document.createElement('tr');
            for (const iterado of iterador) {
                let td = document.createElement('td');
                td.innerText=`${iterado}`;
                tr.appendChild(td);
            }
            tblBody.appendChild(tr);
        }
        let hijo = document.getElementById('tabla');
        if (hijo!=null) {
            hijo.remove();
        }
        table.appendChild(tblBody);
        document.querySelector(j).appendChild(table);
    }
    show(x,z = 0,y = 0){
        let url = ""
        switch (y) {
            case 0:
                y = '.bidimensional-background';
                url = "url(../img/bidimensional.jpg)";
                break;
            case 1:
                y = '.unidimensional-background';
                url = "url(../img/unidimensional.png)";
                break;
            case 2:
                y = '.ciclo-background';
                url = "url(../img/ciclo.jpg)";
                break;
        }
        let padre = document.querySelector('.matriz');
        let j = document.querySelector('.mensaje');
        let i = document.querySelector(y);
        padre.style.display=x;
        if (x=="block") {
            j.style.display="none";
            i.style.backgroundImage="none";
        }else{
            j.style.display="block";
            i.style.backgroundImage=url;
        }
        if (z==1) {
            padre.style.width = "1270px";
            padre.style.marginTop = "1em";
            padre.style.backgroundColor = "purple";
            padre.style.height = "1440px";
            padre.style.left = "0%";
        }else{
            padre.style.width = "60%";
            padre.style.marginTop = "5em";
            padre.style.backgroundColor = "orange";
            padre.style.height = "73%";
            padre.style.left = "19.5%";
        }
    }
    interfazCiclo(a,b=1,c=1){
        (c==1)?c=".problema":c='.matriz';
        let hijo = document.getElementById('ciclo_eliminar');
        if (hijo!=null&&b==1) {
            hijo.remove();
        }else if (hijo!=null&&b==2) {
            hijo.remove();
            document.getElementById('ciclo_eliminar').remove();
        }
        let div = document.createElement('div');
        div.style.margin = "1em";
        div.innerHTML=a
        div.id = "ciclo_eliminar";
        document.querySelector(c).appendChild(div);
    }
    eliminarDiv(){
        let eliminar = document.querySelector('.matriz');
        eliminar.remove();
        let div = document.createElement('div');
        div.classList = 'matriz';
        div.style.display = "none";
        div.style.borderRadius = "22px";
        div.style.position = "absolute";
        
        document.querySelector('.row').before(div);
    }
    unidimensional(x,j=1){
        let table = document.createElement("table");
        table.id = "tabla";
        table.border = 1;
        table.align = "center";
        table.style.marginTop = "1em";
        
        let tblBody = document.createElement("tbody");
        let tr = document.createElement('tr');
        for (const iterado of x) {
            let td = document.createElement('td');
            td.innerText=`${iterado}`;
            tr.appendChild(td);
        }
        tblBody.appendChild(tr);
        
        let hijo = document.getElementById('tabla');
        if (hijo!=null&&j==1) {
            hijo.remove();
        }else if (hijo!=null&&j==2) {
            hijo.remove();
            document.getElementById('tabla').remove();
            document.getElementById('tabla').remove();
        }else if (hijo!=null&&j==3) {
            hijo.remove();
            document.getElementById('tabla').remove();
            document.getElementById('tabla').remove();
        }
        table.appendChild(tblBody);
        let m = document.querySelector('.problema');
        m.style.overflow = "auto";
        m.appendChild(table);
    }
}