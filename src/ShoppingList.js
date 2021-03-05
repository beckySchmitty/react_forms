import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import Item from "./Item";
import NewItemForm from "./NewItemForm";

const ShoppingList = () => {
    const initalState = [
        {id: uuidv4(), name: 'Peanut Butter', qty:2},
        {id: uuidv4(), name: 'Jam', qty: 1}
    ]

    const [items, setItems] = useState(initalState)

    const addItem = (newItem) => {
        setItems(items => [...items, {...newItem, id: uuidv4()}])
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