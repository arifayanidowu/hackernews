let output = "";
const template = document.querySelector("#app");

fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
  .then(res => res.json())
  .then(data => {
    let results = data.slice(0, 10);
    results.forEach((element, index) => {
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${element}.json?print=pretty`
      )
        .then(res => res.json())
        .then(data => {
          output += `
            <ul class="card mt-1">
              <li><strong>${index}</strong>. ${data.title}</li>
              <li>
              <small>
              ${data.score} by <em>${data.by}</em> &mdash; ${new Date(
            data.time
          ).getHours()} hours ago | ${data.descendants} comments
          </small>
          </li>
            </ul>
          `;
          template.innerHTML = output;
        })
        .catch(err => console.log(err));
    });
  })
  .catch(err => console.log(err));
