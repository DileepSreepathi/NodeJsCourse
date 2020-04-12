//const valid=require('validator')
const usechalk = require('chalk')
const arg=require('yargs')

const notes = require('./notes.js')
//const msg = getNotes()
//console.log(msg)
//console.log(usechalk.red('in green color added'))
//console.log(valid.isEmail('sfdf@gmail.com.com'))

//var t1=process.argv[2]

// if(t1=="Y")
// {
//     console.log("user input is Y")
// }
// else
// {
//     console.log("user input N")
// }

//using the args for string parsing 
arg.command(
    {
        command:'add',
        describe:'add a command',
        builder:{
            title:{
                describe:'Note title',
                demandOption:true,
                type:'string'
                
            },
            body:{
                describe:'Notes Body',
                demandOption:true,
                type:'string'
            }
        },
        handler(argv){
            notes.addNotes(argv.title,argv.body)
        }
    }
)

arg.command({
    command:'remove',
    describe:'remoev command',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:String
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
        //console.log(argv.title)
    }
})

arg.command({
    command:'list',
    describe:'Notes List',
    handler(){
        notes.listNOtes()
        //console.log(argv.title)
    }
})

//read notes
arg.command({
    command:'read',
    describe:'Notes reading',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:String
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
        //console.log(argv.title)
    }
})
arg.parse()
//console.log(arg.argv)