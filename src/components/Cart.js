import React from 'react'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const Cart = (props) => {
	const {cart, onAdd, onRemove} = props
	return (
		<div className="phone-container relative flex flex-col overflow-hidden bg-white z-10 rounded-3xl shadow-md h-full w-1/4">
			<div className="phone-header w-full h-32 pt-12 px-9 pb-8 bg-white font-bold text-4xl leading-10 text-left">Your Cart</div>
            <div className="phone-body w-full h-full flex flex-col items-center pb-5 scrollable overflow-x-hidden overflow-y-auto">
                {cart.length === 0 && <div className="empty-state self-start pl-9 text-base leading-6">Your cart is empty.</div>}
                {cart.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} onAdd={onAdd} onRemove={onRemove} />
                ))}
                {cart.length > 0 && <CartTotals cart={cart} />}
            </div>
		</div>
	)
}

export default Cart
