import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Input, DropDown, ListDropDown, Item, Line } from '../../style/styleSelect'
import { useState } from 'react';

const Menu = () => {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState("");

    const facial = ["Limpeza de pele", "Tonificação", "Tratamento de pele", "Pós barba e pós depilação"];
    const corporal = ["Sabonetes", "Massagem", "Hidratantes corporais", "Tratamentos específicos", "Desodorantes", "Pasta dental"]  
    const capilar = ["Sólidos", "Líquidos"]  
    
    function ClickItem(e : any) {
        setActive(false);
        var text = e.target.textContent;
        setSelected(text);
        var index = text.indexOf(" ");

        if (index !== -1) {
            text = text.substring(0, index).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        }
        text = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        console.log(text)
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
                            <Item onClick={ (e) => ClickItem(e)}>Facial</Item>
                            <>
                            {
                                facial.map((f) => { 
                                    return (
                                        <Item onClick={(e) => ClickItem(e)}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />{f}</Item>
                                    )
                                })
                            }
                            </>
                            <Line></Line>
                            <Item onClick={ (e) => ClickItem(e)}>Corporal</Item>
                            <>
                            {
                                corporal.map((c) => { 
                                    return (
                                        <Item onClick={ (e) => ClickItem(e)}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />{c}</Item>
                                    )
                                })
                            }
                            </> 
                            <Line></Line>
                            <Item onClick={ (e) => ClickItem(e)}>Baby</Item>
                            <Line></Line>
                            <Item onClick={ (e) => ClickItem(e)}>Capilar</Item>
                            <>
                            {
                                capilar.map((cc) => { 
                                    return (
                                        <Item onClick={ (e) => ClickItem(e)}><FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />{cc}</Item>
                                    )
                                })
                            }
                            </>
                        </ListDropDown>
                    </DropDown>
                )
            }
        </Container>
    );
}
 
export default Menu;