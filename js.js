

// num random 0-255

let numRandom255 = ()=>{
    let num = Math.floor(Math.random()*255);
  
    return num;
}

let numRandom1 = ()=>{
    let num =(Math.random()*1).toFixed(2);
    
    return num;
}



let setBackgroundColor =()=>{
          let i =0;
          let contador=0;
          let titulo = document.getElementById('titulo6');
          let caja = document.getElementById('caja1');
          let contadores = document.getElementById('contadores');
        
        
    let change = setInterval(function (){
                 contadores.style.display="block";

            let cambia = setInterval(function(){
                   for (i =0;i<20; i++){
                         
                       titulo.style.color=
                       `rgba(${numRandom255()},${numRandom255()},${numRandom255()},${numRandom1()})`
                     document.getElementById('contador').innerHTML= `rgba(${numRandom255()},${numRandom255()},${numRandom255()},${numRandom1()})`;
                     
                   
                     if(contador ===30){
                         caja.style.backgroundColor=`rgba(${numRandom255()},${numRandom255()},${numRandom255()},${numRandom1()})`;
                          
                     }
                }
                
                if(contador ===61){
                     titulo.style.fontSize='0em';
                     caja1.style.marginTop="10px";
                     caja1.style.backgroundColor="transparent";
                     titulo.style.fontSize='5em';
                     contadores.style.display='none';
                    
                     clearInterval(cambia);
                     clearInterval(change);
                }

            },809);
              document.getElementById('contador2').innerHTML=contador;
                contador++;     
               
       },300);
            
}

window.onload=()=>{
setBackgroundColor();

}