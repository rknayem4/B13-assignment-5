const showAll = () => {
  displayShow(allIssues);
  setActiveButton('all-btn')
};

const showOpen = () => {
  const openIssues = allIssues.filter(
    (issue) => issue.priority === "high" || issue.priority === "medium"
  );

  displayShow(openIssues);
  setActiveButton('open-btn')
};


const showClosed = ()=>{
  const closedIssues = allIssues.filter(issue => issue.priority === 'low');
  displayShow(closedIssues)
  setActiveButton("closed-btn")
}


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