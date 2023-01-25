import {ReactComponent as Img404} from 'assets/img/not_found.svg';
import classNames from 'classnames';
import style from './404.module.scss';
import tema from 'styles/Tema.module.scss';
import {useNavigate} from 'react-router-dom';


export default function Error404(){
    const navigate = useNavigate();
    return(
        <div className={classNames({
            [style.container]:true,
            [tema.container]:true,
        })}>
            <div className={style.voltar}>
                <button onClick={()=>navigate(-1)}>
                    {'< Voltar'}
                </button>
            </div>
            <Img404/>
        </div>
    );
}