var gId = 0
var gProjects = [
  {
    id: gId++,
    name: "Book Library Project",
    title: "My Book Library Project",
    desc: "The life of bookworms got a hell of alot easier with this app!",
    detailedDesc:"A simple library project, written in my favorite language js(vanilla ofcourse), has the options to modify your own library, keep preferences of the user for the sake of making the UX more appealing and easier for the user.",
    url: "Projects/bookProj",
    img:'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg',
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
    catagory:'Orginazation App' 
  },
  {
    id: gId++,
    name: "Login Page Project",
    title: "My Login Page Project",
    desc: "User interface example for a login page",
    detailedDesc:"Just a simple login page example made completely with vanilla js and some css neat trickings,Users with special Administrator Capabilities and differnet Interfaces to make the UX and UI more welcoming. Really simple but a very fun project i was glad to do!",
    url: "Projects/LoginPage",
    img:'https://cms-assets.tutsplus.com/uploads/users/343/posts/23627/preview_image/tutsplus-icon.png',
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
    catagory:'Security and Administrations'
  },
  {
    id: gId++,
    name: "Minesweeper Project",
    title: "My Minesweeper Project",
    desc: "A uniquely beautiful version of the logical and mathatical game Minesweeper!",
    detailedDesc:"My Css heavy own made Minesweeper project sponsored by coding academy's help, has alot of built in features which are wrapped by amazing css properties and some behind the scenes saving on the users browser- such as best score ETC...",
    url: "Projects/Minesweeper",
    img:'https://cdn.dribbble.com/users/2736595/screenshots/5949192/media/08e15f7471a24197e682f655a15ddd4f.jpg?compress=1&resize=400x300',
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
    catagory:'Online Game'
  },
  {
    id: gId++,
    name: "Pacman Project",
    title: "My Pacman Project",
    desc: "Our all-time favorite childhood game that EVERYONE knows!",
    detailedDesc:"A simple project including the all time favorite game Pacman! one of my first projects ",
    url: "Projects/Pacman",
    img:"https://ssb.wiki.gallery/images/9/9b/Pac-Man_%28PMVS%29.png",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
    catagory:'Online Game'
  },
  {
    id: gId++,
    name: "Touchnums Project",
    title: "My Touchnums Project",
    desc: "A simple fun time and a challenge for your cognitive mind!",
    detailedDesc:"One of my very first projects made with Vanilla JS, had alot of fun making through the logic of it and it somehow was the start of my way towards going for a move advanced css stage. ",
    url: "Projects/TouchNums",
    img:"https://play-lh.googleusercontent.com/593HRhVO-tcesEIzKkeNw60apeVMgsX-W9Seu4zSuUHFLD21x1anRGL7GoA6SXE7sQ",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
    catagory:'Online Game'
  },
  {
    id: gId++,
    name: "To-do List Project",
    title: "My To-do List Project",
    desc: "everyday actions and habits made easier!",
    detailedDesc:"A simple project meant for users who want to keep track of habits, studying, or maintaining a specific lifestyle. supports alot of features meant to keep the user's interaction and involvement with the app as simple as possible.",
    url: "Projects/TodoList",
    img:"https://media.wired.com/photos/5a0a38c1d07f6824ff44221b/master/w_2560%2Cc_limit/twitterlists-TA.jpg",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
    catagory:'Orginazation App'
  },
]

function getProjects(){
  return gProjects
}