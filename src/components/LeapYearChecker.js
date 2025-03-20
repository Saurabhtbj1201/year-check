<<<<<<< HEAD
import { useState } from "react";

export default function LeapYearChecker() {
  const [year, setYear] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const checkLeapYear = () => {
    setError(null);
    setResult(null);

    if (!year || isNaN(year)) {
      setError("Please enter a valid year.");
      return;
    }

    const parsedYear = parseInt(year);
    const isLeap = (parsedYear % 4 === 0 && parsedYear % 100 !== 0) || parsedYear % 400 === 0;

    setResult(`${parsedYear} is ${isLeap ? "" : "not"} a leap year.`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkLeapYear();
    }
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Leap Year Checker</h2>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        onKeyDown={handleKeyDown}  // Added Enter key function
        placeholder="Enter a year"
        className="border p-2 rounded"
      />
      <button
        onClick={checkLeapYear}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Check
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {result && <p className="text-green-500 mt-2">{result}</p>}
    </div>
  );
}
=======
import { useState } from "react";

export default function LeapYearChecker() {
  const [year, setYear] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const checkLeapYear = () => {
    setError(null);
    setResult(null);

    if (!year || isNaN(year)) {
      setError("Please enter a valid year.");
      return;
    }

    const parsedYear = parseInt(year);
    const isLeap = (parsedYear % 4 === 0 && parsedYear % 100 !== 0) || parsedYear % 400 === 0;

    setResult(`${parsedYear} is ${isLeap ? "" : "not"} a leap year.`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkLeapYear();
    }
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Leap Year Checker</h2>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        onKeyDown={handleKeyDown}  // Added Enter key function
        placeholder="Enter a year"
        className="border p-2 rounded"
      />
      <button
        onClick={checkLeapYear}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Check
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {result && <p className="text-green-500 mt-2">{result}</p>}
    </div>
  );
}
>>>>>>> 30dfff0e (Initial commit)
