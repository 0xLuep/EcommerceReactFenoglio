import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFirestore, getDocs, where, query, collection } from "firebase/firestore";

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';



export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refCollection = !id 
        ? collection(db, "products") 
        : query(collection(db, "products"), where("category", "==", id));

        getDocs(refCollection)
            .then((snapshot) => {
                setProducts(
                    snapshot.docs.map((doc) => {
                        return { fireId: doc.id, ...doc.data() };
                    })
                )
            })
            .finally(() => setLoading(false))
    }, [id]);

    if (loading) return (
        <Container className='mt-4'>
            <Spinner animation="border" variant='secondary'/>
        </Container>
    )

    if (products.length === 0) return (
        <Container className='mt-4'>
            <h1>NO HAY PRODUCTOS.</h1>
        </Container>
    )

    return (
    <Container className='mt-4'>
        <h1 className='mb-4'>PRODUCTOS</h1>
        <Container className='d-flex justify-content-center gap-5 flex-wrap mb-4'>
            {products.map((prod) => (
                <Card key={prod.id} style={{ width: '17rem' }} bg='dark' border="info" text='light'>
                    <Card.Img variant="top" src={prod.img} style={{ height: '24rem' }} />
                    <Card.Body>
                        <Card.Title className='mb-4'>{prod.name}</Card.Title>
                        <Card.Text className='mb-1'>Género: {prod.category}</Card.Text>
                        <Card.Text className='mb-1'>c/Páginas: {prod.pages}</Card.Text>
                        <Card.Text className='mb-1'>Autor: {prod.autor}</Card.Text>
                        <Card.Text className='mb-0'>${prod.price}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Link to={`/item/${prod.fireId}`}><Button variant="primary">Ver Producto</Button></Link>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    </Container>
    )
};