import { useEffect, useState } from 'react';

const NumberAddition = () => {
  const [fibonacciNumber, setfibonacci] = useState('');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState('');
   const [inputValue, setInputValue] = useState('');
   const [error, setError] = useState('');

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const handleAddition = () => {
    const result = Number(number1) + Number(number2);
    setSum(result);
  };
   
  const handleInputChange = (event) => {
    const { value } = event.target;
    const regex = /^[a-zA-Z\s]*$/; // Regular expression to match alphabets and whitespace

    if (regex.test(value)) {
      setInputValue(value);
      setError('');
    } else {
      setError('Please enter alphabets only');
    }
  };

  // write a fibonacci function here
  const fibonacci = (n) => {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  useEffect(() => {   
    const op = fibonacci(5);
    setfibonacci(op);
  },[])

  return (
    <div>
      <input type="text" value={number1} onChange={handleNumber1Change} placeholder="Enter number 1" />
      <br/>
      <input type="text" value={number2} onChange={handleNumber2Change} placeholder="Enter number 2" />
      <br/>
      <button onClick={handleAddition}>Add</button>
      {sum && <p>Sum: {sum}</p>}
       <br/>
     <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter alphabets only"
      />
      <br/>
      <input type="text" value={fibonacciNumber} data-testid="fib" />
      {error && <span style={{ color: 'red', fontSize:'12px' }}>{error}</span>}
    </div>
    </div>
  );
};

export default NumberAddition;
