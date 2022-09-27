function remove (array, index) {
    let tempArray = new Array(array.length - 1);

    for (let i = 0; i < array.length; i++) {
        if (i < index) {
            tempArray[i] = array[i];
        }
        if (i > index) {
            tempArray[i - 1] = array[i];
        }
    }
    return tempArray;
}

let scores = [90, 70, 50, 80, 60, 85];

scores = remove(scores, 0);

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}