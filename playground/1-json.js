const fs=require('fs')

const book ={
        title :' Vikings ',
        authorL:'ragnor lothbrok'
}

const bookJson=JSON.stringify(book)

//writing the data to file
//fs.writeFileSync('1-json.json',bookJson)

// console.log(bookJson)

//reading the data to file
const readFile=fs.readFileSync('1-json.json')
console.log(readFile.toString())

// //parsing the string
// const parsedData=JSON.parse(bookJson)
// console.log(parsedData.title)