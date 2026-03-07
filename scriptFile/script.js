const loadData = () => {
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((res) => res.json())
    .then((output) => {
      displayShow(output.data)
    });
};
const displayShow = (id)=>{
  const cardContainer = document.getElementById('card-container')
  for (data of id){
    const div = document.createElement('div')
    // if (data.status = "open"){
    //   document.getElementById('card').className = ' border-[#00A96E]'
    // }
    // else{
    //   document.getElementById('card').className = ' border-[#A855F7]'
    // }
    div.innerHTML =`
    <div id="card" class=" m-4 p-5 shadow border-t-4 space-y-4 border-[#00A96E] h-full rounded-xl">
        <div class="flex justify-between items-center">
          <img src="./assets/Open-Status.png" alt="">
          <p class="py-1 px-7 font-semibold bg-[#ef444430] text-[#ef4444] rounded-2xl">${data.priority}</p>
        </div>
        <h2 class="font-bold text-xl">${data.title}</h2>
        <p class="text-gray-500">${data.description}</p>
        <div class="flex space-x-3">
          <p class="py-1 px-3 font-semibold bg-[#ef444430] text-[#ef4444] rounded-2xl border border-[#ef4444]"><i
              class="fa-solid fa-bugs"></i>${data.labels[0].toUpperCase()}</p>
          <p class="py-1 px-7 font-semibold bg-[#FFF8DB] text-[#D97706] rounded-2xl border border-[#FDE68A]"><i
              class="fa-regular fa-life-ring"></i>${data.status}</p>
        </div>
        <hr class="text-gray-300 my-4">
        <div class="">
          <p class="text-gray-500">${data.author}</p>
          <p class="text-gray-500">${data.createdAt}</p>
        </div>
      </div>
    `
    console.log(data);
    cardContainer.append(div)
  }

}
loadData();
// {id: 47, title: 'Add code syntax highlighting', description: 'Implement syntax highlighting for code blocks in comments and descriptions.', status: 'open', labels: Array(2), …}
// assignee
// : 
// ""
// author
// : 
// "syntax_simon"
// createdAt
// : 
// "2024-01-25T11:00:00Z"
// description
// : 
// "Implement syntax highlighting for code blocks in comments and descriptions."
// id
// : 
// 47
// labels
// : 


// (2) ['enhancement', 'good first issue']
// priority
// : 
// "low"
// status
// : 
// "open"
// title
// : 
// "Add code syntax highlighting"
// updatedAt
// : 
// "2024-01-25T11:00:00Z"
// [[Prot