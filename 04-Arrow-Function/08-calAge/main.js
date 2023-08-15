const calAgeInDay = (birthDay, birthMonth, birthYear) => {
    let ageInDays = 0;

// นับวันที่ผ่านมาในปีที่เกิด
for (let month = 1; month < birthMonth; month++) {
    ageInDays += daysInMonth(month, isLeapYear(birthYear));
}
    ageInDays += birthDay - 1;

// นับวันที่ผ่านมาในปีตามที่ผ่านมา
for (let year = birthYear + 1; year < 2020; year++) {
    ageInDays += isLeapYear ? 366 : 365;
}

// นับวันที่ผ่านมาในปี 2020
for (let month = 1; month < 12; month++) {
    ageInDays += daysInMonth(month, isLeapYear(2020));
}
    ageInDays += 30;
    return ageInDays;
};

const daysInMonth = (month, isLeapYear) => {
    if (month === 2) {
        return isLeapYear ? 29 : 28;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    } else {
        return 31;
    }
}

const isLeapYear = (year) => (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);

const birthDay = 1;
const birthMonth = 1;
const birthYear = 1993;

const ageInDays = calAgeInDay(birthDay, birthMonth, birthYear);

console.log(`Age in day = ${ageInDays}`);

  