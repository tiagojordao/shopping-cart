import './Item.css';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { useState } from 'react';

interface Item {
    id: number,
    name: string,
    description: string,
    price: number,
    amount: number,
    deleteItem: (key: number) => void
}

export default function Item(props: Item) {

    const [amount, setAmount] = useState<number>(1);

    const handleAmountAdd = () => {
        setAmount (amount + 1);
    }

    const handleAmountMinus = () => {
        if(amount > 1){
            setAmount (amount - 1);
        }
    }

    const originalPrice = props.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    const priceTimesAmount = amount * props.price;
    const priceConverted = priceTimesAmount.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    return (
        <div className="item">

            <span className="item__data">
                <h3 className="item__name">
                    {props.name}
                </h3>
                <p className="item__description">
                    {props.description}
                </p>
                <h5 className="itemData__price">
                    {originalPrice}    
                </h5>
            </span>

            <span className="item__amount">
                <button className='item__button item__minus' onClick={handleAmountMinus}>
                    <RemoveCircleOutlineOutlinedIcon 
                        color='warning'
                    />
                </button>
                <p className="item__amount__number">
                    {amount}
                </p>
                <button className="item__button item__add" onClick={handleAmountAdd}>
                    <AddCircleOutlineOutlinedIcon
                        color='success'
                    />
                </button>
            </span>

            <span className="item__price">
                {priceConverted}
            </span>
            <span className="item__remove">
                <button className="item__button item__remove" onClick={() => props.deleteItem(props.id)}>
                    <DeleteOutlineOutlinedIcon/>
                </button>
            </span>

        </div>
    );
}