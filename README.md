js-decode
=========

JavaScript decode function, Just like Oracle decode function!

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


```
