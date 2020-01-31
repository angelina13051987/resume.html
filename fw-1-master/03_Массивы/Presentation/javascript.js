//join
var a = [1, 2, 3]; 
console.log ('вывод по умолчанию:' + a) // Создать новый массив с указанными тремя элементами 
a.join (); // => "1,2,3" 
console.log ('a.join ():' + a);
a.join (""); // => "123" 
console.log ('a.join (""):' + a);
a.join ("*"); // => "1 * 2 * 3" 
console.log ('a.join ("*")' + a);

var b = new Array (10); // Массив с длиной, равной 10 и без элементов 
b.join ('-') // => '---------': строкаиз 9 дефисов 
console.log ('b.join (' - ')' + б)

