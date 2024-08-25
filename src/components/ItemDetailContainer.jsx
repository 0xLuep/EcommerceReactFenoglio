import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { ItemsContext } from '../contexts/ItemsContext';
import { ItemCount } from './ItemCount';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';


export const ItemDetailContainer = () => {
    const [prod, setProd] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const { addItem } = useContext(ItemsContext);

    const onAdd = (count) => {
        addItem({ ...prod, quantity: count })
    };

    useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, "products", id);

        getDoc(refDoc)
            .then((snapshot) => {
                setProd({ fireId: snapshot.id, ...snapshot.data() });
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return (
        <Container className='mt-4'>
            <Spinner animation="border" variant='secondary'/>
        </Container>
    )

    if (!prod.name) return (
        <Container className='mt-4'>
            <h1>El producto no existe!</h1>
        </Container>
    )


    return (
    <Container className='mt-4 mb-4'>
        <Card className="text-center" bg="dark" text='white'>
            <Card.Header as="h1">{prod.name}</Card.Header>
            <Card.Body className='d-flex'>
                <Card.Img className='me-3' style={{ height: '550px', width: '400px' }}  variant="top" src={prod.img} />
                <Card.Text>{prod.detail}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Text className='mb-1'>Género: {prod.category}</Card.Text>
                <Card.Text className='mb-1'>c/Páginas: {prod.pages}</Card.Text>
                <Card.Text className='mb-1'>Autor: {prod.autor}</Card.Text>
                <Card.Text className='mb-2'>${prod.price}</Card.Text>
                <Card.Text className='mb-0'>Cantidad a comprar:</Card.Text>
                <ItemCount onAdd={onAdd}/>
            </Card.Footer>
        </Card>
    </Container>
    )
};