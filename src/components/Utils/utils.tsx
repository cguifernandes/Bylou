import { Cards, Card } from '../../style/styleProducts';
import { motion } from 'framer-motion'

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
                            <Card as={motion.div} whileHover={{ scale: 0.98, transition: { duration: 0.3 }}}  key={j}>
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
                                            props.valores?.[j].map((objeto : any) => {
                                                return (
                                                    <div style={{ margin: "0 auto" }}>
                                                        {objeto.volume ? <p>Volume: {objeto.volume}</p> : <p>Este produto nÃ£o tem volume.</p>}
                                                        <p><strong>{objeto.valor}</strong></p>
                                                        {objeto.embalagem ? <p>Embalagem: {objeto.embalagem}</p> : ""}
                                                    </div>
                                                )
                                            })
                                        } 
                                        <button>a</button>
                                    </div>
                            </Card>
                        )
                    })
                }
            </Cards>
    return Item;
}