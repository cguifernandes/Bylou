import { SContato, Form, Cards, Card, Input, Button } from '../../style/styleContato';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMessage, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { IMaskInput } from "react-imask";
import emailjs from '@emailjs/browser'

const Contato = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [message, setMessage] = useState('');

    const handlerSubmit = () => {
        setEmail('');
        setName('')
        setTelefone('')
        setMessage('')
    }

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
            <Form onSubmit={handlerSubmit} action='https://formsubmit.co/louipharma@gmail.com' method='POST'>
            <input type="hidden" name="_next" value="https://bylou.vercel.app/#contato" />
            <input type="hidden" name="_autoresponse" value="Recebi sua mensagem, muito obrigado por entrar em contato! Responderei o mais rápido possível..." />
                <Input>
                    <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='E-mail' 
                    autoComplete='on' 
                    type="email" 
                    name="email"
                    value={email}
                    />
                    <FontAwesomeIcon className='icon' icon={faEnvelope} />
                </Input>
                <Input>
                    <input 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder='Nome' 
                    autoComplete="name" 
                    type="name" 
                    name="nome" 
                    required
                    value={name}
                    />
                    <FontAwesomeIcon className='icon' icon={faUser} />
                </Input>
                <Input>
                    <IMaskInput
                    onChange={(e) => setTelefone(e.target.value)} 
                    autoComplete='false' 
                    mask="+55 (00) 00000-0000"
                    placeholder='Telefone' 
                    type="tel" 
                    name="telefone"
                    value={telefone}
                    />
                    <FontAwesomeIcon className='icon' icon={faPhone} />
                </Input>
                <Input>
                    <textarea 
                    onChange={(e) => setMessage(e.target.value)} 
                    maxLength={250} 
                    placeholder='Mensagem' 
                    name="message" 
                    required
                    value={message}
                    />
                    <FontAwesomeIcon className='icon' icon={faMessage} />
                </Input>
                <Button>Enviar</Button>
            </Form>
        </SContato>
    );
}
 
export default Contato;