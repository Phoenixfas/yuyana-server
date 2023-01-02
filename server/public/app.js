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
      first_name: "Abraham",
      last_name: "Woodhul",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      text.innerHTML = data.data.checkout_url;
      url.href = data.data.checkout_url;
    })
    .catch((err) => console.log(err));
});

/*

/////////////////////////////////////////////////////////////////

// get elemants with id
const url = document.getElementById("url");
const text = document.getElementById("text");
const btn = document.getElementById("btn");

const tourData = {
  name: "HISTORICAL TOURS (d)",
  image:
    "https://i2.wp.com/yuyana.com/wp-content/uploads/2014/10/hunde-gemechu-vSpuHmEGxcI-unsplash-1.jpg?fit=1920%2C1279&ssl=1",
  type: "local",
  title: "EXPLORE ETHIOPIA’S FASCINATING HISTORY IN-DEPTH",
  titleMotto: "EXPERIENCE 10 DAYS CAPTIVATING TRIP.",
  description:
    "This journey ensures that you touch all the major historical cities in the North, the majority of which are World Heritage Sites. Your exciting tour begins with a flight to Bahir Dar, where you learn about the fascinating medieval ages of Lake Tana monasteries before proceeding to the Blue Nile Falls and then to Gondar to visit the famous Royal Enclosures. You’ll also hike Simien Mountain and enjoy its breathtaking panoramic beauty before ending your journey at the Lalibela Rock Churches, one of Ethiopia’s most popular sites.",
  tour_program: [
    {
      day: "Day 1",
      activity: "WELCOME TO ADDIS ABABA",
      description:
        "As soon as you arrive at the airport, you will be transferred to your Hotel. Depending on your arrival time, you will be able to take advantage of our free-guided city tour!",
    },
    {
      day: "Day 2-3",
      activity: "VISIT BAHIR DAR & GONDAR",
      description:
        "You’ll have a boat excursion to see the many island monasteries on Lake Tana and visit Blue Nile Falls, Africa’s most spectacular waterfall. You will also explore the magnificent city of Gondar, known for its many medieval castles and distinctive church decorations, particularly DebreBirhan Selassie. You will also visit the stunning Castle of Fasildas, which is also a well-known heritage site.",
    },
    {
      day: "Day 4-7",
      activity: "TREK SIMIEN MOUNTAIN",
      description:
        "Simien Mountain is a unique destination where you may connect with nature. The park has been designated by UNESCO as one of Africa’s most spectacular mountains. And the trek takes you through some of the most beautiful landscapes. While walking up the gorgeous scenery, you will be able to see Jinbar falls, Walia Ibex, and Gelada baboons. Even if the trek lasts four days, you’ll have a fantastic time since the fresh air you get while hiking enables you to relax and enjoy yourself.",
    },
    {
      day: "Day 8-9",
      activity: "VISIT LALIBELA",
      description:
        "Lalibela is a UNESCO World Heritage Site steeped in mystery and history. The magnificent stone frozen Rock Hewan Churches will leave you astonished and intrigued. You couldn’t help but wonder how the churches were created in such unique and exquisite design during such a backward age of time.",
    },
    {
      day: "Day 10",
      activity: "FLY BACK TO ADDIS",
      description:
        "Early in the morning, you will be transferred to the airport, but on the way, you’ll stop to see Ne’akuto Le’ab church, which is nestled in a cave beneath a massive rock ledge. The location alone would make it a memorable experience.",
    },
  ],
  no_of_days: 10,
  included: [
    "4WD Vehicle with an expert driver",
    "Entrance fees",
    "Accomodation",
    "Domestic flight tickets",
    "Professional English speaking guide",
    "Camping & cooking equipment",
    "Local guide services",
    "Bed & breakfast",
    "Lunch & Dinner for Simien Mountain trekking",
    "All in and out transfer services",
  ],
  not_included: [" Lunch & dinner (Except Simien Mountain trekking)", "Tips"],
  price: 2500,
  keywords: [
    "hiking",
    "nature",
    "wildlife",
    "local",
    "semien",
    "mountains",
    "gondar",
    "ethiopia",
    "semen",
    "simien",
    "lalibela",
    "bahirdar",
    "north",
    "history",
    "historical",
    "culture",
  ],
};

const packageData = {
  name: "NORTHERN ETHIOPIA",
  description: "Test package description",
  type: "local",
  tour_ids: ["63b333aa43d6dd7e4786015c", "63b33baed41421ab9c9c91a4"],
  total_no_of_days: 15,
  price: 3000,
  keywords: [
    "hiking",
    "nature",
    "wildlife",
    "local",
    "semien",
    "mountains",
    "gondar",
    "ethiopia",
    "semen",
    "simien",
    "north",
    "culture",
    "history",
    "historical",
  ],
};

// add event listener to the button
btn.addEventListener("click", () => {
  // fetch the /payment/init route with post method
  fetch("/tours/63b340d40f6e3e5dd4368140", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(tourData),
  })
    .then((res) => res.json())
    .then((data) => {
      text.innerHTML = data;
      console.log(data);
    })
    .catch((err) => console.log(err));
});


/////////////////////////////////////////////////////////////////

*/
