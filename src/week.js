const YEAR = [];
const MONTH = [];
const DATE = [];
const DAY = [];

function getWeek() {
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth();
	const date = today.getDate();
	const day = today.getDay();

	for (let i = -1; i < 6; i++) {
		const resultDay = new Date(year, month, date + i);

		YEAR.push(resultDay.getFullYear());
		MONTH.push(Number(resultDay.getMonth()) + 1);
		DATE.push(resultDay.getDate());

		if (day + i >= 0) {
			DAY.push(day + i);
		} else {
			DAY.push(7 + i);
		}
	}
}

getWeek();

const thisWeek = {
	year: YEAR,
	month: MONTH,
	date: DATE,
	day: DAY,
};

export default thisWeek;
