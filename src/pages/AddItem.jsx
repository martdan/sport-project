import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleAddItem = async (e) => {
        e.preventDefault();
        const newItem = {
            item_name: itemName,
            item_description: itemDescription,
            price,
            item_image_url: imageUrl,
        };

        try {
            await axios.post('http://<your-backend-url>/items', newItem); // Replace with your API URL
            alert('Item added successfully');
        } catch (error) {
            alert('Error adding item:', error.message);
        }
    };

    return (
        <div>
            <h1>Add New Item</h1>
            <form onSubmit={handleAddItem}>
                <input
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder="Item Name"
                    required
                />
                <textarea
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                    placeholder="Item Description"
                    required
                />
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                    required
                />
                <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Image URL"
                    required
                />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;
