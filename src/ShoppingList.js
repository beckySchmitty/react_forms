import React, {useState} from "react";
import Item from "./Item";
import NewItemForm from "./NewItemForm";

const ShoppingList = () => {
    const initalState = [
        {id: 1, name: 'Milk', qty:2},
        {id: 2, name: 'Jam', qty: 1}
    ]

    const [items, setItems] = useState(initalState)

    const addItem = (name, qty) => {
        setItems(items => [...items, {name, qty}])
    }

    return (
        <div>
            <h3>Shopping List</h3>
            <NewItemForm addItem={addItem}/>
            <div>
                {items.map(({id, name, qty}) => <Item name={name} qty={qty} key={id} />)}
            </div>
        </div>
    )
}

export default ShoppingList;