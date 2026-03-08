const showAll = () => {
  displayShow(allIssues);
  
};

const showOpen = () => {
  const openIssues = allIssues.filter(
    (issue) => issue.priority === "high" || issue.priority === "medium"
  );

  displayShow(openIssues);
};


const showClosed = ()=>{
  const clodesIssues = allIssues.filter(issue => issue.priority === 'low');
  displayShow(clodesIssues)
}