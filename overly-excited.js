// Overly Excited Challanged

// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// const addExcitement = theWordArray => {
//     let buildUp = "";
//     for (let i = 0; i < theWordArray.length; i++) {
//         buildUp += `${theWordArray[i]} `;
//         console.log(buildUp);
//     }
// }

// addExcitement(sentence);

// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// const addExcitement = theWordArray => {
//     let buildUp = "";
//     let bang = "!";
//     for (let i = 0; i < theWordArray.length; i++) {
//         if ((i + 1) % 3 === 0) {
//             console.log(buildUp += `${theWordArray[i]} ${bang} `);
//             bang += "!";
            
//         } else {
//             console.log(buildUp += `${theWordArray[i]} `);
//         }
//     }
// }

// addExcitement(sentence);

// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// const addExcitement = (theWordArray, symbol) => {
//     let buildUp = "";
//     let insertSymbol = symbol;
//     for (let i = 0; i < theWordArray.length; i++) {
//         if ((i + 1) % 3 === 0) {
//             console.log(buildUp += `${theWordArray[i]} ${insertSymbol} `);
//             insertSymbol += symbol;  
//         } else {
//             console.log(buildUp += `${theWordArray[i]} `);
//         }
//     }
// }

// addExcitement(sentence, "?");

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let sentence2 = ["The", "person", "is", "cool"];

const addExcitement = (theWordArray, symbol) => {
    let buildUp = "";
    let insertSymbol = symbol;
    for (let i = 0; i < theWordArray.length; i++) {
        if ((i + 1) % 3 === 0) {
            console.log(buildUp += `${theWordArray[i]} ${insertSymbol} `);
            insertSymbol += symbol;  
        } else {
            console.log(buildUp += `${theWordArray[i]} `);
        }
    }
}

addExcitement(sentence, "?");
addExcitement(sentence2, "$");








