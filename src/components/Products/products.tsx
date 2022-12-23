import { useEffect, useState } from 'react';
import { Produtos, Cards, Facial } from '../../style/styleProducts';
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
    let i = 0;
    const [response, setResponse] = useState<Array<TypeProdutos>>();

    useEffect(() => {
        api.get('/facial/limpeza').then(({data}) => {
            setResponse(data)
        })
    }, [])

    return (  
        <Produtos>
            <h1>Linha Facial</h1>
            <h2>Limpeza Facial</h2>
            <Cards>
                {
                    response?.map((produtos) => (
                        <Facial>
                                <div className="title">
                                    <h3>{produtos.nome}</h3>
                                </div>
                                <div className="text">
                                    <p>{produtos.descricao}</p>
                                </div>
                                <div className="footer">
                                    <p>Volume: {produtos.Valor[i].volume} ml</p>
                                        <p><strong>Valor: {produtos.Valor[i].valor}</strong></p>
                                </div>
                        </Facial>
                    ))     
                }
            </Cards>
            <h2>Linha Capilar</h2>
        </Produtos>
    );
}
 
export default Products;