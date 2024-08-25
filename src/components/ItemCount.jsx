import { useState } from "react";

export const ItemCount = ({ onAdd }) => {
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrease = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    const handleAdd = () => {
        onAdd(count);
        setCount(1);
    }

    return (
        <>
            <button onClick={handleIncrease} className="btn btn-success">+</button>
            <span className="m-3">{count}</span>
            <button onClick={handleDecrease} className="btn btn-danger">-</button>
            <hr />
            <button onClick={handleAdd} className="btn btn-info">Agregar al carrito</button>
        </>
    )
};