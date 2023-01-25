import style from './Item.module.scss';
import { Prato } from 'types/pratos';
import TagsPrato from 'components/tagsPrato';
import { useNavigate } from 'react-router-dom';

export default function Item(props:Prato){
    const navigate = useNavigate();
    const {id,title,description,photo} = props;
    return(
        <div className={style.item} onClick={()=>navigate('/prato/'+id)}>
            <div className={style.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={style.item__descricao}>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <TagsPrato {...props}/>
            </div>
        </div>
    );
}