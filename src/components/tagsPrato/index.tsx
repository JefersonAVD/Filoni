import style from './Tags.module.scss';
import className from 'classnames';
import { Prato } from 'types/pratos';

export default function TagsPrato({category,size,serving,price}:Prato){
    return(
        <div className={style.item__tags}>
            <div className={className({
                [style.item__tipo]:true,
                [style[`item__tipo__${category.label.toLowerCase()}`]]:true
            })}>{category.label}</div>
            <div className={style.item__porcao}>{size}g</div>
            <div className={style.item__qtdpessoas}>Serve {serving} pessoa{serving===1?'':'s'}</div>
            <div className={style.item__valor}>R$ {price.toFixed(2)}</div>
        </div>
    );
}