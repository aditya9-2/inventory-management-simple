import { useState, useCallback } from "react"
import InventoryTable from "./components/InventoryTable"
import AddItemForm from "./components/AddItemForm"
import FilterSort from "./components/FilterSort"

interface Item {
  id: number
  name: string
  category: string
  quantity: number
}

const initialItems: Item[] = [
  { id: 1, name: "Laptop", category: "Electronics", quantity: 15 },
  { id: 2, name: "Desk Chair", category: "Furniture", quantity: 25 },
  { id: 3, name: "Notebook", category: "Stationery", quantity: 50 },
  { id: 4, name: "Printer", category: "Electronics", quantity: 5 },

  { id: 5, name: "Smartphone", category: "Electronics", quantity: 30 },
  { id: 6, name: "Desk Lamp", category: "Furniture", quantity: 40 },
  { id: 7, name: "Pen", category: "Stationery", quantity: 100 },
  { id: 8, name: "Monitor", category: "Electronics", quantity: 10 },
  { id: 9, name: "Bookshelf", category: "Furniture", quantity: 15 },
  { id: 10, name: "Eraser", category: "Stationery", quantity: 75 },
  { id: 11, name: "Tablet", category: "Electronics", quantity: 8 },
  { id: 12, name: "Office Table", category: "Furniture", quantity: 20 },
  { id: 13, name: "Marker", category: "Stationery", quantity: 60 },
];


function App() {
  const [items, setItems] = useState<Item[]>(initialItems)
  const [filter, setFilter] = useState<string>("All")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const addItem = useCallback((newItem: Omit<Item, "id">) => {
    setItems((prevItems) => [...prevItems, { ...newItem, id: Date.now() }])
  }, [])

  const editItem = useCallback((editedItem: Item) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === editedItem.id ? editedItem : item)))
  }, [])

  const deleteItem = useCallback((id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }, [])

  const filteredItems = items.filter((item) => filter === "All" || item.category === filter)
  const sortedItems = [...filteredItems].sort((a, b) =>
    sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity,
  )

  return (
    <div className="h-screen mx-auto p-4 bg-black text-white">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>-
      <AddItemForm addItem={addItem} />
      <FilterSort filter={filter} setFilter={setFilter} sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <InventoryTable items={sortedItems} editItem={editItem} deleteItem={deleteItem} />
    </div>
  )
}

export default App

