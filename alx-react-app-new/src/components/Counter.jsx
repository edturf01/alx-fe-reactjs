import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '8px', textAlign: 'center' }}>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ margin: '5px' }}>Reset</button>
    </div>
  );
}

export default Counter;
