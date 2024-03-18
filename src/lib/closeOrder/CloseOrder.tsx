import './CloseOrder.css';

import { useState } from 'react';

import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

interface Props {
    amount: number,
    totalItems: number
}

export default function CloseOrder(props: Props) {

    const [ship, ] = useState<number>(9.99);

    const shipConverted = ship.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    const convertedPrice = props.totalItems.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    const convertTotal = ship + props.totalItems;
    const convertedTotal = convertTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    return (
        <aside className="shoppingCart__closeOrder">
            <h4 className="closeOrder__title">
                Resumo
            </h4>
            <h5 className="closeOrder__address">
                Frete
            </h5>
            <span className="closeOrder__postalCodeField">
                <span className="postalCodeField__leftSide">
                    <p className="closeOrder__postalCode">
                        CEP
                    </p>
                    <input type="number" name="CEP" id="CEP" className="closeOrder__inputCode" placeholder='00000-000'/>
                    <button className="closeOrder__updateCode">
                        <ReplayOutlinedIcon color='inherit' />
                    </button>
                </span>
                <p className="closeOrder__shippingPrice">{shipConverted}</p>
            </span>
            <p className="closeOrder__city">
                Natal - RN
            </p>
            <span className="closeOrder__items">
                <span className="closeOrder__amountItems">
                    <p>Itens ({props.amount})</p>
                    <p>{convertedPrice}</p>
                </span>
                <span className="closeOrder__totalShippingPrice">
                    <p className='closeOrder__shipping'>Frete</p>
                    <p className='closeOrder__price'>{shipConverted}</p>
                </span>
            </span>
            <span className="closeOrderTotal">
                <p>Total</p>
                <p>{convertedTotal}</p>
            </span>
            <button className="closeOrder__button">
                FECHAR PEDIDO
            </button>
        </aside>
    );
}