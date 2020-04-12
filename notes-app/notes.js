const fs=require('fs')
const chalk =require('chalk')
const getNotes = function (){
    return 'your notes ...'
}

const addNotes =(title,body)=>{
    const notes =loadNotes()
    const duplicateNotes=notes.filter((note)=>note.title===title)
    const duplicateNote=notes.find((n)=>n.title===title)
    
  //  if(duplicateNotes.length===0)
  if(!duplicateNote)
    {
        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes)
    }
    else
    {
        console.log(chalk.red("duplicate title not allowed"))
    }
    
}

const saveNotes=(notes)=>{
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}



const loadNotes=()=>{
    try{
        const dataBUffer=fs.readFileSync('notes.json')
    const dataJson=dataBUffer.toString()
    return JSON.parse(dataJson)
    }
    catch(e)
    {
        return []
    }
    
}

//to remove the Note title
const removeNote=(title)=>{
    try{
        console.log(title)
        const getNotes=loadNotes()
        const removeFlag=getNotes.filter(function(noteTitle){
             return  noteTitle.title !==title
        })
        console.log(removeFlag)
        saveNotes(removeFlag)
    }
    catch(e)
    {
        console.log(e)
    }
}

//list notes function
const listNote=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse("Your Notes"))
    notes.forEach((n)=>{
        console.log(n.title)
    })
}

//reading the notes
const readNote=(title)=>{
  
        const loadNote=loadNotes()
        
        const findNote=loadNote.find((note)=>note.title === title)
        debugger
        if(findNote)
        {
            //const getNote=loadNote.filter((n)=>n.title===title)
            console.log(findNote.title)
            console.log(findNote.body)
        }
        else
        {
            console.log(chalk.inverse("Note not found"))
        }
  
}
module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes:removeNote,
    listNOtes:listNote,
    readNotes:readNote
}