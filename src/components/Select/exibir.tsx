import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Container, Input, EDropDown, ListDropDown, Item } from '../../style/styleSelect'
import { useEffect, useState } from 'react';

const Exibir = ({setItensPerPage, setCurrentPage, itensPerPage} : any) => {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState("");

    function ClickItem(e : any, number : number) {
        setActive(false);
        var text = e.target.textContent;
        setSelected(text);
        setItensPerPage(number);
    } 
        
    useEffect(() => {
        setCurrentPage(0)
    }, [itensPerPage, setCurrentPage])

    return (  
        <Container>
            <Input onClick={(e) => { setActive(!active) }}>
                <p>{selected ? selected : "Exibir..."}</p><FontAwesomeIcon className='faChevronDown' icon={faChevronDown} />
            </Input>
            {
                active && 
                <EDropDown style={{height: "164px"}}>
                    <ListDropDown>
                        <Item onClick={(e) => ClickItem(e, 10)}>10 por página</Item>
                        <Item onClick={(e) => ClickItem(e, 15)}>15 por página</Item>
                        <Item onClick={(e) => ClickItem(e, 20)}>20 por página</Item>
                        <Item onClick={(e) => ClickItem(e, 25)}>25 por página</Item>
                    </ListDropDown>
                </EDropDown>
            }
        </Container>
    );
}
 
export default Exibir;