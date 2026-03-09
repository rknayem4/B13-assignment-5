let allIssues = [];

const problemStatus = (arr) => {
  const element = arr.map(
    (
      el,
    ) => ` <p class="py-1 px-3 font-semibold bg-[#ef444430] text-[#ef4444] rounded-2xl ">${el.toUpperCase()}</p> `,
  );
  return element.join(" ");
};
const loadData = () => {
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((res) => res.json())
    .then((output) => {
      allIssues = output.data;
      displayShow(allIssues);
      console.log(allIssues);
    });
};
const displayShow = (id) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = " "
  for (data of id) {
    let borderColor = "";
    let statusColor = "";

    // status Color dynamic
    if (data.priority === "high") {
      statusColor = "bg-[#ef444430] text-[#ef4444]";
    } else if (data.priority === "medium") {
      statusColor = "bg-[#FFF8DB] text-[#D97706]";
    } else {
      statusColor = "bg-gray-200 text-gray-500";
    }
    // border color dynamic
    if (data.priority === "low") {
      borderColor = "border-[#A855F7]";
    } else {
      borderColor = "border-green-500";
    }
    const div = document.createElement("div");

    div.innerHTML = `
    <div onclick="my_modal_5.showModal()" id="card" class=" m-4 p-5 shadow border-t-4 space-y-4 ${borderColor} h-full rounded-xl">
        <div class="flex justify-between items-center">
          <img src="./assets/Open-Status.png" alt="">
          <p class="py-1 px-7 font-semibold ${statusColor} rounded-2xl">${data.priority.toUpperCase()}</p>
        </div>
        <h2 class="font-bold text-xl">${data.title}</h2>
        <p class="text-gray-500">${data.description}</p>
        <div class="flex space-x-3">
          <p>${problemStatus(data.labels)}</p>
        
        </div>
        <hr class="text-gray-300 my-4">
        <div class="">
          <p class="text-gray-500">${data.author}</p>
          <p class="text-gray-500">${data.createdAt}</p>
        </div>
      </div>
    `;
    // console.log(data);
    cardContainer.append(div);
  }

  const counter = document.getElementById("counter");
  const countProblem = id.length;
  counter.innerText = countProblem;
};
loadData();


