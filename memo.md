# JavaScript

> `console.dir`, `console.log`
```javascript
console.dir(event.target.parentNode) // li#4
console.log(event.target.parentNode) // <li id="4"><button value="π§¨"></button><span>γγγ</span></li>
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


> `LocalStorage`μλ μλ°μ€ν¬λ¦½νΈμ data(Object)λ₯Ό μ μ₯ν  μκ° μλ€. only λ¬Έμμ΄  
> `JSON.stringify()`  μλ°μ€ν¬λ¦½νΈ κ°μ²΄ -> String  
> `filter()` μ£Όμ΄μ§ ν¨μμ μ‘°κ±΄μ λ§λ μμλ€μ λͺ¨μμ μλ‘μ΄ λ°°μ΄μ λ¦¬ν΄ν΄μ€

```javascript
const coordsObj = {
    latitude: latitude,
    longitude: longitude
}
`key`μ `value`μ κ°μ΄ κ°μ κ²½μ° μλμ²λΌ μ¬μ© κ°λ₯
const coordsObj = {
    latitude,
    longitude
}
```

`then()` λ°μ΄ν°κ° μμ ν λ€μ΄μ¨ λ€μ νΈμΆν¨