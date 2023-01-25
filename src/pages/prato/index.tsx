import style from './Prato.module.scss';
import {useParams, useNavigate} from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import Error404 from 'pages/404';
import TagsPrato from 'components/tagsPrato';
import Padrao from 'components/paginaPadrao';


export default function Prato(){
    const {id} = useParams();
    const navigate = useNavigate();
    const prato = cardapio.find(item=>item.id == Number(id));
    if(!prato)return(
        <Error404/>
    );
    return(
        <Padrao>
            <button className={style.voltar} onClick={()=>navigate(-1)}>
                {'< Voltar'}
            </button>
            <section className={style.container}>
                <h1 className={style.titulo}>
                    {prato.title}
                </h1>
                <div className={style.imagem}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={style.conteudo}>
                    <p className={style.conteudo__descricao}>
                        {prato.description}
                    </p>
                    <TagsPrato {...prato}/>
                </div>
            </section>
        </Padrao>
    );
}