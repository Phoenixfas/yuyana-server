// get elemants with id
const url = document.getElementById("url");
const text = document.getElementById("text");
const btn = document.getElementById("btn");

// add event listener to the button
btn.addEventListener("click", () => {
  // fetch the /payment/init route with post method
  fetch("/payment/init", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: 1000,
      email: "woodhulabe123@gmail.com",
      first_name: "first_name",
      last_name: "last_name",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      text.innerHTML = data.data.checkout_url;
      url.href = data.data.checkout_url;
    })
    .catch((err) => console.log(err));
});
