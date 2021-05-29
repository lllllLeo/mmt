# JavaScript

> `console.dir`, `console.log`
```javascript
console.dir(event.target.parentNode) // li#4
console.log(event.target.parentNode) // <li id="4"><button value="🧨"></button><span>ㅎㅇㅇ</span></li>
```


> `forEach()`
```javascript
parsedToDos.forEach(function(toDo){
    paintToDo(toDo.text);
});
```
> =>
```javascript
parsedToDos.forEach(toDo => paintToDo(toDo.text));
```


> `LocalStorage`에는 자바스크립트의 data(Object)를 저장할 수가 없다. only 문자열  
> `JSON.stringify()`  자바스크립트 객체 -> String  
> `filter()` 주어진 함수에 조건에 맞는 요소들을 모아서 새로운 배열을 리턴해줌

```javascript
const coordsObj = {
    latitude: latitude,
    longitude: longitude
}
`key`와 `value`의 값이 같은 경우 아래처럼 사용 가능
const coordsObj = {
    latitude,
    longitude
}
```

`then()` 데이터가 완전히 들어온 다음 호출함