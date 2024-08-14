function unique(arr) {
   const hashTale = {};
    for (const element of arr) {
        if (hashTale[element]) {
            hashTale[element] += 1;
        }else{
            hashTale[element] = 1;
        }
    }
    const uniqueElements = [];
    for (const key in hashTale) {
        if (hashTale[key] === 1) {
            uniqueElements.push(key);
        }   
    }
    return uniqueElements;
}
console.log(unique(['apples', 'apples']))