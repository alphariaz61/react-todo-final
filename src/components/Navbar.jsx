export default function Navbar ({clearItems, items}) {
    return (
        <nav className="navbar bg-dark px-5 py-3 border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="/#">React Todo App</a>
                {(items.length > 0) && (
                    <button onClick={clearItems} className="btn btn-outline-success rounded-1" type="submit">Clear Items</button>
                )}
            </div>
        </nav>
    )
}