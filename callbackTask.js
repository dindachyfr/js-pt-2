const searchingNames = (value, limit, cbFunc) =>{
    let newArray = [];
    const names = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

    const namesLowerCase = names.map(name => name.toLowerCase())
    
        for (let i in names){
            if(namesLowerCase[i].includes(value)){
                newArray.push(namesLowerCase[i])
            }
        }
    return cbFunc(newArray.slice(0, limit))     
}

const limitSetting = (result) =>{
    return result
}


console.log(searchingNames('an', 3, limitSetting))