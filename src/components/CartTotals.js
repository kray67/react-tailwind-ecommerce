import React from 'react'

const CartTotals = (props) => {
    const {cart} = props
    const subTotal = cart.reduce(function(prev, current) {
        return prev + (current.price * current.qty)
    }, 0)
    const tax = (subTotal * 0.0975)
    const total = subTotal + tax
    return (
        <div className="totals flex flex-col w-5/6 pt-5 border-t-4 border-gray-300 border-solid">
            <div className="w-3/4 self-end flex items-baseline justify-end">
                <div className="w-2/5 font-bold text-xl text-right">Subtotal:</div>
                <div className="w-3/5 font-bold text-4xl text-right"> ${subTotal.toFixed(2)} </div>
            </div>
            <div className="w-3/4 self-end flex items-baseline justify-end">
                <div className="w-2/5 font-bold text-xl text-right">Tax:</div>
                <div className="w-3/5 font-bold text-4xl text-right"> ${tax.toFixed(2)} </div>
            </div>
            <div className="w-3/4 self-end flex items-baseline justify-end">
                <div className="w-2/5 font-bold text-xl text-right">Total:</div>
                <div className="w-3/5 font-bold text-4xl text-right"> ${total.toFixed(2)} </div>
            </div>
        </div>
    )
}

export default CartTotals
