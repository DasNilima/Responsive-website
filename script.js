document.addEventListener('DOMContentLoaded', init, false);
let data, table, sortCol;
let sortAsc = false;
const pageSize = 5;
let curPage = 1;

async function init() {
  
  // Select the table (well, tbody)
  table = document.querySelector('#table tbody');
  // get the users
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
  }).forEach((user, i) => {
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

function previousPage() {
  if(curPage > 1) curPage--;
  renderTable();
}

function nextPage() {
  if((curPage * pageSize) < data.length) curPage++;
  renderTable();
}

//  sort functionality

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

//  search Functionality

function search() {
  let input, filter, table, tr, td, i, txtValue
  input = document.getElementById('search')
  filter = input.value.toUpperCase()
  table = document.getElementById('table')
  tr = table.getElementsByTagName('tr')

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[1]
    if (td) {
      txtValue = td.textContent || td.innerText

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = ""
      
      }
      else {
        tr[i].style.display = "none"
      }
    }
  }
}



// <!-- Hamburger Menu -->
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})
