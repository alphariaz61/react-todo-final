export default function List ({items, editItem, deleteItem}) {
    if (items.length === 0) return <p className="text-center fs-3 mt-5">Nothing In My Todo List</p>
    return (
        <ul className="list-group mt-5 rounded-0">
            {items.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{item.text}</span>
                    <div>
                        <i onClick={() => editItem(item)} className="bi bi-pencil-square text-warning fs-5 pointer me-3"></i>
                        <i onClick={() => deleteItem(item)} className="bi bi-trash text-danger fs-5 pointer"></i>
                    </div>
                </li>
            ))}
        </ul>
    )
}