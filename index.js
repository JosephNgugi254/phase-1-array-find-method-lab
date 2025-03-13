// code your solution here


const record = [
    { year: "2015", result: "S"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
]


function superbowlWin(array) {
    let won = array.find(item => item.result === "W")
    return won ? won.year : undefined;
      
}

console.log(superbowlWin(record))
