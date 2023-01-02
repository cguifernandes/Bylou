import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Input, DropDown, ListDropDown, Item, Line } from '../../style/styleSelect'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export type TypeProdutos = {
    linha: "Facial" | "Corporal" | "Baby" | "Capilar",
    subtitulo?: string,
    nome: string,
    Valor: Array<TypeValor>,
    descricao: string,
    disponibilidade: boolean,
    sabor?: string,
    alerta?: string
}

type TypeValor = {
    volume?: number,
    valor: string,
    embalagem?: string
}

const Filtros = ({setCurrentPage} : any) => {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState("");

    function handleClick(e : any) {
        setActive(false);
        var text = e.target.textContent;
        setSelected(text);  
        setCurrentPage(0);
    }

    return (  
        <Container>
            <Input onClick={(e) => { setActive(!active) }}>
                <p>{selected ? selected : "Filtros..."}</p><FontAwesomeIcon className='faChevronDown' icon={faChevronDown} />
            </Input>
            {
                active && 
                <DropDown>
                    <ListDropDown>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/"}>Todos</Link></Item>
                        <Line></Line>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?facial"}>Facial</Link></Item>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?limpeza"}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Limpeza de pele</Link></Item>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?tonificacao"}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Tonificação facial</Link></Item>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?tratamento"}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Tratamento de pele</Link></Item>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?pos"}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Pós barba e pós depilação</Link></Item>
                        <Line></Line>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?corporal"}>Corporal</Link></Item>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?sabonetes"}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Sabonetes</Link></Item>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?massagem"}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Massagem</Link></Item>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?hidratantes"}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Hidratantes corporais</Link></Item>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?tratamentos"}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Tratamentos específicos</Link></Item>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?desodorantes"}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Desodorantes</Link></Item>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?pasta"}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Pasta dental</Link></Item>
                        <Line></Line>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?baby"}>Baby</Link></Item>
                        <Line></Line>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?capilar"}>Capilar</Link></Item>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?solidos"}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Sólidos</Link></Item>
                        <Item><Link onClick={(e) => handleClick(e)} to={"/filtros?liquidos"}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Líquidos</Link></Item>
                    </ListDropDown>
                </DropDown>
            }
        </Container>
    );
}
 
export default Filtros;