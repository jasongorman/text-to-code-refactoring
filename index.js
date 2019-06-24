const VideoLibrary = require('./videolibrary.js');
const alert = require('./alerts');
const copyable = require('./video.js');
const award = require('./member.js');

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

const donate = VideoLibrary(catalogue, members, copyable, award, alert);

donate(video, member);

console.log(video);
console.log(member);
console.log(catalogue);
console.log(members);
