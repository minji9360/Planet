var httpRequest;

function createCalendar() {
	const calendarTitle = document.querySelector(".calendar__h1");
	const dateTotal = document.querySelector(".date");
	let nowDate = new Date();

	let year = nowDate.getFullYear();
	let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
	else lastDays[1] = 28;

	const thisMonth = new Date(
		nowDate.getFullYear(),
		nowDate.getMonth()
	).getMonth();
	const thisMonthDay = new Date(nowDate.getFullYear(), thisMonth).getDay();
	let thisDate = month[thisMonth];
	let lastDay = lastDays[thisMonth];

	// 달력 생성
	let tag = "<tr class='date__tr'>";
	let i = 1,
		count = 1;
	for (i; i <= thisMonthDay; i++) {
		tag += "<td></td>";
		count++;
	}

	for (let i = 1; i <= lastDay; i++) {
		// 날짜
		if (count % 7 === 1) {
			tag += "<tr class='date__tr'>";
		}
		if (
			(thisDate === "1월" && i === 1) ||
			(thisDate === "2월" && (i === 11 || i === 12 || i === 13)) ||
			(thisDate === "3월" && i === 1) ||
			(thisDate === "5월" && (i === 5 || i === 19)) ||
			(thisDate === "8월" && i === 15) ||
			(thisDate === "9월" && (i === 20 || i === 21 || i === 22)) ||
			(thisDate === "10월" && (i === 3 || i === 9)) ||
			(thisDate === "12월" && i === 25) ||
			count % 7 === 0 ||
			count % 7 === 1
		) {
			tag += `<td id="day${i}" class="day__td"><p class="calendar-day calendar-off">${i}</p><p class="content"></p></td>`;
		} else {
			tag += `<td id="day${i}" class="day__td"><p class="calendar-day">${i}</p><p class="content"></p></td>`;
		}
		if (count % 7 === 0) {
			tag += "</tr>";
		}
		count++;
	}
	calendarTitle.textContent = year + "년 " + thisDate;
	dateTotal.innerHTML = tag;
}

function clickCalendarDate() {
	const yearMonth = document.querySelector(".calendar__h1").innerHTML.split(" ")
	const year = yearMonth[0].slice(0, 4);
	let month = yearMonth[1].slice(0, -1);
	let date = this.firstChild.innerHTML;
	const days = ["일", "월", "화", "수", "목", "금", "토"];
	const dayTds = document.querySelectorAll(".day__td");
	let daysIndex;
	
	document.querySelector(".clicked-day").classList.remove("hidden");
	document.querySelector(".non-clicked-day").classList.add("hidden");

	for (let i = 0; i < dayTds.length; i++)
		if (dayTds[i].classList.contains('clicked-td')) dayTds[i].classList.remove('clicked-td');
	this.classList.add("clicked-td");

	if (date % 7 == 0) daysIndex = 6;
	else daysIndex = (date % 7) - 1;

	document.querySelector(".clicked-day__h1").innerHTML =
		date +
		"일 " +
		days[daysIndex] +
		"요일";
	
	if (month.length === 1) month = '0' + month;
	if (date.length === 1) date = '0' + date;
	
	const yearMonthDate = year + month + date
	const url = "/calendar/plan";
	
	fetch(url).then(res => {
		if (res.status === 200) {
			console.log("TEST RES", res);
			res.text().then(text=> {
				console.log("TEST IN", text)
			}).catch(err => console.log(err))
		} else {
			console.log("TEST1", res)
		}
	}).catch(error => console.log("error:", error))
}

function clickCalendarMonth() {
	const dayTds = document.querySelectorAll(".day__td");
	document.querySelector(".clicked-day").classList.add("hidden");
	document.querySelector(".non-clicked-day").classList.remove("hidden");

	for (let i = 0; i < dayTds.length; i++)
		if (dayTds[i].classList.contains('clicked-td')) dayTds[i].classList.remove('clicked-td');
}

function initial() {
	createCalendar();

	const dayTds = document.querySelectorAll(".day__td");
	const calendarMonth = document.querySelector(".calendar__h1");

	dayTds.forEach(function (dayTd) {
		dayTd.addEventListener("click", clickCalendarDate);
	});
	calendarMonth.addEventListener("click", clickCalendarMonth);
}

initial();
