import React from 'react'

const CartItem = (props) => {
    const {cartItem, onAdd, onRemove} = props
    return (
        <div className="cart-item flex w-5/6 mt-5 pb-3 border-b border-gray-300 border-solid first:border-b-0">
            <div className="left w-1/4 h-32 relative">
                <img src={`images/plate__${cartItem.id}.png`} alt={cartItem.description} className="item-photo absolute top-0 left-0 w-16 h-16 rounded-full"/>
                <div className="item-counter absolute top-4 left-4 font-bold text-sm w-8 h-8 rounded-full text-center leading-8 bg-black text-white">{cartItem.qty}</div>
            </div>
            
            <div className="right w-3/4 h-32 flex flex-col justify-around">
                <div className="item-info flex flex-col items-start justify-around">
                    <div className="item-description text-md">{cartItem.description}</div>
                    <div className="item-price font-black text-sm">{cartItem.currency}{cartItem.price}</div>
                </div>
                <div className="item-controls flex items-center justify-between">
                    <div className="item-buttons w-2/5 flex items-center justify-between">
                        <div onClick={() => onRemove(cartItem)} className="button-remove flex items-center justify-center w-8 h-8 pr-1 rounded-full bg-purple-600 text-center cursor-pointer text-white font-bold text-3xl leading-5"><img src="./images/chevron.svg" alt="remove"/></div>
                        <div className="item-counter font-bold text-sm">{cartItem.qty}</div>
                        <div onClick={() => onAdd(cartItem)} className="button-add flex items-center justify-center w-8 h-8 pr-1 rounded-full bg-purple-600 text-center cursor-pointer text-white font-bold text-3xl leading-5 transform rotate-180"><img src="./images/chevron.svg" alt="add"/></div>
                    </div>
                    <div className="item-total-price w-3/5 font-bold text-4xl text-right">${(cartItem.qty * cartItem.price).toFixed(2)}</div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
