function createCalendar() {
	console.log("달력생성");
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

	let thisMonth = new Date(
		nowDate.getFullYear(),
		nowDate.getMonth()
	).getMonth();
	let prevMonthDay = new Date(nowDate.getFullYear(), thisMonth).getDay();
	let thisDate = month[thisMonth];
	let date = lastDay[thisMonth];

	// 달력 생성
	let tag = "<tr>";
	let count = 0;
	for (let j = 0; j < thisMonthDay; j++) {
		tag += "<td></td>";
		count++;
	}

	for (let i = 1; i <= date; i++) {
		if (count % 7 === 0) tag += "<tr>";
		console.log("!@!@!@", thisDate);
		if (
			(thisDate === "1월" && i === 1) ||
			(thisDate === "2월" && (i === 11 || i === 12 || i === 13)) ||
			(thisDate === "3월" && i === 1) ||
			(thisDate === "5월" && (i === 5 || i === 19)) ||
			(thisDate === "8월" && (i === 20 || i === 21 || i === 22)) ||
			count % 7 === 0 ||
			count % 7 === 6
		) {
			tag += `<td class="day-off"><p>${i}</p></td>`;
			count++;
		} else if (count % 7 === 2 || count % 7 === 4) {
			tag += `<td class="a-half"><p>${i}</p></td>`;
		} else {
			tag += `<td class="pick-day"><p>${i}</p></td>`;
		}
		if (count % 7 === 0) tag += "</tr>";
	}
}

function initial() {
	createCalendar();
}

initial();
