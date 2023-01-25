import { useEffect,useState } from 'react';
import Item from './item';
import cardapio from 'data/cardapio.json';
import style from './Itens.module.scss';
import { Cardapio } from 'types/pratos';

interface Props{
    busca:string,
    filtro:number | null,
    ordenador:string
}

export default function Itens({busca,filtro,ordenador}:Props){
    const [lista, setLista] = useState(cardapio);

    function testaBusca(title:string,description:string){
        const regex = new RegExp(busca,'i');
        return regex.test(title) || regex.test(description);
    }

    function testaFiltro(id:number | null){
        if(filtro !== null)return filtro=== id;
        return true;
    }

    function ordenar(lista: Cardapio){
        switch(ordenador){
        case 'porcao':
            return lista.sort((a,b)=>a.size>b.size ?1:-1);
        case 'qtd_pessoas':
            return lista.sort((a,b)=>a.serving>b.serving?1:-1);
        case 'preco':
            return lista.sort((a,b)=>a.price>b.price?1:-1);
        default:
            return lista;
        }   
    }

    useEffect(()=>{
        const novaLista = cardapio.filter(item=>testaBusca(item.title,item.description) && testaFiltro(item.category.id));
        setLista(ordenar(novaLista));
    },[busca, filtro, ordenador]);

    return(
        <div className={style.itens}>
            {
                lista.map((item)=>(
                    <Item key={item.id}
                        {...item}
                    />
                ))
            }
        </div>
    );
}