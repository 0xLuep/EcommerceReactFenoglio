import { useContext } from "react"
import { Link } from "react-router-dom"
import { ItemsContext } from "../contexts/ItemsContext"

export const CartWidget = () => {

    const { quantCart } = useContext(ItemsContext)


    return (
    <Link to="/cart">
        <div className="carr-img-cont text-white d-flex align-items-center">
            <i className="bi bi-cart2"></i>{quantCart()}
        </div>
    </Link>
    )
}