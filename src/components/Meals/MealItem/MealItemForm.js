import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import { useRef, useState } from 'react';

const MealItemForm = props => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const submithandler = event => {
		event.preventDefault();
		const enteredAmount = +amountInputRef.current.value;

		if (enteredAmount < 1 || enteredAmount > 5) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(enteredAmount);
	};

	return (
		<form className={classes.form} onSubmit={submithandler}>
			<Input
				label="Amount"
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
				ref={amountInputRef}
			/>
			<button>+ Add</button>
			{!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
		</form>
	);
};

export default MealItemForm;
