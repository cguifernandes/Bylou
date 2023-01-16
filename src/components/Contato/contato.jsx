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

    function sendEmail(e) {
        e.preventDefault();

        const templeteParams = {
            name: name,
            telefone: telefone,
            email: email,
            message: message
        }

        emailjs.send('service_gqoah4y', 'template_8vb8ppg', templeteParams, '6H4tRi_ZPt2FimCS5')
        .then((response) => {
            alert('E-mail enviado!', response.status, response.text)
            setEmail('')
            setName('')
            setTelefone('')
            setMessage('')
        }, (err) => {
            console.log(err)
        })
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
            <Form onSubmit={sendEmail}>
                <Input>
                    <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='' 
                    autoComplete='on' 
                    type="email" 
                    name="email"
                    value={email}
                    />
                    <label><FontAwesomeIcon className='icon' icon={faEnvelope} />E-mail</label>
                </Input>
                <Input>
                    <input 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder='' 
                    autoComplete="name" 
                    type="name" 
                    name="nome" 
                    required
                    value={name}
                    />
                    <label><FontAwesomeIcon className='icon' icon={faUser} />Nome</label>
                </Input>
                <Input>
                    <IMaskInput
                    onChange={(e) => setTelefone(e.target.value)} 
                    autoComplete='false' 
                    mask="+55 (00) 00000-0000"
                    placeholder='' 
                    type="tel" 
                    name="telefone"
                    value={telefone}
                    />
                    <label><FontAwesomeIcon className='icon' icon={faPhone} />Telefone</label>
                </Input>
                <Input>
                    <textarea 
                    onChange={(e) => setMessage(e.target.value)} 
                    maxLength={250} 
                    placeholder='' 
                    name="message" 
                    required
                    value={message}
                    />
                    <label><FontAwesomeIcon className='icon' icon={faMessage} />Mensagem</label>
                </Input>
                <Button>Enviar</Button>
            </Form>
        </SContato>
    );
}
 
export default Contato;