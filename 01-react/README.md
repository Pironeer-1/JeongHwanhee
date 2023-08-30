## 5강. event

리액트에서는 각 요소에 고유한 "key" prop를 지정해야 한다. 왜냐하면, 
- 리액트가 어떤 요소가 변경되었는지를 식별하는 데 사용된다. 
- 업데이트 최적화: 리액트는 Virtual DOM을 사용하여 변경된 부분만을 실제 DOM에 적용한다. "key" prop가 없을 경우, 리액트는 두 리스트 간의 차이를 계산하기 어려워서 전체 리스트를 다시 그리게 될 수 있다. 그러나 "key" prop를 사용하면 변경된 요소를 효과적으로 식별하여 필요한 부분만 업데이트할 수 있다.
- 컴포넌트 식별: 리스트 안에 컴포넌트를 렌더링할 때, "key" prop를 사용하여 리액트는 각 컴포넌트를 고유하게 식별한다. 이것은 컴포넌트가 유지 및 관리하기 쉽도록 도와주며, 컴포넌트가 제대로 동작하도록 하는 데 중요하다.
- 삭제 및 재정렬: 리스트에서 항목이 삭제되거나 재정렬되는 경우 "key" prop를 사용하여 리액트는 어떤 항목이 어떻게 변경되었는지 추적할 수 있다.


그렇다면, 질문 
```javascript
function Nav(props){
  const lis = [];
  for(let i = 0; i < props.topics.length; i++){
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a id={t.id} href={"/read/"+ t.id} onClick={event => {
          event.preventDefault();
          props.onChangeMode(event.target.id);
        }}>{t.title}</a>
      </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
```
>우선 각 li에 t.id라는 key값을 부여했다. 그런데 a tag의 id 속성은 왜 필요하지?? `props.onChangeMode(event.target.id);` 보다 그냥 `props.onChangeMode(t.id)`로 써도 되는거 아닌가? 

결론적으로, 이 두 방식 모두 써도 된다. 첫번째 방식은 클릭 이벤트가 발생할 때마다 익명의 화살표 함수를 생성한다. 따라서 각각의 onClick 핸들러마다 새로운 함수가 실행된다. 이는 메모리 상에 약간의 오버헤드를 발생시킬 수 있다. 

두번째 방법은 onChangeMode에 직접적으로 함수를 전달한다. 불필요한 함수 생성을 방지하고 코드를 더 간결하게 유지할 수 있다. 따라서 성능 면에서 약간의 이점이 있을 수 있지만, 이러한 차이는 미세하다. 

결론: 취향껏 쓰자 