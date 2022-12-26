import { useEffect, useState } from 'react';
import { Produtos, Cards, Card, Navegation } from '../../style/styleProducts';
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

const Products = () => {
    let j = -1;

    const [response, setResponse] = useState<Array<TypeProdutos>>();
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


    return (  
        <Produtos id='produtos'>
            <h1>Produtos</h1>
            <Navegation>
                <div className="input">
                    <input type="text" placeholder='Pesquise produtos...'></input>
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
                                    {
                                        valores?.[j].map((objeto) => {
                                            return (
                                                <div className="footer">
                                                    <div style={{ margin: "0 auto" }}>
                                                        {objeto.volume ? <p>Volume: {objeto.volume}</p> : <p>Este produto não tem volume.</p>}
                                                        <p><strong>{objeto.valor}</strong></p>
                                                        {objeto.embalagem ? <p>Embalagem: {objeto.embalagem}</p> : ""}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    } 
                            </Card>
                        )
                    })
                }
            </Cards>
        </Produtos>
    );
}
 
export default Products;