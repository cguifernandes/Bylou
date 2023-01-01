import { useState } from 'react';
import { Cards, Card, Title, Text, Footer } from '../../style/styleProducts';

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

export function Utils(props : any) {
    const [letras, setLetras] = useState(250);

    let j = -1;
    var Item = 
        <Cards
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" 
        data-aos-duration="1200"
        >
                {
                    props.response?.map((produtos : any) => {
                        j++;
                        return (
                            <Card key={j}>
                                    <Title>
                                        <h3>{produtos.nome}</h3>
                                        <h4>{produtos.sabor}</h4>
                                        {
                                            produtos.disponibilidade ? "" : <p className='alert'><strong>(Verificar disponibilidade do produto)</strong></p>
                                        }
                                    </Title>
                                    <Text>
                                        {
                                            produtos.descricao.length >= letras ? <p>{produtos.descricao}<span>Ver mais</span></p> : <p>{produtos.descricao}</p>
                                        }
                                        <p className='alert'>{produtos.alerta}</p>
                                        <div className='more'>
                                            <a target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?phone=5511975748332&text=Olá, gostei do produto (${produtos.nome}), você poderia me dar mais informações?`}><button>Mais informações</button></a>
                                        </div>
                                    </Text>
                                    <Footer>
                                        {
                                            props.valores?.[j].map((objeto : any) => {
                                                return (
                                                    <div style={{ margin: "0 auto" }}>
                                                        {objeto.volume ? <p>{objeto.volume}</p> : <p>Este produto não tem volume.</p>}
                                                        <p><strong>{objeto.valor}</strong></p>
                                                        {objeto.embalagem ? <p>Embalagem: {objeto.embalagem}</p> : ""}
                                                    </div>
                                                )
                                            })
                                        } 
                                    </Footer>
                                    
                            </Card>
                        )
                    })
                }
            </Cards>
    return Item;
}