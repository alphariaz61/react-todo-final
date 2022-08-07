import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Navbar from "./components/Navbar";

export default function App () {

    const [items, setItems] = useState([
        { id : 1, text : "Finish the Avengers series" },
        { id : 2, text : "Take my dogs to the vet" },
        { id : 3, text : "Go to the car wash" },
    ])

    const addItem = (item) => setItems([...items, item])
    const deleteItem = (item) => setItems(items.filter((i) => i.id !== item.id))
    const editItem = (item) => {
        const input = prompt("Update Text:", item.text)
        if (input.length > 0) setItems(items.map((i) => (i.id === item.id) ? {...i, text: input} : i))
    }
    const clearItems = () => setItems([])

    return (
        <div className="wrapper bg-dark text-white">
            <Navbar clearItems={clearItems} items={items}/>
            <div className="container pt-5">
                <div className="col-12 col-lg-6 mx-auto mt-5 p-5 border border-light rounded">
                   <Form addItem={addItem}/>
                   <List items={items} editItem={editItem} deleteItem={deleteItem} />
                </div>
            </div>
        </div>
    ) 
}
