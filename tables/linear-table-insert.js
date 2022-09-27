function insert (array, score, insertIndex) {
    let tempArray = new Array(array.length + 1);

    for (let i = 0; i < array.length; i++) {
        if (i < insertIndex) {
            tempArray[i] = array[i];
        } else {
            tempArray[i + 1] = array[i];
        }
    }
    tempArray[insertIndex] = score;
    return tempArray;
}

let scores = [90, 70, 50, 80, 60, 85];

scores = insert(scores, 75, 2);

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}