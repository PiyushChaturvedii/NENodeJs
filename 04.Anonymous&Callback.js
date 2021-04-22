// function sum(a,b) {
//     return a+b
// }

// console.log(sum(10,20))

function otherfun(add)
{
    console.warn(add(200,300))
}

otherfun(function (a, b) 
{
    return a + b;
})