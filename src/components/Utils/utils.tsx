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
    let j = -1;
    var Item = 
        <Cards>
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
                                        <p>{produtos.descricao} ...Ver mais</p>
                                        <p className='alert'>{produtos.alerta}</p>
                                        <div className='more'>
                                            <button>Mais informações</button>
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