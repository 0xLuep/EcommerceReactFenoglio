import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import data from '../data/products.json';


export const ItemDetailContainer = () => {
    const [prod, setProd] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        })
            .then((response) => {
                const findProd = response.find(prod => prod.id === Number(id));
                setProd(findProd);
            })
            .finally(() => setLoading(false))
    }, [id]);

    if (loading) return (
        <Container className='mt-4'>
            <Spinner animation="border" variant='secondary'/>
        </Container>
    )

    if (!prod) return (
        <Container className='mt-4'>
            <h2>El producto no existe!</h2>
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
                <Card.Text className='mb-0'>${prod.price}</Card.Text>
            </Card.Footer>
        </Card>
    </Container>
    )
};