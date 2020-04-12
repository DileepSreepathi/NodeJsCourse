// const square=function(x){
//     return x*x
// }

//standard arrow function
const square= (x) => {
    return x*x
}


//short code arrow function

const shortFunc=(x)=>x*x

console.log(square(4))
console.log(shortFunc(4))

const event={
    name: "birthday party",
    guestList: ['dileep','kumar'],
    guest(){
        console.log("welcome" +this.name)
        this.guestList.forEach(function(g){
            console.log(g)
        })
    }
}
event.guest()