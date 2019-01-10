let data = "";
let lists = [];

fetch("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
