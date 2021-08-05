function createCalendar() {
	console.log("달력생성");
	const calendarTitle = document.querySelector(".calendar__title");
	const dateTotal = document.querySelector(".date");
	let nowDate = new Date();

	let year = nowDate.getFullYear();
	let lastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let month = [
		"1월",
		"2월",
		"3월",
		"4월",
		"5월",
		"6월",
		"7월",
		"8월",
		"9월",
		"10월",
		"11월",
		"12월",
	];

	// 윤년 계산
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) lastDay[1] = 29;
	else lastDay[1] = 28;

	const thisMonth = new Date(
		nowDate.getFullYear(),
		nowDate.getMonth()
	).getMonth();
	const thisMonthDay = new Date(nowDate.getFullYear(), thisMonth).getDay();
	let prevMonthDay = new Date(nowDate.getFullYear(), thisMonth).getDay();
	let thisDate = month[thisMonth];
	let date = lastDay[thisMonth];

	// 달력 생성
	let tag = "<tr class='date__tr'></tr>";
	let count = 0;
	// for (let j = 0; j < thisMonthDay; j++) {
	// 	tag += "<td></td>";
	// 	count++;
	// }

	for (let i = 1; i <= date; i++) {
		if (i % 7 === 0) tag += "<tr class='date__tr'>";
		if (
			(thisDate === "1월" && i === 1) ||
			(thisDate === "2월" && (i === 11 || i === 12 || i === 13)) ||
			(thisDate === "3월" && i === 1) ||
			(thisDate === "5월" && (i === 5 || i === 19)) ||
			(thisDate === "9월" && (i === 20 || i === 21 || i === 22)) ||
			i % 7 === 0 ||
			i % 7 === 1
		) {
			tag += `<td class="day-off"><p>${i}</p></td>`;
			// count++;
		} else {
			tag += `<td><p>${i}</p></td>`;
		}
		if (i % 7 === 0) tag += "</tr>";
	}
	calendarTitle.textContent = thisDate;
	dateTotal.innerHTML = tag;
}

function initial() {
	createCalendar();
}

initial();
