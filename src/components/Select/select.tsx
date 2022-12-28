import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Input, DropDown, ListDropDown, Item, Line } from '../../style/styleSelect'
import { useState } from 'react';

const Menu = () => {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState("");

    console.log(active)
    
    function teste(e : any) {
        setActive(false)
        setSelected(e.target.textContent)
    }

    return (  
        <Container>
            <Input onClick={(e) => { setActive(!active) }}>
                <p>{selected ? selected : "Filtros..."}</p><FontAwesomeIcon className='faChevronDown' icon={faChevronDown} />
            </Input>
            {
                active && (
                    <DropDown>
                        <ListDropDown>
                            <Item onClick={ (e) => teste(e)}>Facial</Item>
                            <Item onClick={ (e) => teste(e)}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Limpeza de pele</Item>
                            <Item><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Tonificação</Item>
                            <Item><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Tratamento de pele</Item>
                            <Item><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Pós barba e pós depilação</Item>
                            <Line></Line>
                            <Item>Corporal</Item>
                            <Item><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Sabonetes</Item>
                            <Item><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Massagem</Item>
                            <Item><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Hidratantes corporais</Item>
                            <Item><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Tratamentos específicos</Item>
                            <Item><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Desodorantes</Item>
                            <Item><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Pasta dental</Item> 
                            <Line></Line>
                            <Item>Baby</Item>
                            <Line></Line>
                            <Item>Capilar</Item>
                            <Item><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Sólidos</Item>
                            <Item><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />Líquidos</Item>
                        </ListDropDown>
                    </DropDown>
                )
            }
        </Container>
    );
}
 
export default Menu;