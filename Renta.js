function iniciar() {
    console.log("entrando a funcion iniciar")

    let btncalcular = document.getElementById("calcular"); //Asociando boton input area
   
    function lanzar(){        
        resetear();
        resetear();
        salario();
    }


    if (btncalcular.addEventListener) {
        btncalcular.addEventListener("click", lanzar, false);
                //Si hay un cambio en btnArea llama a funcion calculararea        
    }
    else {
        btnarea.attachEvent("onclick", lanzar);//Para versiones IE8 y anteriores
        
    } 
    
}
//////////////////////////////////////////////////////////////////////
function salario(){
    console.log('dentro de funcion salario')
    let cRenta = new retenciones(document.frmCalculo.salario.value); 
    //Se crea instancia de la funcion rectangulo,//se enviar los valores ingresados en formulario frmrectangulo, con el input txtbase y txtaltura
  
    return false;
}
//////////////////////////////////////////////////////////////////////
//Creando la clase rectangulo
    function retenciones(salariosText){ //recibe dos props        
        
       if(salariosText){
        let salario = parseFloat(salariosText) //convirtiendo datos que entran a float
        
        let isss =  salario * 0.03; //calculando el area de datos ingresados
        let afp = salario * 0.0725; //Calculando el perimetro con datos ingresados
        
        let salarioConRetencion = salario - isss - afp
        
        if(salarioConRetencion>472.00){
          let mostrarRenta = renta(salarioConRetencion)
          mostrar(mostrarRenta,isss.toFixed(2),afp.toFixed(2));
        }
        else{
            alert("Salario no es sujeto a retención de renta");
            //mostrar("Salario no es sujeto a retención de renta");
            mostrar("No es sujeto de renta",isss.toFixed(2),afp.toFixed(2));
        }
       
       
       }
       else alert("¡Debe ingresar un valor mayor a cero!");
        
    }

    function renta(salarioConRetenciones){ //recibe dos props
        let exceso = 0;
        let rentaRetenida = 0;
        console.log('dentro de funcion renta')
        if(salarioConRetenciones<=895.24){
             exceso = salarioConRetenciones - 472
             rentaRetenida = (exceso * 0.10)+17.67

        }
        else if (salarioConRetenciones>895.24 && salarioConRetenciones<=2038.10){
             exceso = salarioConRetenciones - 895.24
             rentaRetenida = (exceso * 0.20)+60
        }
        else{  rentaRetenida = (exceso * 0.30)+288.57}
        
        //alert("La renta retenida es de: $" + rentaRetenida.toFixed(2))
       // mostrar("Su descuento en renta es: $"+ ," "," ")
        return rentaRetenida.toFixed(2)
        
    }

    
    function mostrar (dato1,dato2,dato3){
        let spanreten = document.getElementsByClassName("results")[0];
        let spanisss = document.getElementsByClassName("results")[1];
        let spanafp = document.getElementsByClassName("results")[2];
            
        spanisss.setAttribute("display","true");
        spanafp.setAttribute("display","true");
        spanreten.setAttribute("display","true");
        //span.setAttribute('id','spanNuevo');  
    
        spanreten.innerHTML = "RENTA: " + dato1;
        spanisss.innerHTML = "Retencion de ISSS $"+ dato2;
        spanafp.innerHTML = "Retencion de AFP $" + dato3;  


    }

       


    const resetear = () => { 
        let span = document.getElementById("spanNuevo");     
         
        
        if(span!= null){   
         span.innerHTML  = " ";    
         }           
    }

  
//////////////////////////////////////////////////////////////////////
//Asociando la funcion iniciar, que maneja evento load al cargar la pagina
if (window.addEventListener){  //Si la ventana registra un cambio
    window.addEventListener("load", iniciar, false) //LLama a la funcion iniciar()
} 
else if(window.attachEvent){    
    window.attachEvent("onload", iniciar); //LLama a la funcion iniciar()

    console.log('entro a funcion que iniciara iniciar()')
} 
  