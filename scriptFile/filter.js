const modalStatus = (arr) => {
  const element = arr.map(
    (
      el,
    ) => ` <p class="py-1 px-1 font-semibold bg-[#ef444430] border border-[#ef444430] text-[#ef4444] rounded ">${el.toUpperCase()}</p> `,
  );
  return element.join(" ");
};
const loadModel = async (id) => {
  managespinner(true)
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  // console.log(url);
  const res = await fetch(url);
  const details = await res.json();
  displayDetails(details.data);
};
const displayDetails = (id) => {
  let bgColor = ""
  if(id.status == "open"){
    bgColor = "bg-[#00A96E]"
  }
  else{
    bgColor = "bg-[#A855F7]"
  }
  const modelBox = document.getElementById("modelBox");
  modelBox.innerHTML =  ` 
  <h2 class="font-bold text-xl">${id.title}</h2>
        <p><span class="${bgColor} text-white py-1 px-3 rounded-full">${id.status.toUpperCase()}</span> * Opened by ${id.author} * ${id.createdAt}</p>
        <div class="flex gap-3 ">${modalStatus(id.labels)}</div>
        <p>${id.description}</p>
        <div class="bg-gray-50 p-3 flex justify-around rounded-lg">
          <div class="space-y-1.5">
            <p>Assignee:</p>
            <p class="font-semibold ">${id.assignee}</p>
          </div>
          <div class="space-y-1.5">
            <p>Priority:</p>
            <p class="bg-red-800 text-white text-sm rounded-full py-1 px-2   ">${id.priority.toUpperCase()}</p>
          </div>
        </div>
  `
  document.getElementById("showModal").showModal()
  managespinner(false)
  console.log(id);
};


const showAll = () => {
  displayShow(allIssues);
  setActiveButton("all-btn");
};

const showOpen = () => {
  const openIssues = allIssues.filter(
    (issue) => issue.priority === "high" || issue.priority === "medium",
  );

  displayShow(openIssues);
  setActiveButton("open-btn");
};

const showClosed = () => {
  const closedIssues = allIssues.filter((issue) => issue.priority === "low");
  displayShow(closedIssues);
  setActiveButton("closed-btn");
};

const setActiveButton = (activeId) => {
  const buttons = ["all-btn", "open-btn", "closed-btn"];

  buttons.forEach((id) => {
    const btn = document.getElementById(id);

    btn.classList.remove("btn-primary");
    btn.classList.add("btn-outline");
  });

  const activeBtn = document.getElementById(activeId);
  activeBtn.classList.remove("btn-outline");
  activeBtn.classList.add("btn-primary");
};
