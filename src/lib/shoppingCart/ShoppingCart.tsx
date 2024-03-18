import './ShoppingCart.css';

import {useEffect, useState} from 'react';
import Item from '../item/Item';
import CloseOrder from '../closeOrder/CloseOrder';

interface Props {
    setItemAmount: (amount: number) => void;
}

interface Item {
    id?: number,
    name: string,
    description: string,
    price: number,
    amount: number
}

const initialItems: Item[] = [
    {
        name: "Pizza",
        description: 'Pizza com algo',
        price: 72.50,
        amount: 1
    },
    {
        name: "Sushi",
        description: 'Pizza com algo',
        price: 99.99,
        amount: 1
    },
    {
        name: "Salada",
        description: 'Salada com algo',
        price: 26.99,
        amount: 1
    },
    {
        name: "Hamburguer",
        description: 'Pizza com algo',
        price: 32.99,
        amount: 1
    }
]

export default function ShoppingCart({setItemAmount}: Props) {

    const [items, setItems] = useState<Item[]>(initialItems);

    const handleDeleteItem = (key: number) => {
        setItems(items.splice(key, 1));
    };

    useEffect(() => {
        setItemAmount(items.length);
    },[items.length, setItemAmount]);

    return (
        <main className="shoppingCart content">
            <h2 className="cartTitle">
                Carrinho de Compras
            </h2>
            <h5 className="shoppingCart__amountItems">
                {items.length === 0 ? 'Seu carrinho está vazio!' : `Você tem ${items.length} items no seu carrinho!`}
            </h5>

            <div className="shoppingCart__content">
                <section className="shoppingCart__items">
                    {items.map((item, index) => {
                        return <Item
                                    key={index}
                                    id={index}
                                    name = {item.name}
                                    description = {item.description}
                                    price = {item.price}
                                    amount = {item.amount}
                                    deleteItem = {handleDeleteItem}
                                />
                    })}
                </section>
                <CloseOrder 
                    amount = {items.length}
                />
            </div>
        </main>
  )
}