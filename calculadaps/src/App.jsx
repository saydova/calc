import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Function to handle button clicks
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Function to calculate the result
  const calculateResult = () => {
    try {
      // Evaluate the expression and set result
      const evaluatedResult = eval(input); // Be cautious with eval
      setResult(evaluatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  // Function to handle clear button
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  // Function to handle delete button
  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
    // Optionally, update result after deleting
    calculateResult();
  };

  // Function to handle decimal point
  const handleDecimal = () => {
    if (!input.includes('.')) {
      setInput((prev) => prev + '.');
    }
  };

  return (
    <>
      <div
        className="h-[786px]"
        style={{
          backgroundImage:
            "url('https://www.clarkson.edu/sites/default/files/2023-06/Mathematics-Hero-1600x900.jpg')",
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
        }}
      >

        <div className='flex h-14 bg-gradient-to-r from-sky-900 to-gray-800 opacity-90'>
          <div className='pr-[10px] pl-[10px] content-center'>
            <h1 className='text-white font-bold text-2xl'>CalculaDaps</h1>
          </div>
        </div>
        {/* calculator */}
        <div className='flex justify-around mt-20'>
          <div>
            <div>
              <div className='animate__animated animate__fadeInLeft animate__delay-0s'>
                <div className="w-[350px] h-[150px] opacity-70 rounded-xl bg-gradient-to-b bg-sky-200 to-gray-950 ">
                  <div className='ml-4 mr-4 pt-12 '>
                    <input
                      className='text-5xl flex justify-end w-full bg-gradient-to-b bg-sky-200 to-gray-950'
                      value={result || input} // Display result or input
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className='animate__animated animate__fadeInLeft animate__delay-1s'>
                <button
                  className="mt-6 w-[350px] h-[50px] opacity-98 rounded-xl bg-gradient-to-b bg-gray-900 to-gray-950 active:shadow-inner active:shadow-cyan-900"
                  onClick={calculateResult} // Calculate result on click
                >
                  <h1 className='text-white font-bold flex justify-center'>Results</h1>
                </button>
              </div>
            </div>
          </div>

          <div className='animate__animated animate__fadeInUp animate__delay-2s'>
            <div className="w-[350px] h-[430px] opacity-80 rounded-xl bg-gradient-to-b bg-sky-950 to-gray-950 pt-[5px]">
              <div className='flex justify-around mt-[13px]'>
                <button onClick={() => handleClick('7')} className='w-[90px] h-[80px] rounded-md bg-black text-white text-center content-center text-3xl font-bold active:shadow-inner active:shadow-sky-800'>7</button>
                <button onClick={() => handleClick('8')} className='w-[90px] h-[80px] rounded-md bg-black text-white text-center content-center text-3xl font-bold active:shadow-inner active:shadow-sky-800'>8</button>
                <button onClick={() => handleClick('9')} className='w-[90px] h-[80px] rounded-md bg-black text-white text-center content-center text-3xl font-bold active:shadow-inner active:shadow-sky-800'>9</button>
              </div>
              <div className='flex justify-around mt-[25px]'>
                <button onClick={() => handleClick('4')} className='w-[90px] h-[80px] rounded-md bg-black text-white text-center content-center text-3xl font-bold active:shadow-inner active:shadow-sky-800'>4</button>
                <button onClick={() => handleClick('5')} className='w-[90px] h-[80px] rounded-md bg-black text-white text-center content-center text-3xl font-bold active:shadow-inner active:shadow-sky-800'>5</button>
                <button onClick={() => handleClick('6')} className='w-[90px] h-[80px] rounded-md bg-black text-white text-center content-center text-3xl font-bold active:shadow-inner active:shadow-sky-800'>6</button>
              </div>
              <div className='flex justify-around mt-[25px]'>
                <button onClick={() => handleClick('1')} className='w-[90px] h-[80px] rounded-md bg-black text-white text-center content-center text-3xl font-bold active:shadow-inner active:shadow-sky-800'>1</button>
                <button onClick={() => handleClick('2')} className='w-[90px] h-[80px] rounded-md bg-black text-white text-center content-center text-3xl font-bold active:shadow-inner active:shadow-sky-800'>2</button>
                <button onClick={() => handleClick('3')} className='w-[90px] h-[80px] rounded-md bg-black text-white text-center content-center text-3xl font-bold active:shadow-inner active:shadow-sky-800'>3</button>
              </div>
              <div className='flex mr-[13px] ml-[13px] mt-[25px] justify-between'>
                <button onClick={() => handleClick('0')} className='w-[207px] h-[80px] rounded-md bg-black text-white text-center content-center text-3xl font-bold active:shadow-inner active:shadow-sky-800'>0</button>
                <button onClick={handleDecimal} className='w-[90px] h-[80px] rounded-md bg-black text-white text-center content-center text-3xl font-bold active:shadow-inner active:shadow-sky-800'>.</button>
              </div>
            </div>
          </div>

          <div className='animate__animated animate__fadeInRight animate__delay-1s'>
          <div className="w-[450px] h-[300px] opacity-60 rounded-xl ">
            <div className='flex'>
              <div className='flex flex-col gap-5'>
                <button onClick={handleClear} className='w-[70px] h-[70px] rounded-full bg-sky-300 text-center text-black content-center active:shadow-inner active:shadow-black'>AC</button>
                <button onClick={() => handleClick('+')} className='w-[70px] h-[70px] rounded-full bg-sky-300 text-center text-black content-center text-2xl active:shadow-inner active:shadow-black'>+</button>
                <button onClick={() => handleClick('-')} className='w-[70px] h-[70px] rounded-full bg-sky-300 text-center text-black content-center text-4xl active:shadow-inner active:shadow-black'>-</button>
                <button onClick={() => handleClick('(')} className='w-[70px] h-[70px] rounded-full bg-sky-300 text-center text-black content-center text-2xl active:shadow-inner active:shadow-black'>(</button>
                <button onClick={() => handleClick(')')} className='w-[70px] h-[70px] rounded-full bg-sky-300 text-center text-black content-center text-2xl active:shadow-inner active:shadow-black'>)</button>
              </div>
              <div className='flex flex-col gap-5 ml-10'>
                <button onClick={() => handleClick('*')} className='w-[70px] h-[70px] rounded-full bg-sky-300 text-center text-black content-center text-2xl active:shadow-inner active:shadow-black'>x</button>
                <button onClick={() => handleClick('/')} className='w-[70px] h-[70px] rounded-full bg-sky-300 text-center text-black content-center text-4xl active:shadow-inner active:shadow-black'>÷</button>
                <button onClick={() => handleClick('%')} className='w-[70px] h-[70px] rounded-full bg-sky-300 text-center text-black content-center text-2xl active:shadow-inner active:shadow-black'>%</button>
                <button onClick={() => handleClick('Math.sqrt(')} className='w-[70px] h-[70px] rounded-full bg-sky-300 text-center text-black content-center text-2xl active:shadow-inner active:shadow-black'>√</button>
                <button onClick={() => handleClick('Math.pow(')} className='w-[70px] h-[70px] rounded-full bg-sky-300 text-center text-black content-center text-xl active:shadow-inner active:shadow-black'>x<sup>x</sup></button>
              </div>
              <div className='ml-10 mt-[360px]'>
                <button onClick={handleDelete} className='w-[80px] h-[70px] rounded-xl bg-sky-300 text-center text-black content-center text-2xl active:shadow-inner active:shadow-black'>DEL</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
