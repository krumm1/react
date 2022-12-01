import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {
	const [modalIsActive, setModalIsActive] = useState(false);

	const showModalHandler = () => {
		setModalIsActive(true);
	};

	const hideModalHandler = () => {
		setModalIsActive(false);
	};

	return (
		<CartProvider>
			{modalIsActive && <Cart onClose={hideModalHandler} />}
			<Header onShowModal={showModalHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
//145
