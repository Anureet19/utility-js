function map(array,callback){
    const resultArray = [];
    array.forEach(element => {
        resultArray.push(callback(element));
    });

    return resultArray;
}

module.exports = map
