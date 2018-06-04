/* Task 3 */

let a = +process.argv[2];
let b = +process.argv[3];

let sec = a + b;
let min = sec / 60;
let hour = min / 60;

//let days = Math.floor(hour / 24);
let hours = Math.floor(hour);
let minutes = Math.floor(min % 60);
let seconds = Math.floor(sec % 60);

//let d = ['дней', 'день', 'дня', 'дня', 'дня', 'дней', 'дней', 'дней', 'дней', 'дней', '', 'дней', 'дней', 'дней', 'дней'];
let h = ['часов', 'час', 'часа', 'часа', 'часа', 'часов', 'часов', 'часов', 'часов', 'часов', '', 'часов', 'часов', 'часов', 'часов'];
let m = ['минут', 'минута', 'минуты', 'минуты', 'минуты', 'минут', 'минут', 'минут', 'минут', 'минут', '', 'минут', 'минут', 'минут', 'минут'];
let s = ['секунд', 'секунда', 'секунды', 'секунды', 'секунды', 'секунд', 'секунд', 'секунд', 'секунд', 'секунд', '', 'секунд', 'секунд', 'секунд', 'секунд'];

let result = '';
/*if ((days > 0) & (days % 100 > 10) & (days % 100 < 15)) result += `${days} ${d[days % 100]} `; 
else if (days > 0) result += `${days} ${d[days % 10]} `;
*/

if ((hours > 0) & (hours % 100 > 10) & (hours % 100 < 15)) result += `${hours} ${h[hours % 100]} `;
else if (hours > 0) result += `${hours} ${h[hours % 10]} `;

if ((minutes > 0) & (minutes % 100 > 10) & (minutes % 100 < 15)) result += `${minutes} ${m[minutes % 100]} `;
else if (minutes > 0) result += `${minutes} ${m[minutes % 10]} `;

if ((seconds > 0) & (seconds % 100 > 10) & (seconds % 100 < 15)) result += `${seconds} ${s[seconds % 100]}`;
else if (seconds > 0) result += `${seconds} ${s[seconds % 10]}`;
else result = result.slice(0, -1);

process.stdout.write(result);
