// YEAR => BOOLEAN

// const isLeapYear = (year) => {

    // 2
    // if (year % 400 === 0) {
    //     return true;
    // } else if (year % 100 === 0) {
    //     return false;
    // } else if (year % 4 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    // 3
    // if (year % 400 === 0) {
    //     return true;
    // }

    // if (year % 100 === 0) {
    //     return false;
    // }

    // if (year % 4 === 0) {
    //     return true;
    // }
    // return false;

    // 4
    // if (year % 100 === 0) {
    //     return year % 400 === 0;
    // }
    // return year % 4 === 0;


    // 5
    // return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

    const isLeapYear = (year) => (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);
    
// }
    console.log(isLeapYear(100));
    console.log(isLeapYear(2020));
    console.log(isLeapYear(12));