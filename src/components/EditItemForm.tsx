import React, { useState } from 'react';

interface Item {
    id: number;
    name: string;
    category: string;
    quantity: number;
}

interface EditItemFormProps {
    item: Item;
    editItem: (item: Item) => void;
    cancelEdit: () => void;
}

function EditItemForm({ item, editItem, cancelEdit }: EditItemFormProps) {
    const [name, setName] = useState(item.name);
    const [category, setCategory] = useState(item.category);
    const [quantity, setQuantity] = useState(item.quantity.toString());

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && category && quantity) {
            editItem({ ...item, name, category, quantity: parseInt(quantity) });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
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
                className="border rounded px-2 py-1 bg-black"
            >
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
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                Save
            </button>
            <button type="button" onClick={cancelEdit} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded">
                Cancel
            </button>
        </form>
    );
}

export default EditItemForm;
