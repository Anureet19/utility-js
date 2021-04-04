function min(array,size) {

    if(size==1){
        return array[0];
    }
    if(size==0){
        return undefined
    }
    
    if(array[size-1] < min(array,size-1)){
        return array[size-1]
    }else{
        return min(array,size-1)
    }
    
}
module.exports = min
