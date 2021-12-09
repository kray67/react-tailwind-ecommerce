import React from 'react'

const MenuItem = (props) => {
    const {menuItem, onAdd} = props
    return (
        <div className="menu-item relative w-full h-44">
            <div className="item-bg absolute top-6 -right-6 w-11/12 h-36 rounded-xl bg-red-300"></div>
            <img src={`images/plate__${menuItem.id}.png`} alt={menuItem.description} className="item-photo absolute top-0 left-5 w-32 h-32 rounded-full"/>
            <div className="item-info absolute top-10 left-44 w-40 h-20 flex flex-col items-start justify-around">
                <div className="item-description text-lg">{menuItem.description}</div>
                <div className="item-price font-bold text-4xl">{menuItem.currency}{menuItem.price}</div>
            </div>
            <div onClick={() => onAdd(menuItem)} className="item-add absolute top-36 left-44 py-1 px-6 bg-purple-600 rounded-3xl cursor-pointer font-bold text-lg leading-8 text-center text-white">Add to Cart</div>
        </div>
    )
}

export default MenuItem
