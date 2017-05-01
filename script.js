var pics = [
    'pics/geekwise.png',
    'pics/yosemite.png',
    'pics/real-estate.png',
    'pics/blocjams.png',
    'pics/instaclone.png',
    'pics/colorgame.png',
];
var projects = document.getElementsByClassName('b');

for (var i = 0; i < projects.length; i++) {
    projects[i].style.backgroundImage = "url(" + pics[i] + ")";
}
