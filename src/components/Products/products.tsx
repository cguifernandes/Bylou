import { useEffect, useState } from 'react';
import { Produtos, Navegation, Pagination } from '../../style/styleProducts';
import api from '../../api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Utils } from '../Utils/utils';
import Loading from '../Loading/loading';
import Filtros from '../Select/filtros';
import Exibir from '../Select/exibir';
import { useLocation } from 'react-router-dom';

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
    const location = useLocation();
    const name = location.search.split("?")[1]
    
    const [response, setResponse] = useState<Array<TypeProdutos>>();
    const [nenhumResultado, setNenhumResultado] = useState(false);
    const [valores, setValores] = useState<Array<Array<TypeValor>>>();
    const [itensPerPage, setItensPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    
    const pages = Math.ceil(response?.length == null ? 95 : response?.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = response?.slice(startIndex, endIndex);

    useEffect(() => {
        let listValor : any = [];
        api.get(`/${name == null ? "" : name}`).then(({ data }) => {
            setResponse(data)

            for (let i = 0; i < data.length; i++) {
                listValor.push(data[i].Valor)
            }
            setValores(listValor)

        }).catch(error => {
            console.log(error);
        })
    }, [name])

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

    function handleClick(e:React.MouseEvent<HTMLButtonElement>) {
        setCurrentPage(Number(e.currentTarget.value))
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
                    <Filtros setCurrentPage={setCurrentPage} />
                    <Exibir itensPerPage={itensPerPage} setCurrentPage={setCurrentPage} setItensPerPage={setItensPerPage} />
                </div>
            </Navegation>
            <Pagination>
                {
                    pages === 0 ?
                    <Loading />
                    :
                    Array.from(Array(pages), (itens, index) => {
                        return <button key={index} value={index} style={index === currentPage ? {backgroundColor: '#445F2C', color: "#fff"} : {backgroundColor: '#ebebeb'}} onClick={handleClick}>{index + 1}</button>
                    }) 
                }
            </Pagination>
            {
                response?.length === 0 ?
                <Loading />
                :
                <Utils response={currentItens} valores={valores} />
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