const dayHours = [
    { day: "Monday", hours: "8am - 5pm" },
    { day: "Tuesday", hours: "8am - 5pm" },
    { day: "Wednesday", hours: "8am - 5pm" },
    { day: "Thursday", hours: "8am - 5pm" },
    { day: "Friday", hours: "8am - 5pm" },
    { day: "Saturday", hours: "10am - 5pm" },
    { day: "Sundat", hours: "10am - 4pm" }
  ];

export function showHomepage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.classList.add("home-container");

  const title = document.createElement("h2");
  title.classList.add("tab-title");
  title.innerText = "Welcome to my restaurant";

  const description = document.createElement("p");
  description.classList.add("tab-description");
  description.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros purus, interdum vitae rhoncus et, consectetur ac lectus. Sed tincidunt tortor suscipit mauris luctus tincidunt. Mauris malesuada turpis risus, non vestibulum enim consequat a. Integer sit amet porta felis, eu suscipit justo. Praesent mauris dui, vestibulum vitae erat non, luctus auctor sem. Fusce aliquam erat sed ligula viverra pharetra. Sed efficitur metus ut purus feugiat vestibulum. Nunc varius eget dui ut mollis. Aliquam dapibus ultricies turpis, id auctor augue mollis sed. Aenean nec eros nisl. Ut eget rhoncus quam, posuere rhoncus nisi. Sed erat felis, elementum et leo quis, tempus efficitur urna. Nunc non varius nisl, vitae imperdiet sapien. Morbi est lorem, accumsan at laoreet vel, sollicitudin eget neque. Donec a magna bibendum, imperdiet erat in, hendrerit lacus.";


  const hoursUl = document.createElement("ul");
  
  dayHours.forEach(day => {
    const hoursLi = document.createElement("li");
    hoursLi.innerText = day.day + " " + day.hours;
    hoursUl.appendChild(hoursLi);
  });

  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(hoursUl);
}
