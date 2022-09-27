function append (array, value) {
    let tempArray = new Array(array.length+1);
    
    for (let i = 0; i < array.length; i++) {
        tempArray[i] = array[i];
    }
    tempArray[array.length] = value;
    return tempArray;
}

let scores = [90, 70, 50, 80, 60, 85];

scores = append(scores, 75);

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}