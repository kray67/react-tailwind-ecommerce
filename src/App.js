import bottomLeft from './images/bg__left.svg'
import topRight from './images/bg__top-right.svg'
import bottomRight from './images/bg__btm-right.svg'
import Menu from './components/Menu'
import Cart from './components/Cart'
import data from './data'
import { useState } from 'react'

function App() {
	const {menu} = data
	const [cart, setCartItems] = useState([])
	const onAdd = (product) => {
		const exists = cart.find((item) => item.id === product.id)
		if (exists) {
			setCartItems(
				cart.map((item) => 
					item.id === product.id ? {...exists, qty: exists.qty + 1} : item
				)
			)
		} else {
			setCartItems([...cart, {...product, qty: 1}])
		}
	}
	const onRemove = (product) => {
		const exists = cart.find((item) => item.id === product.id)
		if (exists.qty === 1) {
			setCartItems(cart.filter((item) => item.id !== product.id))
		} else {
			setCartItems(
				cart.map((item) => 
					item.id === product.id ? {...exists, qty: exists.qty - 1} : item
				)
			)
		}
	}
	return (
		<div className="App h-screen relative flex items-center justify-center gap-x-12 py-10 bg-purple-100 font-sans">
			<Menu menu={menu} onAdd={onAdd} />
			<Cart cart={cart} onAdd={onAdd} onRemove={onRemove} />
			<img src={bottomLeft} className="absolute bottom-0 left-0" alt="Bottom Left" />
			<img src={topRight} className="absolute top-0 right-0" alt="Top Right" />
			<img src={bottomRight} className="absolute bottom-0 right-0" alt="Bottom Right" />
		</div>
	)
}

export default App
