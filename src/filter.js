function filter(array, callback){
    const resultArray = [];      
   
    for(let i=0;i<array.length;i++) {
        const result = callback(array[i], i);        
      
        if(result)             
            resultArray.push(array[i]);     
    }    
    return resultArray;
}

module.exports = filter
