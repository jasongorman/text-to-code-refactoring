const {VideoLibrary, add} = require('./videolibrary.js');

let catalogue = [];

let video = {
    copies: 0,
    title: 'The Abyss',
    year: 1989
};

let member = {
    priorityPoints: 0,
    email: 'joebloggs@fakemailserver.com' // use your own test email address
};

let members = [member];

const donate = VideoLibrary(catalogue, members);

donate(video, member);

console.log(video);
console.log(member);
console.log(catalogue);
console.log(members);
