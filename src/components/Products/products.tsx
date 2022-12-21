import { useEffect, useState } from 'react';
import { SProducts, Facial } from '../../style/styleProducts';
import api from '../../api'

export type TypeProdutos = {
    linha: "Facial" | "Corporal" | "Baby" | "Capilar",
    subtitulo?: string,
    nome: string,
    Valor: Array<TypeVProdutos>,
    descricao: string,
    disponibilidade: boolean,
    sabor?: string,
    alerta?: string
}

type TypeVProdutos = {
    volume?: number,
    valor: string,
    embalagem?: string
}

const Products = () => {
    const [response, setResponse] = useState<Array<TypeProdutos>>();

    useEffect(() => {
        api.get('/').then(({data}) => {
            setResponse(data)
        })
    }, [])


    return (  
        <SProducts>
            <h1>Linha Facial</h1>
            {
                response?.map((produtos) => (
                    <Facial>
                        <article className='card'>
                                <h2>{produtos.nome}</h2>
                        </article>
                    </Facial>
                ))     
            }
        </SProducts>
    );
}
 
export default Products;