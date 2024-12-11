function SumOddNOs(){
    var sum = 0;    
    let num = prompt("enter the value of num");    
    for(i=1;i<=num;i++){        
        if(i % 2 !==0){
            sum = sum+i;
        }      
    }
    return sum;
    
}