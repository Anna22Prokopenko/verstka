'use strict';
let list = [];
for (var i=0; i<40; i++) {
	let obj = {id: parseFloat('' + [i]), title: 'item' + [i]};
	list.push(obj);
};
console.log(list);
let offset = 0;
let table = document.getElementById("table");
let paginator = document.getElementById("paginator");
let pages = Math.ceil(list.length / 7);

function createPagin () {
	let ul = document.createElement('ul');
	ul.className = 'pagination pagination-sm';
	table.appendChild(ul);
	for (let i=1; i<=pages; i++) {
		ul.insertAdjacentHTML('beforeend', 
		`<li><span data-page="${i}">${i}</span></li>`);
	};
	ul.insertAdjacentHTML('afterBegin', '<li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>');
	ul.insertAdjacentHTML('beforeEnd', '<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>');
	ul.addEventListener('click', switchPage);
};
function switchPage() {
	if (event.target.tagName !== 'SPAN') {return;}
	let page = event.target.getAttribute('data-page');
	offset = page * 7 - 7;
	renderTable();
	createPagin();
};
function renderTable() {
	table.innerHTML = '';
	let items = list.slice(offset, offset+7);
	console.log(items);
	items.forEach(item => {
		table.insertAdjacentHTML('beforeend', 
		`<tr data-page=item><td>"${item.title}"</td><td id="plus${item.id}" class="td_center"><span class="glyphicon glyphicon-plus"></span></td><td onclick="minus_listener(event)" class="td_center"><span class="glyphicon glyphicon-minus"></span></td></tr>`);
		let plus_lestener = document.getElementById(`plus${item.id}`);
		plus_lestener.addEventListener("click", function (e) {
			// function currentNumb (numb) {
				// return numb.id === e.path[2].rowIndex;
			// };
			// console.log(items.find(currentNumb));
			//items.indexOf(e.id)
		});
	});
	
	
};
renderTable();
createPagin();
