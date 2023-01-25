import cardapio from 'data/cardapio.json';
import style from './Inicio.module.scss';
import tema from 'styles/Tema.module.scss';
import casa from 'assets/img/nossa_casa.png';
import {useNavigate} from 'react-router-dom';
import { Prato } from 'types/pratos';

export default function Inicio(){
    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(()=>0.5 - Math.random()).slice(0,3);
    const navigate = useNavigate();

    const irDetalhes = (prato:Prato) =>{
        navigate(`/prato/${prato.id}`,{state:{prato}});
    };

    return(
        <section>
            <h3 className={tema.titulo}>Recomendações da cozinha</h3>
            <div className={style.recomendados}>
                {
                    pratosRecomendados.map((prato)=>(
                        <div className={style.recomendado} key={prato.id}>
                            <div className={style.recomendado__imagem}>
                                <img src={prato.photo} alt={prato.title} />
                            </div>
                            <button className={style.recomendado__botao} onClick={()=>irDetalhes(prato)}>Ver Mais</button>
                        </div>
                    ))
                }
            </div>
            <h3 className={tema.titulo}>Nossa Casa</h3>
            <div className={style.nossaCasa}>
                <img src={casa} alt="Casa do Filoni"/>
                <div className={style.nossaCasa__endereco}>
                    Rua Algum lugar, 3213 <br/> <br/> Parque Prado - SP
                </div>
            </div>

        </section>
    );
}