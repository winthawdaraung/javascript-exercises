const removeFromArray = function(list, ...args) {
    for (let arg of args){
        do {
            let index = list.indexOf(arg);
            if (index > -1){
                list.splice(index, 1);
            }
        }
        while(list.indexOf(arg) >= 0);
        
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
