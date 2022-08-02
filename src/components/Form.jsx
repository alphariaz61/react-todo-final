import { useState } from "react"

export default function Form ({addItem}) {
    const [text, setText] = useState("")

    const onClick = () => {
        addItem({ id : Date.now(), text })
        setText("")
    }

    return (
        <form onClick={(e) => e.preventDefault()}>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="form-control rounded-0" 
                    placeholder="Add Item Text Here"
                />
                <button 
                    onClick={onClick} 
                    disabled={text.length === 0}
                    className="btn bg-success text-white rounded-0 fw-bold"
                >
                    Submit
                </button>
            </div>
            <hr/>
        </form>
    )
}