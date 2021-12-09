import React from 'react'
import MenuItem from './MenuItem'

const Menu = (props) => {
	const {menu, onAdd} = props
	return (
		<div className="phone-container relative flex flex-col overflow-hidden bg-white z-10 rounded-3xl shadow-md h-full w-1/4">
			<div className="phone-header w-full h-32 pt-12 px-9 pb-8 bg-white font-bold text-4xl leading-10 text-left">To Go Menu</div>
			<div className="phone-body w-full h-full flex flex-col pb-5 scrollable overflow-x-hidden overflow-y-auto">
				<div className="menu-items-container w-full h-full scrollable overflow-x-hidden overflow-y-auto">
					{menu.map((menuItem) => (
						<MenuItem key={menuItem.id} menuItem={menuItem} onAdd={onAdd} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Menu
