import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';
import { useState } from 'react';

function App() {
	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevInput) => {
			return {
				...prevInput,
				[inputIdentifier]: +newValue,
				// dodanie plusa powoduje konwersje string na liczby
			};
		});
	}

	const [userInput, setUserInput] = useState({
		initialInvestment: 1000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const inputIsValid = userInput.duration >= 1;
	return (
		<>
			<Header />
			<UserInput userInput={userInput} onChange={handleChange} />
			{!inputIsValid && <p className='center'>Please enter valid input data</p>}
			{inputIsValid && <Results input={userInput} />}
		</>
	);
}

export default App;
