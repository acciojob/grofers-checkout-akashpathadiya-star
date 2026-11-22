const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let rates = document.querySelectorAll(".price");
	let total = 0;
	for(let i=0;i<rates.length;i++){
		total+=Number(rates[i].textContent)	
	}
	let tr = document.createElement("tr");
	let td = document.createElement("td");
	td.textContent=total;
	tr.append(td);
document.querySelector("table").append(tr);
}
getSumBtn.addEventListener("click", getSum);
