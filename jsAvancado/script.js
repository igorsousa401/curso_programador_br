
let nome = ""
if(nome == "") {
    throw "O campo não pode ser vazio"
}
try{
    
    console.log(nome)
} catch(err){
    

    console.log('Houve um erro', err)
} finally{
    console.log("Boa Noite!")
}
