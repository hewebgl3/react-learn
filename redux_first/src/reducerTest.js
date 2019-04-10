
const sum = [0,1,2,3].reduce(function(acc,val,currentIndex,
    array){
    console.log("acc:",acc," val:",val,
        " currentIndex:",currentIndex," array:",array)
    return acc+val;
},0)

console.log(sum)

export const aaa = "xxx"