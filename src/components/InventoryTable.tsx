import { useState } from "react"
import EditItemForm from "./EditItemForm"

interface Item {
    id: number
    name: string
    category: string
    quantity: number
}

interface InventoryTableProps {
    items: Item[]
    editItem: (item: Item) => void
    deleteItem: (id: number) => void
}

function InventoryTable({ items, editItem, deleteItem }: InventoryTableProps) {
    const [editingId, setEditingId] = useState<number | null>(null)

    return (
        <table className="min-w-full bg-black text-white">
            <thead>
                <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Category</th>
                    <th className="px-4 py-2 text-left">Quantity</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id} className={item.quantity < 10 ? "bg-red-400" : ""}>
                        <td className="border px-4 py-2">{item.name}</td>
                        <td className="border px-4 py-2">{item.category}</td>
                        <td className="border px-4 py-2">{item.quantity}</td>
                        <td className="border px-4 py-2">
                            {editingId === item.id ? (
                                <EditItemForm
                                    item={item}
                                    editItem={(editedItem) => {
                                        editItem(editedItem)
                                        setEditingId(null)
                                    }}
                                    cancelEdit={() => setEditingId(null)}
                                />
                            ) : (
                                <>
                                    <button
                                        onClick={() => setEditingId(item.id)}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteItem(item.id)}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default InventoryTable

