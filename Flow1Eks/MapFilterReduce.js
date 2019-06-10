//Map
var myArray = [1,2,3,4,5];
var mappedArray = myArray.map(element =>{
    return element+1;
});
console.log(mappedArray);

//Filter
var filteredArray = myArray.filter(element => {
    if(element <= 2){
        return element;
    }
})
console.log(filteredArray);

//Reduce with initial value
var reduce = myArray.reduce(function reducer(accumulator, curValue){
    return accumulator + curValue;
}, 10);
console.log(reduce);