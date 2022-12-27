import { useEffect, useState } from 'react';
import { Produtos, Navegation, Cards, Card } from '../../style/styleProducts';
import api from '../../api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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

    let j = -1;
    const [response, setResponse] = useState<Array<TypeProdutos>>();
    const [nenhumResultado, setNenhumResultado] = useState(false);
    const [valores, setValores] = useState<Array<Array<TypeValor>>>();
    console.log(nenhumResultado)
   
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
            api.get("/").then(({ data }) => {
                setResponse(data)
            })
        }
    }


    return (  
        <Produtos id='produtos'>
            <h1>Produtos</h1>
            <Navegation>
                <div className="input">
                    <input onChange={e => search(e.target)} type="text" placeholder='Pesquise produtos...'></input>
                    <div className='search'><FontAwesomeIcon className='icon' icon={faSearch} /></div>
                </div>
                <div className="select">
                    <select>
                        <option>a</option>
                        <option>b</option>
                        <option>vv</option>
                        <option>d</option>
                    </select>
                </div>
            </Navegation>
            <Cards>
                {
                    nenhumResultado ? 
                    <p className="nenhumResultado">Nenhum produto encontrado 😥!</p> 
                    :
                    response?.length !== 0
                    ? 
                    response?.map((produtos) => {
                        j++;
                        return (
                            <Card key={j}>
                                    <div className="title">
                                        <h3>{produtos.nome}</h3>
                                        <h4>{produtos.sabor}</h4>
                                        {
                                            produtos.disponibilidade ? "" : <p className='alert'><strong>(Verificar disponibilidade do produto)</strong></p>
                                        }
                                    </div>
                                    <div className="text">
                                        <p>{produtos.descricao} ...Ver mais</p>
                                        <p className='alert'>{produtos.alerta}</p>
                                    </div>
                                    <div className="footer">
                                        {
                                            valores?.[j].map((objeto) => {
                                                return (
                                                
                                                        <div style={{ margin: "0 auto" }}>
                                                            {objeto.volume ? <p>Volume: {objeto.volume}</p> : <p>Este produto nÃ£o tem volume.</p>}
                                                            <p><strong>{objeto.valor}</strong></p>
                                                            {objeto.embalagem ? <p>Embalagem: {objeto.embalagem}</p> : ""}
                                                        </div>
                                                    
                                                )
                                            })
                                        } 
                                    </div>
                            </Card>
                        )
                    })
                    :
                    ""
                }
            </Cards>
        </Produtos>
    );
}
 
export default Products;