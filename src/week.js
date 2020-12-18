
const YYYYMMDD = [];
const THISDATE = [];

function getWeek() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const dayOfWeek = today.getDay();

    for(let i = 0; i < 7; i++) {
        const resultDay = new Date(year, month, date + (i - dayOfWeek));
        const yyyy = resultDay.getFullYear();
        let mm = Number(resultDay.getMonth()) + 1;
        let dd = resultDay.getDate();
        THISDATE.push(dd);

        mm = String(mm).length === 1 ? '0' + mm : mm;
        dd = String(dd).length === 1 ? '0' + dd : dd;

        YYYYMMDD.push(yyyy + String(mm) + String(dd));
    }
}

getWeek();

const thisWeek = {
    yyyymmdd: YYYYMMDD,
    thisDate: THISDATE
}

export default thisWeek;