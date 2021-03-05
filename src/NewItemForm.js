import React, {useState} from "react"

const NewItemForm = ({addItem}) => {
    const initialState = {
        name: '',
        qty: ''
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData.name, formData.qty)
        setFormData(initialState)

    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Product Name</label>
            <input 
            id="name" 
            type="text" 
            name="name"
            placeholder="name" 
            value={formData.name}
            onChange={handleChange}/>

            <label htmlFor="qty">Quantity</label>
            <input 
            id="qty" 
            type="text" 
            name="qty"
            placeholder="qty" 
            value={formData.qty}
            onChange={handleChange}/>

            <button>Add!</button>
        </form>
    )
}

export default NewItemForm;