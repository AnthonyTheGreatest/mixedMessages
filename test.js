const test = {
    a: [1, 2, 3],
    b: [4, 5, 6]
};

let collector = [];

for (let prop in test) {
   switch (prop) {
       case 'a':
           collector.push(`it's ${test.prop[0]}`);
           break;
       case 'b':
           collector.push(`it's ${test.prop[0]}`);
           break;
       default:
           console.log('Errorsssss')
   };
};

console.log(collector);
