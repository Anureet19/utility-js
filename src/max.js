function max(array,size) {

    if(size==1){
        return array[0];
    }
    
    if(array[size-1] > max(array,size-1)){
        return array[size-1]
    }else{
        return max(array,size-1)
    }
    
}
module.exports = max
console.log(max([1,2,3],3))