export default function TodoList(list) {
  const DUMMY = ["Todo1", "Todo2", "Todo3"];

  return (
    <ul>
      {DUMMY.length !== 0 &&
        DUMMY.map(todo => {
          return (
            <li key={todo}>
              <label>
                <input type="checkbox" />
                <span>{todo}</span>
              </label>
            </li>
          );
        })}
    </ul>
  );
}
