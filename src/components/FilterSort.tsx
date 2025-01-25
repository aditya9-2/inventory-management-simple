
interface FilterSortProps {
    filter: string
    setFilter: (filter: string) => void
    sortOrder: "asc" | "desc"
    setSortOrder: (order: "asc" | "desc") => void
}

function FilterSort({ filter, setFilter, sortOrder, setSortOrder }: FilterSortProps) {
    return (
        <div className="mb-4 flex gap-2">
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border rounded px-2 py-1 bg-black text-white">
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Stationery">Stationery</option>
            </select>
            <button
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
                Sort by Quantity {sortOrder === "asc" ? "↑" : "↓"}
            </button>
        </div>
    )
}

export default FilterSort

