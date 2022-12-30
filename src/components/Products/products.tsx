import { useEffect, useState } from 'react';
import { Produtos, Navegation } from '../../style/styleProducts';
import Select from '../Select/select'
import api from '../../api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Utils } from '../Utils/utils';
import Loading from '../Loading/loading';

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

const Products = () => {
    const [response, setResponse] = useState<Array<TypeProdutos>>();
    const [nenhumResultado, setNenhumResultado] = useState(false);
    const [valores, setValores] = useState<Array<Array<TypeValor>>>();

    useEffect(() => {
        let listValor : any = [];
        api.get('/').then(({ data }) => {
            setResponse(data)
        
            for (let i = 0; i < data.length; i++) {
                listValor.push(data[i].Valor)
            }
            setValores(listValor)

        }).catch(error => {
            console.log(error);
        })
    }, [])

    function search(target : any) {
        const value = target.value;
        let searchCard : any = [];
        if (value !== "") {
            api.get(`/search/${value}`).then(({ data }) => {
                if (data.length === 0) {
                    setNenhumResultado(true)
                }
                
                else {
                    setNenhumResultado(false)
                }

                for (let i = 0; i < data.length; i++) {
                    searchCard.push(data[i])  
                }
                setResponse(searchCard)
            })  
        }

        else {
            setNenhumResultado(false)
        }
    }

    return (  
        <Produtos id='produtos'>
            <h1>Produtos</h1>
            <Navegation>
                <div className="search">
                    <input onChange={e => search(e.target)} type="text" placeholder='Pesquise produtos...'></input>
                    <div className='icon'><FontAwesomeIcon icon={faSearch} /></div>
                </div>
                <div className="select">
                    <Select />
                </div>
            </Navegation>
            {
                response?.length === 0 && !nenhumResultado ?
                <Loading />
                :
                <Utils response={response} valores={valores} />
            }

            {
                nenhumResultado ?
                <p className="nenhumResultado">Nenhum produto encontrado 😥!</p> 
                :
                ""
            }
        </Produtos>
    );
}
 
export default Products;