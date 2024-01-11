
calculator =function opration(){
    let opt=prompt("enter a operation")
    let num1=prompt("Enter list of number that you want to calculate them:")
    let num = num1.split("-");
     let temp = 0;
     switch(opt) {
         case "+":
             for(let i=0 ; i <num.length ; i++){
                x=parseInt(num[i])
                 temp += x;
             }
             return document.getElementById("line").innerHTML = "you choose: "+opt+"you enter these list of numbers: "+num+"result is: " + temp ;
         case "-":
            m=num[0]
            for(let i=1 ; i <num.length ; i++){
                
                x=parseInt(num[i])
                m -= x;
            }
            return document.getElementById("line").innerHTML = "you choose: "+opt+"you enter these list of numbers: "+num+"result is: " + m;
         case "*":
            let t=1;
              for(let i=0 ; i <num.length ; i++){
                  x=parseInt(num[i]);
                  t *= x;
              }
              return document.getElementById("line").innerHTML = "you choose: "+opt+"you enter these list of numbers: "+num+"result is: " + t;
         case "/":
            u=num[0];
                  for(let i=1 ; i <num.length ; i++){
                    x=parseInt(num[i])
                   u /=x;
                  }
                 return document.getElementById("line").innerHTML = "you choose: "+opt+"you enter these list of numbers: "+num+"result is: " + u;
          
         default:
       }

    }