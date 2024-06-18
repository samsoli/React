export default function IsPrim(){
    let arr=[2];
    
    for (let i=3;i<=100 ;i++){
        if(i%2 !==0 && i% Math.sqrt(i) !==0){
            for(j=0 ; j<=arr.length-1 ; j++){
                if(i%arr[j] !==0){
                    arr.push(i)
                }
                break
            }
        }
    
    }
    console.log(arr)
}

