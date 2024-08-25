import { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const Provider = ({ children }) => {
    const [items, setItems] = useState(initialCart);

    const addItem = (item) => {
        const alreadyExists = items.some((i) => i.fireId === item.fireId)

        if (alreadyExists) {
            const transform = items.map((i) => {
                if (i.fireId === item.fireId) {
                    return { ...i, quantity: i.quantity + item.quantity };
                } else {
                    return i;
                }
            });
            setItems(transform);
        } else {
            setItems((prev) => [ ...prev, item ]);
        }
    };

    const quantCart = () => {
        return items.reduce((acc, item) => acc + item.quantity, 0)
    }

    const totalPrice = () => {
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }

    const reset = () => setItems([]);

    const removeItem = (id) => {
        const remove = items.filter(i => i.fireId !== id)
        setItems(remove)
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items))
    }, [items])

    return (
    <ItemsContext.Provider value={{ addItem, items, reset, removeItem, quantCart, totalPrice }}>
        {children}
    </ItemsContext.Provider>
    )
};