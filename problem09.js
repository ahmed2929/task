function sum(node) {
    if (!node) {
        return 0;
    }
    
    let total = node.value;
    
    for (let child of node.children) {
        total += sum(child);
    }
    
    return total;
}
const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 3,
                    children: []
                },
                {
                    value: 4,
                    children: []
                }
            ]
        },
        {
            value: 5,
            children: []
        }
    ]
};
console.log(sum(tree)); 