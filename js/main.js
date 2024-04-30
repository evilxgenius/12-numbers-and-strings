const userStrings = (length = 3) => {
    // ... - спред оператор допоможе створити "пустий" (заповнений undefined) масив, що ітерується
    return [...Array(length)].map((_i, index) => prompt(`#${index + 1} string:`));
};

const userNumbers = (length = 5) => {
    let input;

    do {
        input = prompt(`${length}-digit(s) number`);

        if (input === null) return;
    } while (isNaN(input) || input.length !== length)

    return input;
};

document.querySelector('.strings').addEventListener('click', () => {
    const output = userStrings().sort(() => Math.random() - 0.5).join('');

    alert(output);
});

document.querySelector('.numbers').addEventListener('click', () => {
    const numbers = userNumbers();
    const output = numbers ? numbers.split('').join(' ') : 'Ok, bye!'

    alert(output);
});
