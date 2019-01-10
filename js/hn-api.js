let output = "";
const template = document.querySelector("#app");

fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
  .then(res => res.json())
  .then(data => {
    let results = data.slice(0, 10);
    results
      .sort((a, b) => a - b)
      .forEach((element, index) => {
        fetch(
          `https://hacker-news.firebaseio.com/v0/item/${element}.json?print=pretty`
        )
          .then(res => res.json())
          .then(data => {
            output += `
            <ul class="card">
              <li><strong>${index}</strong>. ${data.title}</li>
              <li>
              <small class="text-gray">
              ${data.score} points by <em>${data.by}</em> &mdash; ${new Date(
              data.time
            ).getMinutes()} minutes ago | ${data.descendants} comments
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
