//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size:string="Large",text:string=" I lOVE Typescript "){
    console.log(`The shirt is "${size} and ${text}" printed on it.`)
};
make_shirt();
make_shirt("small");
make_shirt("medium","Typescript is awesome");
