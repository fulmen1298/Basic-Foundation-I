function countTo(num){
    for(var i = 1; i<num+1; i++){
        console.log(i);
    }
}

function sumEvenNum(num){
    var sum=0;
    for(var i=0; i<num+1; i++){
        if(i % 2 == 0){
            sum+=i;
        }
    }
    console.log(sum);
    return sum;
}

function sumOddNum(num){
    var sum=0;
    for(var i=0; i<num+1; i++){
        if(i % 2 != 0){
            sum+=i;
        }
    }
    console.log(sum);
    return sum;
}

function sumArray(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    console.log(sum);
    return sum;
}

function findMax(arr){
    var max=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}

function findAvg(arr){
    var sum=0;
    var avg=0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    avg = (sum / arr.length);
    console.log(avg);
}

function oddArray(num){
    var arr=[];
    for(var i=1; i<num+1; i++){
        if(i % 2 != 0){
            arr.push(i);
        }
    }
    console.log(arr);
}

function greaterThan(arr, num){
    var count=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > num){
            count++;
        }
    }
    console.log(count);
}

function squareArr(arr){
    var newArr=[];
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i]*arr[i]);
    }
    console.log(newArr);
}

function replaceNeg(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    console.log(arr);
}

function maxMinAvg(arr){
    var newArr=[];
    var sum=0;
    var max=0;
    var min=100000;
    var avg=0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
        avg=sum/arr.length;
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
    }
    newArr.push(max);
    newArr.push(min);
    newArr.push(avg);
    console.log(newArr);
}

function swapFirstLast(arr){
    var arrNew=arr.slice();
    var temp=arrNew[0];
    arrNew[0]=arrNew[arrNew.length-1];
    arrNew[arrNew.length-1]=temp;
    console.log(arrNew);
}

function numToString(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]="Dojo"
        }
    }
    console.log(arr);
}


