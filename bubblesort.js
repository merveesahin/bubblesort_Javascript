var array = [7, 10, 12, 9, 1, 5];
bubblesort(array);

function bubblesort(array){
    for (i=0; i<= array.length; i++){
        for (j=0; j<=array.length-i-1; j++){
            if (array[j]>array[j+1])
            {
                var t=array[j]
                array[j]=array[j+1]
                array[j+1]=t
            }
        }
    }
    console.log(array);
}
