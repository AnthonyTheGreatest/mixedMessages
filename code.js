console.log('Hello');

// Random meal generator with:
// -main item
// -drink
// -snack
// Outpu example: Your meal today will be: hamburger, Cola and a Snickers bar.

let messageElements = [];

const randomIndexGenerator = (num) => {
    return Math.floor(Math.random() * num)
};

const allItems = {
    main: ['hamburger', 'lasagna', 'fish and chips', 'spaghetti', 'pizza'],
    drink: ['Cola', 'Fanta', 'fizzy water', 'non-alcoholic beer'],
    snack: ['Snickers bar', 'slice of cheesecake', 'slice of chocolate cake']
};

for (let key in allItems) {
    if ('main') {
        messageElements.push(allItems.key[randomIndexGenerator(allItems.key.length)])
    } else if ('drink') {
        messageElements.push(allItems.key[randomIndexGenerator(allItems.key.length)])
    } else {
        messageElements.push(allItems.key[randomIndexGenerator(allItems.key.length)])
    };
};

const messageGenerator = (elements) => {
    let message = `Your meal today will be: ${elements[0]}, ${elements[1]} and a ${elements[2]}.`;
    return message;
};

messageGenerator(messageElements);




