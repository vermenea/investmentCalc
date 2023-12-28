export default function UserInput({ onChange, userInput }) {
	return (
		<section id='user-input'>
			<div className='input-group'>
				<p>
					<label htmlFor=''>
						Initial Investment
						<input
							type='number'
							required
							value={userInput.initialInvestment}
							onChange={(event) =>
								onChange('initialInvestment', event.target.value)
							}
						/>
					</label>
				</p>
				<p>
					<label htmlFor=''>
						Annual Investment
						<input
							type='number'
							required
							value={userInput.annualInvestment}
							onChange={(event) =>
								onChange('annualInvestment', event.target.value)
							}
						/>
					</label>
				</p>
				<p>
					<label htmlFor=''>
						Expected Return
						<input
							type='number'
							required
							value={userInput.expectedReturn}
							onChange={(event) =>
								onChange('expectedReturn', event.target.value)
							}
						/>
					</label>
				</p>
				<p>
					<label htmlFor=''>
						Duration
						<input
							type='number'
							required
							value={userInput.duration}
							onChange={(event) => onChange('duration', event.target.value)}
						/>
					</label>
				</p>
			</div>
		</section>
	);
}
