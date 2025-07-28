export function several(value: number, name: string) {
    let text = "";
    text += value + " " + name;
    if (value > 1) {
        text += "s";
    }
    return text;
};