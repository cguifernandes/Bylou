import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Input, DropDown, ListDropDown, Item, Line } from '../../style/styleSelect'
import { useState } from 'react';
import api from '../../api'

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

const Menu = (props : any) => {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState("");
    const [response, setResponse] = useState<Array<TypeProdutos>>();
    const [valores, setValores] = useState<Array<Array<TypeValor>>>();

    const facial = ["Limpeza de pele", "Tonificação facial", "Tratamento de pele", "Pós barba e pós depilação"];
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

        let listValor : any = [];
        api.get(`/${text}`).then(({ data }) => {
            setResponse(data);

            for (let i = 0; i < data.length; i++) {
                listValor.push(data[i].Valor)
            }
            setValores(listValor)
        }).catch(error => {
            console.log(error);
        })

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