/**
Runtime Complexity
-----------------
Best Case: (O(1)) - If the first element is a duplicate.
Average and Worst Case: (O(n)) - Where (n) is the length of the array.
This is because in the worst case, the function will iterate through the entire array once.
 
Space Complexity
-----------------
Space Complexity: (O(n)) - In the worst case, all elements are unique,
and the Set will store all (n) elements.

*/

function index_of_first_duplicate(arr) {
    const seen = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            return i;
        }
        seen.add(arr[i]);
    }
    
    return -1;
}

console.log(index_of_first_duplicate([5, 17, 3, 17, 4, -1])); 