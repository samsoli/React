export default function prim(){
    let primeNum=[2];
    
    for (let i=3;i<=100 ;i++){
      let notPrime=[];
      for (let j=2;j<i;j++){
        if (i%j===0){
          notPrime.push(i);
        }
        if (notPrime.length===0){
          primeNum.push(i);
        }
      }
    }
    return (
        console.log(notPrime)
    )
    

  }
  