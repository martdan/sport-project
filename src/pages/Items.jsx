import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://<your-backend-url>/items'); // Replace with your API URL
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };
        fetchItems();
    }, []);

    return (
        <div>
            <h1>All Sports Items</h1>
            {items.map(item => (
                <div key={item.item_id}>
                    <h2>{item.item_name}</h2>
                    <p>{item.item_description}</p>
                    <p>Price: ${item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Items;
