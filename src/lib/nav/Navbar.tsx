import './Navbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

interface Props {
    itemAmount: number
}

export default function Navbar(props: Props) {

    return (
        <nav className="navbar">
            <span className="navbar__name">
                ShoppingCart FWJS
            </span>
            <span className="navbar__icon">
                <ShoppingCartOutlinedIcon />
                <div className="navbar__icon__counter">
                    {props.itemAmount}
                </div>
            </span>
        </nav>
    );
}