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

export function Utils({response, valores} : any) {

    let j = -1;
    var Item = 
        <Cards>
                {
                    response?.map((produtos : any) => {
                        j++;
                        return (
                            <Card 
                            initial={{ opacity: 0}} 
                            whileInView={{ opacity: 1, 
                            transition: { duration: 0.4 }}}
                            viewport={{ once: true }} 
                            key={produtos.nome}>
                                    <Title>
                                        <h3>{produtos.nome}</h3>
                                        <h4>{produtos.sabor}</h4>
                                        {
                                            produtos.disponibilidade ? "" : <p className='alert'><strong>(Verificar disponibilidade do produto)</strong></p>
                                        }
                                    </Title>
                                    <Text>
                                        <p>{produtos.descricao}</p>
                                        <p className='alert'>{produtos.alerta}</p>
                                        <div className='more'>
                                            <a target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?phone=5511975748332&text=Olá, gostei do produto (${produtos.nome}), você poderia me dar mais informações?`}><button>Mais informações</button></a>
                                        </div>
                                    </Text>
                                    <Footer>
                                        {
                                            valores?.[j].map((objeto : any) => {
                                                return (
                                                    <div key={objeto.valor} style={{ margin: "0 auto" }}>
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