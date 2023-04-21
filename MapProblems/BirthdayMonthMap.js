let birthMonthMap = new Map();
for (let i = 0; i < 50; i++) {
  let birthMonth = Math.floor(Math.random() * 12) + 1; 
  let birthYear = Math.floor(Math.random() * 2) + 92; // Random birth year between 92 and 93
  let birthDate = new Date(birthYear, birthMonth, 0); 
  let numOfDays = birthDate.getDate();
  let birthDay = Math.floor(Math.random() * numOfDays) + 1; // Random birth day between 1 and number of days in the birth month
  let birthday = new Date(birthYear, birthMonth - 1, birthDay); 
  let monthName = birthday.toLocaleString('default', { month: 'long' }); 
  if (birthMonthMap.has(monthName)) {
    birthMonthMap.get(monthName).push(birthday);
  } else {
    birthMonthMap.set(monthName, [birthday]);
  }
}

console.log(birthMonthMap);
