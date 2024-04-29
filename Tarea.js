class funcion{
    Divisores(){
        let con=0 
        let res=document.getElementById("res")
        let ingreso=document.getElementById("ingreso").value
        let ver=isNaN(ingreso)
        if(ver!=true){
            ingreso=parseFloat(ingreso)
            res.textContent=" "
            for(let i=0; i<ingreso; i++){
                if(ingreso%i==0){ 
               con=con+1
                if(con==1){
                    res.textContent+=`${i.toString()}`
                }else if(con!=1){
                    res.textContent+=`, ${i.toString()}`}
                }
            }
        }else{
            alert("Ingrese solo valores numericos")}  
    }
    numeroprimos(){
        console.log("hola")
        let conpri=0
        let res=document.getElementById("res")
        let ingreso=document.getElementById("ingreso").value
        let ver=isNaN(ingreso)
        if(ver!=true){
            ingreso=parseFloat(ingreso)
            for(let i=0; i<=ingreso; i++){
                if(ingreso%i==0){
                conpri=conpri+1
                }
            }
            if(conpri== 2){
                res.textContent=`El numero que usted ha ingresado si es un numero primo`
            }else{res.textContent= `El numero que usted ha ingresado no es un numero primo`
            }
        }else{
            alert("ingrese un valor numerico")
        }
        
    }
    numeroinversa(){
        let array=[]
        let a=0
         let ingreso=document.getElementById("ingreso").value
         let res=document.getElementById("res")
         res.textContent=" "
         let lon=ingreso.length
         let ver=isNaN(ingreso)
         if(ver!=true){
        for(let i=0; i<lon; i++){
            array[i]=ingreso.substring(i,i+1)
            console.log(array[i])
        }
        for(let i=lon-1; i>=0; i--){
            res.textContent+= array[i]
        }
         }else{alert("Por favor, ingrese un valor numerico")}
          
        
        
        }
    Base2_Base10(){
        let guardar=[], po=0, con=0, re=[],con2=0
        let ingreso=document.getElementById("ingreso").value
        let me=isNaN(ingreso)
        let ve=ingreso.length //saca la longitud de lo que hyamos ingresado
        for(let i=0; i<ve; i++){ 
            re[i]=ingreso.substring(i,i+1) //el substring sacara digito y digito para comparar si algun numero es mayor que uno, en caso de ser asi se le sumara un uno a la variable con2(en caso de ser asi, va hacer que la proxima condicion no se cumpla)
            if(re[i]>1){
             con2=con2+1
            }
        }
        if(me!=true && con2==0){ //aqui vamos a ver si el me es vrd o falso, en caso de ser diferente que vrdd (falso) se va cumplir la condicion, si es vrdd se mandara una alerta (linea 86)
            ingreso=parseFloat(ingreso) //va a convertir el valor de lo ingresado a numerorico, para poderse utilizar
            let ingreso2=ingreso //a ingreso2 le vamos a dar el valor de lo que hayamos ingresado
            while(ingreso>0){ //si ingreso es mayor que 0 se hace el proceso
                guardar[po]=((ingreso%10)*(Math.pow(2,po)))
                con=con+guardar[po]
                po=po+1
                ingreso=Math.trunc(ingreso/10)
            }
            res.textContent=`SU numero ${ingreso2.toString()} en base 2, es igual a ${con.toString()} en base 10`
        }else{alert("Su valor no es numerico o no ha ingresado un valor en base 2, vuelva a intentarlo")}
        }
    contar_palabras(){
        let gu=[]
        let con=0, con2=0
        let ingreso=document.getElementById("ingreso").value;
        let res = document.getElementById("res");
        res.textContent=" "
        if(isNaN(ingreso)==true){
            let numero2=ingreso.length
            numero2=numero2-1
            for(let i=numero2; i>=0; i--){
            gu[i]=ingreso.substring(i,i+1) }
            while(con<numero2){
                if(gu[con]==" "){
                    if(gu[con+1]!=" "){if(isNaN(gu[con+1])==true){
                        con2=con2+1
                    } }
                }  con=con+1
            }
            if(gu[0]!=" "){if(isNaN(gu[0])==true){
                con2=con2+1
            }}
            if(con2==0){
                alert("No ha ingresado ninguna palabra, por favor intentelo nuevamente")
            }else{
                res.textContent=`La cantidad de palabras que usted ha ingresado es de: ${con2.toString()}`
            }
            
        }else{alert( "Usted solo ha ingresado valores numericos, vuelva a intentarlo con palabras")}
        }
        polindormo(){
            let a=[]
            let con1=0, ver=0
            let ingreso=document.getElementById("ingreso").value
            let numero2=ingreso.length
            let res=document.getElementById("res")
            res.textContent=" "
            ver=isNaN(ingreso)
                if(ver==true){
                for(let i=0; i<numero2; i++){
                    a[i]=ingreso.substring(i,i+1)
                    }
                    numero2=numero2-1
                    for(let i=0; i<=numero2; i++){
                        if(a[i]!=a[numero2]){
                        con1=con1+1}
                        numero2=numero2-1
                    }
                    if(con1!=0){
                        res.textContent=`Lo que usted ha ingresado no es un numero polindromo`
                    }else{
                        res.textContent=`Lo que usted ha ingresado si es un polindormo`
                    }
            }else{
                alert("ingrese un valor numero")
            }
           
        
        }
        Promedio(){
            let con1=0
            let ingresado=document.getElementById("ingreso").value
            let res=document.getElementById("res")
                let guardar = ingresado.split(";")
                let lo=guardar.length
                lo=lo
                for(let i=0; i<lo; i++){
                con1=con1+(parseFloat(guardar[i]))
                }
                 con1=Math.trunc(con1/lo)
                 if((isNaN(con1))==true){
                alert("Por, favor ingrese un valor numero")
                 }else{
                    res.textContent=`El promedio de el arreglo es de: ${con1.toString()} (si su numero tenia decimales, este fue redondeado)`
                 }
            }
                
            contarcaracteres(){
                let punto=0, vocales=0, consonantes=0, punto_coma=0, doble_punto=0, coma=0, caracteres_especiales=0
                let ingresado=document.getElementById("ingreso").value
                let res=document.getElementById("res")
                
                let lon=ingresado.length
                let array=[]
                for(let i=0; i<lon; i++){
                    array[i]=ingresado.substring(i,i+1)
                    switch(array[i]){
                    case "B" :
                    case "C":
                    case "D":
                    case "F": 
                    case "G":
                    case "H":
                    case "J":
                    case "K":
                    case "L": 
                    case "M": 
                    case "N":
                    case "Ñ": 
                    case "P": 
                    case "Q": 
                    case "R": 
                    case "S":
                    case "T":
                    case "V":
                    case "X":
                    case "Z": 
                    case "W": 
                    case "Y":
                    case "b" :
                    case "c":
                    case "d":
                    case "f": 
                    case "g":
                    case "h":
                    case "J" :
                    case "k":
                    case "l": 
                    case "m": 
                    case "n":
                    case "ñ": 
                    case "p": 
                    case "q": 
                    case "r": 
                    case "s":
                    case "t":
                    case "v":
                    case "x":
                    case "z": 
                    case "w": 
                    case "y":
                    consonantes=consonantes+1
                    break
                    case "A":
                    case "a":
                    case "E":
                    case "e":
                    case "I":
                    case "i":
                    case "O":
                    case "o":
                    case "U":
                    case "u":
                    vocales=vocales+1
                    break
                    case ";":
                    punto_coma=punto_coma+1
                    break
                    case ".":
                    punto=punto+1
                    break
                    case ":":
                    doble_punto=doble_punto+1
                    break
                    case ",":
                    coma=coma+1
                    break
                    default: caracteres_especiales=caracteres_especiales+1
                    break
                    }
                    
                }
                res.textContent=`Usted ha ingresado: ${vocales.toString()} vocal/es, ${consonantes.toString()} consonante/s, ${coma.toString()} coma/s, ${punto.toString()} punto\s, ${doble_punto.toString()} doble punto/s, ${punto_coma.toString()} punto/s, ${coma.toString()} coma/s y ${caracteres_especiales.toString()} caracter/es especial/es`
              
                

            }
        }

           
            
         

     

            
        
    
        
        
let guardarOpcion=new funcion()
