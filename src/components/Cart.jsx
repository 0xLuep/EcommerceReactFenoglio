import { useContext } from "react"
import { Checkout } from "./Checkout"


import { ItemsContext } from "../contexts/ItemsContext"

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


export const Cart = () => {
    const {reset, removeItem, items, quantCart, totalPrice } = useContext(ItemsContext);

    if (!quantCart()) {
        return (
        <Container className='mt-4'>
            <h1>El carrito esta vacio!</h1>
        </Container>
        )
    }

    return (
        <Container className='mt-4 mb-4'>
            <Card className="d-flex flex-row" bg="black" border="info">
                <Card className="text-center w-50 pb-4" bg="dark" text='white'>
                    <button onClick={reset} className="bg-danger mb-3 text-white">Vaciar todo el carrito <i className="bi bi-trash3-fill"></i></button>
                    <h1 className="h4 mb-1">Precio total: ${totalPrice()}</h1>
                    {items?.map((i) => {
                        return (
                        <div key={i.fireId} className="m-4">
                            <hr />
                            <div className="d-flex justify-content-between">
                                <h1 className="h5">{i.name}</h1>
                                <button onClick={() => removeItem(i.fireId)} className="bg-info"><i className="bi bi-trash3-fill"></i></button>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <img src={i.img} height={300} />
                                <div className="w-100">
                                    <h2 className="h6 text-right">Precio/u: ${i.price}</h2>
                                    <h3 className="h6">Cantidad: {i.quantity}</h3>
                                    <h2 className="h6">Precio total de {i.quantity}: ${i.price * i.quantity}</h2>
                                </div>
                            </div>
                            <hr />
                        </div>
                        )
                    })}
                </Card>
                <Card className="w-50" bg="dark" text="white">
                    <Checkout />
                </Card>
            </Card>

        </Container>
    )
}