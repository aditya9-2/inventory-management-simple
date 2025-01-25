import React, { useState } from 'react';

interface Item {
    name: string;
    category: string;
    quantity: number;
}

interface AddItemFormProps {
    addItem: (item: Item) => void;
}

function AddItemForm({ addItem }: AddItemFormProps) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && category && quantity) {
            addItem({ name, category, quantity: parseInt(quantity) });
            setName('');
            setCategory('');
            setQuantity('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Item name"
                required
                className="border rounded px-2 py-1"
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="border rounded px-2 py-1"
            >
                <option value="">Select category</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Stationery">Stationery</option>
            </select>
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity"
                required
                min="0"
                className="border rounded px-2 py-1"
            />
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                Add Item
            </button>
        </form>
    );
}

export default AddItemForm;
