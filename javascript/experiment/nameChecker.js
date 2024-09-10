let babyName = 10;


function nameChecker(name){
    // let lastCharacter =["y","s","m"];
    // console.log(name);
    if(typeof name === "string"){
        // console.log(name[name.length -1]);
        // console.log("good");
         if (name[name.length - 1 ] == "s" ||name[name.length - 1 ] == "m"  ||name[name.length - 1 ] == "y" ) {
            console.log("good Name");
            
        }else{
            console.log("bad Name");
        }
        
        
        // for(const character of lastCharacter){
        //     // console.log(character);
        //     // console.log(name[name.length-1]);
        //     if (name[name.length -1] === character) {
        //         console.log("good");
                
                
        //     }
        //     else{
        //         console.log("bad");
        //     }
        // }
    }
    
    else{
        console.log("Not Name");
    }
    
  

}
nameChecker(babyName);