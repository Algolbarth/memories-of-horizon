export function copy(array: any[]) {
    let tab = [];
    for (const element of array) {
        tab.push(element);
    }
    return tab;
};