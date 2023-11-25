const ArrayContainer=[
    {
        cource:"Python",
        price:2000,
        date:2023,
    },
    {
        cource:"JavaScript",
        price:1000,
        date:2023,
    },
    {
        cource:"ReactJs",
        price:1000,
        date:2020,
    },
    {
        cource:"PHP",
        price:1000,
        date:2020,
    },
    {
        cource:"NextJs",
        price:2000,
        date:2021,
    },
    {
        cource:"ExpressJs",
        price:2000,
        date:2021,
    },

]
const condition=ArrayContainer.filter((AllElmofArray)=>{
       return AllElmofArray.price ==1000;

})
console.log(condition)

const condition2=ArrayContainer.filter((AllElmofArray)=>{
return AllElmofArray.price ==1000 && AllElmofArray.date ==2023;
})

console.log(condition2);

const condition3=ArrayContainer.filter((AllElmofArray)=>{
    return AllElmofArray.price == 2000;
})
console.log(condition3)

const condition4=ArrayContainer.filter((AllElmofArray)=>{
    return AllElmofArray.date == 2000;
})
console.log(condition4)

const condition5=ArrayContainer.filter((AllElmofArray)=>{
    return AllElmofArray.cource == "JavaScript";
})
console.log(condition5)

const condition6=ArrayContainer.filter((AllElmofArray)=>{
    return AllElmofArray.cource == "ReactJs";
})
console.log(condition6)

const condition7=ArrayContainer.filter((AllElmofArray)=>{
    return AllElmofArray.cource == "ReactJ" || AllElmofArray.cource=="PHP";
})
console.log(condition7)
