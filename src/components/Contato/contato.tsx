import { SContato, Form, Cards, Card, Input, Button } from '../../style/styleContato';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMessage, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

const Contato = () => {
    return (  
        <SContato 
        initial={{ opacity: 0}} 
        whileInView={{ opacity: 1, 
        transition: { duration: 0.4 }}}
        viewport={{ once: true }} 
        id='contato'>
            <h1>Contato</h1>
            <Cards>
                <Card className='whatsapp'>
                    <h3><FontAwesomeIcon className='icon' icon={faWhatsapp} />Whatsapp</h3>
                    <a href='https://api.whatsapp.com/send?phone=5511975748332&text=Ol%C3%A1,%20vi%20um%20produto%20seu%20e%20fiquei%20interessado(a)'>+55 11 97574-8332</a>
                </Card>
                <Card className='email'>
                    <h3><FontAwesomeIcon className='icon' icon={faEnvelope} />E-mail</h3>
                    <a href='malito:louipharma@yahoo.com.br'>louipharma@yahoo.com.br</a>
                </Card>
                <Card className='instagram'>
                    <h3><FontAwesomeIcon className='icon' icon={faInstagram} />Instagram</h3>
                    <a href='https://www.instagram.com/byloucosmetics/'>@byloucosmetics</a>
                </Card>
            </Cards>
            <Form method='POST'>
                <input type="hidden" name="_next" value="tenho que fazeer isso" />
                <input type="hidden" name="_autoresponse" value="Recebi sua mensagem, muito obrigado por entrar em contato! Responderei o mais rápido possível..." />
                <Input>
                    <input placeholder='' autoComplete='on' type="email" name="email" required></input>
                    <label><FontAwesomeIcon className='icon' icon={faEnvelope} />E-mail</label>
                </Input>
                <Input>
                    <input placeholder='' autoComplete="name" type="nome" name="nome" required></input>
                    <label><FontAwesomeIcon className='icon' icon={faUser} />Nome</label>
                </Input>
                <Input>
                    <input autoComplete='false' maxLength={12} placeholder='' type="tel" name="telefone" required/>
                    <label><FontAwesomeIcon className='icon' icon={faPhone} />Telefone</label>
                </Input>
                <Input>
                    <textarea maxLength={250} placeholder='' name="message" required></textarea>
                    <label><FontAwesomeIcon className='icon' icon={faMessage} />Mensagem</label>
                </Input>
                <Button>Enviar</Button>
            </Form>
        </SContato>
    );
}
 
export default Contato;