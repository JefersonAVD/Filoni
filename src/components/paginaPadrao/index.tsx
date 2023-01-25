import style from './Padrao.module.scss';
import {Outlet} from 'react-router-dom';
import tema from 'styles/Tema.module.scss';


export default function Padrao({children}:{children:React.ReactNode}){
    return(
        <>
            <header className={style.header}>
                <div className={style.header__text}> A casa das massas</div>
            </header>
            <div className={tema.container}>
                <Outlet/>
                {children}
            </div>
        </>
    );
}