function removeElementFromArray(array, element) {
    const index = array.indexOf(element);
    
    if (index !== -1) {
        array.splice(index, 1);
    }

    return array;
}

const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;
const newArray = removeElementFromArray(array, elementToRemove);
console.log("Array after removing element:", newArray);
