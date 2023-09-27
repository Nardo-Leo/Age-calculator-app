const dataAtual = new Date()

const diaAtual  = Number(dataAtual.getDate())

const mesAtual  = Number(dataAtual.getMonth() + 1) 
/*Começa com zero, janeiro mes 0 fevereiro mes 1... 
Por isso precisamos adicionar 1*/

const anoAtual  = Number(dataAtual.getFullYear())


function datavalidate(){

    const campo = document.querySelectorAll('.data_required')
    const resultado = document.querySelectorAll('.result')

    const fields = Array.prototype.slice.call(campo)
    const result = Array.from(resultado)


    
    
}



function dataCauculate(){

    const campo = document.querySelectorAll('.data_required')
    const resultado = document.querySelectorAll('.result')

    const fields = Array.prototype.slice.call(campo)
    const result = Array.from(resultado)

    const spans = document.querySelectorAll('.span_required')
    const erros = document.querySelectorAll('.erro_required')

    const span = Array.from(spans)
    const erro = Array.from(erros)

    const tipo = document.querySelectorAll('.tipo')
    const type = Array.from(tipo)
    
     


    let daytotal = 1
    let mouthtotal = 1
    let yeartotal = 1
   

  
    /*Aqui pro calculo de anos */

    if(((fields[2].value))==''){
        span[2].style.display = 'block'
        erro[2].style.display = 'none'
        campo[2].style.border = '1px solid #ff5757'
        type[2].style.color = '#ff5757'

    }else{
        span[2].style.display = 'none'
        campo[2].style.border = '1px solid 	#716f6f'
        type[2].style.color = '	#716f6f'
        if(((fields[2].value)> anoAtual)||(fields[2].value)<1){
            
            erro[2].style.display = 'block'
            campo[2].style.border = '1px solid #ff5757'
            type[2].style.color = '#ff5757'
             
         }else{
                if((fields[2].value)==anoAtual){
                    yeartotal = 0
                    result[0].innerHTML = yeartotal
                }else{
                    yeartotal = anoAtual - fields[2].value
                    result[0].innerHTML = yeartotal
                }   
    
        }
    }

    
        
        
    





    /*Aqui pro calculo de dias */




    if(((fields[0].value))==''){
        span[0].style.display = 'block'
        erro[0].style.display = 'none'
        campo[0].style.border = '1px solid #ff5757'
        type[0].style.color = '#ff5757'

    }else{
        
        span[0].style.display = 'none'
        campo[0].style.border = '1px solid 	#716f6f'
        type[0].style.color = '	#716f6f'

        if(((fields[0].value) < 1)||((fields[0].value) > 31)){
            
            erro[0].style.display = 'block'
            campo[0].style.border = '1px solid #ff5757'
            type[0].style.color = '#ff5757'
           
         }else{
             if((((fields[1].value)==2)&&((fields[2].value)%4 != 0)&&((fields[0].value)>=29))||//verificando se o mes informado é fevereiro de um ano que não seja bissexto, porque ai n pode ser maior ou igual a 29
             (((fields[1].value)==2)&&((fields[2].value)%4 == 0)&&((fields[0].value)>=30))){//verificando se o mes informado é fevereiro de um ano bissexto, porque ai n pode ser maior ou igual a 30
                 
                erro[0].style.display = 'block'
                campo[0].style.border = '1px solid #ff5757'
                type[0].style.color = '#ff5757'
                result[0].innerHTML = '--'
                result[1].innerHTML = '--'
                result[2].innerHTML = '--'
             }else{
                erro[0].style.display = 'none'
                campo[0].style.border = '1px solid 	#716f6f'
                type[0].style.color = '	#716f6f'


                /*Calculo dos dias */

                if((fields[0].value) == diaAtual){
                    daytotal = 0
                    result[2].innerHTML = daytotal
                }else{
                    //Ver como fazer esse calculo
                    if((fields[0].value) > diaAtual){
                         //Ajuste dos meses
                         mouthtotal = mouthtotal - 1 
                         result[1].innerHTML = mouthtotal
            
                         if((mesAtual == 1)||(mesAtual == 2)||(mesAtual == 4)||(mesAtual == 6)||(mesAtual == 8)||(mesAtual == 9)||(mesAtual == 11)){
                            //Se o dia do nascimento for maior que o dia atual e o mes anterior tem 31 dias 
                            daytotal = (31 - fields[0].value) + parseInt(diaAtual)
                            result[2].innerHTML = daytotal
                            result[1].innerHTML = mouthtotal
                            
                         }else{
                            if(mesAtual == 3){ //Se o dia do nascimento for maior que o dia atual for março
                                if((anoAtual) % 4 == 0){ //Verificando se ano é bissexto
                                    daytotal = (29 - fields[0].value ) + parseInt(diaAtual)
                                    result[1].innerHTML = daytotal
                                    result[1].innerHTML = mouthtotal
                                }else{ //se n for ano bissexto contar apenas os 28 dias de fevereiro
                                    daytotal = (28 - fields[0].value ) + parseInt(diaAtual)
                                    result[1].innerHTML = daytotal
                                    result[1].innerHTML = mouthtotal
                                }
                            }else{
                                daytotal = (30 - fields[0].value) + parseInt(diaAtual) 
                                result[1].innerHTML = daytotal
                                result[1].innerHTML = mouthtotal
                                
                                
                            }
                         }
            
                    }else{
                        if((fields[0].value) < diaAtual){
                            daytotal = diaAtual - fields[0].value
                            result[2].innerHTML = daytotal
                        }
                    }
                }




             }
         }
    }
    
    


    
    /*Aqui pro calculo de meses */


    

    if(((fields[1].value))==''){
        span[1].style.display = 'block'
        erro[1].style.display = 'none'
        campo[1].style.border = '1px solid #ff5757'
        type[1].style.color = '#ff5757'
    }else{
        span[1].style.display = 'none'
        campo[1].style.border = '1px solid 	#716f6f'
        type[1].style.color = '	#716f6f'

        if(((fields[1].value) < 1)||((fields[1].value) > 12)){
            erro[1].style.display = 'block'
            campo[1].style.border = '1px solid #ff5757'
            type[1].style.color = '#ff5757'
        }else{
            erro[1].style.display = 'none'
            campo[1].style.border = '1px solid 	#716f6f'
            type[1].style.color = '	#716f6f'


            if((fields[1].value)>mesAtual){
        
                //Ajuste dos anos
                yeartotal = yeartotal - 1
                result[0].innerHTML = yeartotal
        
        
                //Calculo dos meses
                mouthtotal = ( parseInt(mesAtual) + parseInt(12) ) - fields[1].value
                result[1].innerHTML = mouthtotal   
                
                if((fields[0].value)>diaAtual){
                    mouthtotal = mouthtotal - 1
                    result[1].innerHTML = mouthtotal
                    
                }
                
            }else{
                if((fields[1].value)==mesAtual){
                    if((fields[0].value)>diaAtual){
                        yeartotal = yeartotal - 1
                        mouthtotal = 11
                        result[0].innerHTML = yeartotal
                        result[1].innerHTML = mouthtotal            
                    }else{
                        mouthtotal = 0
                        result[1].innerHTML = mouthtotal 
                    }
                     
                }else{//Aqui o mês de nascimento é menor que o mês atual
                    
                    //Calculo dos meses
                    mouthtotal = mesAtual - fields[1].value
                    result[1].innerHTML = mouthtotal
                    
                }
            }

        }
        
    }


}