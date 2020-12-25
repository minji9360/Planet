const YEAR = [];
const MONTH = [];
const DATE = [];

function getWeek() {
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth();
	const date = today.getDate();
	const dayOfWeek = today.getDay();

	for (let i = 0; i < 7; i++) {
		const resultDay = new Date(year, month, date + (i - dayOfWeek));

		YEAR.push(resultDay.getFullYear());
		MONTH.push(Number(resultDay.getMonth()) + 1);
		DATE.push(resultDay.getDate());
	}
}

getWeek();

const thisWeek = {
	year: YEAR,
	month: MONTH,
	date: DATE,
};

export default thisWeek;
