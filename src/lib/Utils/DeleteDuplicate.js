export function deleteDuplicate(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                array.splice(j);
                j--;
            }
        }
    }
    return array;
};