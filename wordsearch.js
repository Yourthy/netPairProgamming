//Worked with Stewart McKinlay as a peer progamming activity

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const vertJoin = [];
    for(let rows = 0; rows < letters.length; rows++){
        let tempString = "";
        for(let columns = 0; columns <= letters[rows].length; columns++){
            tempString += letters[columns][rows];
        }
        vertJoin.push(tempString);
    }
    if(horizontalJoin.includes(word) || vertJoin.includes(word)){
        return true;
    } else {
        return false;
    }
}
module.exports = wordSearch;