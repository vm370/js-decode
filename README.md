js-decode
=========

JavaScript decode function, Just like Oracle decode function! and switcher to replace switch case.

Example:
```javascript
var a = 'list';
console.log(
decode(
	a,
	'test', '这是测试',
	'list', function(a){
		return 'list:' + a;
	}, function(s){
		return decode(
			true,
			/^test/.test(s), 'tester',
			/^list/.test(s), 'lister',
			s
		);
	}
));

var b = '3';
var o = {
	'a': 'options:a',
	'b': function(s){ return 'options:b'; },
	'1': 'options:1',
}
console.log(
switcher(
	b, {
		'a': 'options:a',
		'b': function(s){ return 'options:b'; },
		'1': 'options:1',
	}, function(s){
		return 'other:'+s;
	}
));
```
