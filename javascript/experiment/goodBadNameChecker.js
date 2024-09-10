function nameChecker(name) {
    const character = ['b','s','m','a','h'];
    let result = false;
    for (const char of character){
        if (name[name.length -1] === char) {
            result = true;
            break;

            
        }
        // console.log(char);
        

    }
    // console.log(name);
    if (result === true ) {
        console.log("good name");
        
    }else{
        console.log("bad name");
    }
    
    
}
console.log(nameChecker("sadia"));