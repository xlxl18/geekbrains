let month = {'января'  : 0,
			 'февраля' : 1,
			 'марта'   : 2,
			 'апреля'  : 3,
			 'мая'     : 4,
			 'июня'    : 5,
			 'июля'    : 6, 
			 'августа' : 7, 
			 'сентября': 8, 
			 'октября' : 9, 
			 'ноября'  : 10, 
			 'декабря' : 11
}

let d = +process.argv[1]; // 4
let m = process.argv[2]; // июля
let y = +process.argv[3]; // 2018

let newYear = new Date(y + 1, 0, 0);
let date = new Date(y, month[m], d);
let result = (newYear - date) / (1000 * 60 * 60 * 24);

process.stdout.write(result + '');
