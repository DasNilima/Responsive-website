// let userData = []
// const tableBody = document.querySelector('#table_body');
// const scoreHeader = document.querySelector('#score_column');
// let scoreAscending = false;
// const getUserRankingsAsync = async (url) => {
//   // this is aync await syntax for fetching data.
//   const response = await fetch(
//     url
//   );
//   const userData = await response.json();
//   return userData;
// }

// // it will be passed inside filter function which is a higher order function 
// // and its an callback function.
// const filterValues = item => item.score > 30;
// const sortUserScores = () => {
//   const tempData = [...userData];
//   tempData.sort((a, b) => scoreAscending ? a.score - b.score : b.score - a.score);
//   const filteredData = tempData.filter(filterValues);
//   const newData = tempData.map(item => ({name: item.name, score: item.score}))
//   scoreAscending=!scoreAscending;
//   while (tableBody.firstChild) {
//     tableBody.removeChild(tableBody.firstChild);
//   }
//   console.log(tempData, newData);
//   renderTableRows(filteredData);
// }

// // Adding event handlers to an element
// scoreHeader.addEventListener('click', sortUserScores)
// const page = 4;
// let currPage = 1;
// const renderTableRows = (data) => {
//   data.filter((row, i) => {
//     let start = (currPage-1)*page;
//     let end =currPage*page;
//     if(i >= start && i < end) return true;
//   }).forEach((user, i) => {
//     const tRow = document.createElement('tr');
//     const td1 = document.createElement('td');
//     const td2 = document.createElement('td');
//     const td3 = document.createElement('td');
//     const td4 = document.createElement('td');
//     td1.textContent = i + 1;
//     td1.classList.add('p-3',`${i%2===0 ? 'bg-veryPaleRed' : 'bg-veryLightGray'}`)
//     td2.textContent = user.name;
//     td2.classList.add('p-3', `${i % 2 === 0 ? 'bg-veryPaleRed' : 'bg-veryLightGray'}`);
//     td3.textContent = user.country;
//     td3.classList.add('p-3', `${i % 2 === 0 ? 'bg-veryPaleRed' : 'bg-veryLightGray'}`);
//     td4.textContent = user.score;
//     td4.classList.add('p-3', `${i % 2 === 0 ? 'bg-veryPaleRed' : 'bg-veryLightGray'}`);
//     tRow.appendChild(td1);
//     tRow.appendChild(td2);
//     tRow.appendChild(td3);
//     tRow.appendChild(td4);
//     tableBody.appendChild(tRow)
//   })
// }
// const main = async () => {
//   userData = await getUserRankingsAsync(
//     'https://64743e827de100807b1a84ab.mockapi.io/api/v1/leaderboard/users'
//   );
//   // fetchData(
//   //   'https://64743e827de100807b1a84ab.mockapi.io/api/v1/leaderboard/users'
//   // ).then(data => renderTableRows(data));
//   renderTableRows(userData)
  
// };
// main();

// let userData = []
// const tableBody = document.querySelector('#table_body');
// const scoreHeader = document.querySelector('#score_column');
// let scoreAscending = false;


// const getUserRankingsAsync = async (url) => {
//   // this is aync await syntax for fetching data.
//   const response = await fetch(
//     url
//   );
//   const userData = await response.json();

//   return userData;
// }

// // const fetchData = (url) => {
// //   return fetch(url).then(res => res.json()).then(res => res)
// // }


// // it will be passed inside filter function which is a higher order function 
// // and its an callback function.
// const filterValues = item => item.score > 30;


// const sortUserScores = () => {
//   const tempData = [...userData];
//   tempData.sort((a, b) => scoreAscending ? a.score - b.score : b.score - a.score);
//   const filteredData = tempData.filter(filterValues);
//   const newData = tempData.map(item => ({name: item.name, score: item.score}))
//   scoreAscending=!scoreAscending;
//   while (tableBody.firstChild) {
//     tableBody.removeChild(tableBody.firstChild);
//   }
//   console.log(tempData, newData);
//   renderTableRows(filteredData);
// }

// // Adding event handlers to an element
// // scoreHeader.addEventListener('click', sortUserScores)





// const renderTableRows = (data) => {
//   data?.forEach((user, i) => {
//     const tRow = document.createElement('tr');
//     const td1 = document.createElement('td');
//     const td2 = document.createElement('td');
//     const td3 = document.createElement('td');
//     const td4 = document.createElement('td');
//     td1.textContent = i + 1;
//     td1.classList.add('p-3',`${i%2===0 ? 'bg-white' : 'bg-sky-50'}`)
//     td2.textContent = user.name;
//     td2.classList.add('p-3', `${i % 2 === 0 ? 'bg-white' : 'bg-sky-50'}`);
//     td3.textContent = user.country;
//     td3.classList.add('p-3', `${i % 2 === 0 ? 'bg-white' : 'bg-sky-50'}`);
//     td4.textContent = user.score;
//     td4.classList.add('p-3', `${i % 2 === 0 ? 'bg-white' : 'bg-sky-50'}`);
//     tRow.appendChild(td1);
//     tRow.appendChild(td2);
//     tRow.appendChild(td3);
//     tRow.appendChild(td4);
//     tableBody.appendChild(tRow)
//   })
// }

// const main = async () => {
//   userData = await getUserRankingsAsync(
//     'https://64743e827de100807b1a84ab.mockapi.io/api/v1/leaderboard/users'
//   );
//   // fetchData(
//   //   'https://64743e827de100807b1a84ab.mockapi.io/api/v1/leaderboard/users'
//   // ).then(data => renderTableRows(data));
//   renderTableRows(userData)
  
// };
// main();


document.addEventListener('DOMContentLoaded', init, false);
let data, table, sortCol;
let sortAsc = false;
const pageSize = 5;
let curPage = 1;

async function init() {
  
  // Select the table (well, tbody)
  table = document.querySelector('#table tbody');
  // get the cats
  let resp = await fetch('https://64743e827de100807b1a84ab.mockapi.io/api/v1/leaderboard/users');
  data = await resp.json();
  renderTable();
  
  // listen for sort clicks
document.querySelectorAll('#table thead tr th').forEach(t => {
        t.addEventListener('click', sort, false);
});
  
document.querySelector('#nextButton').addEventListener('click', nextPage, false);
document.querySelector('#prevButton').addEventListener('click', previousPage, false);
}

function renderTable() {
  // create html
  let result = '';
  data.filter((row, i) => {
        let start = (curPage-1)*pageSize;
        let end =curPage*pageSize;
        if(i >= start && i < end) return true;
  }).forEach((user,i) => {
      result += `<tr>
    <td>${i+1}</td>
      <td>${user.name}</td>
      <td>${user.country}</td>
      <td>${user.score}</td>
      <td><img src="${user.photo}"</td>
      </tr>`;
  });
  table.innerHTML = result;
}

function sort(e) {
  let thisSort = e.target.dataset.sort;
  if(sortCol === thisSort) sortAsc = !sortAsc;
  sortCol = thisSort;
  console.log('sort dir is ', sortAsc);
  data.sort((a, b) => {
    if(a[sortCol] < b[sortCol]) return sortAsc?1:-1;
    if(a[sortCol] > b[sortCol]) return sortAsc?-1:1;
    return 0;
  });
  renderTable();
}



function previousPage() {
  if(curPage > 1) curPage--;
  renderTable();
}

function nextPage() {
  if((curPage * pageSize) < data.length) curPage++;
  renderTable();
}


// <!-- Hamburger Menu -->
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})
