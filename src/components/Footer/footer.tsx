import { Section, Text, Icons, Logo } from "../../style/styleFooter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Img from '../../img/image.png';

const Footer = () => {
    return (  
        <Section>
            <Text>
                <Icons>
                    <a href='https://api.whatsapp.com/send?phone=5511975748332&text=Ol%C3%A1,%20vi%20um%20produto%20seu%20e%20fiquei%20interessado(a)'><FontAwesomeIcon className='icon' icon={faWhatsapp} /></a>
                    <a href='malito:louipharma@yahoo.com.br'><FontAwesomeIcon className='icon' icon={faEnvelope} /></a>
                    <a href='https://www.instagram.com/byloucosmetics/'><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                </Icons>
                <p>Bylou - Cosméticos Naturais - CNPJ</p>
                <p>Endereço: </p>
            </Text>
            <Logo>
                <img src={Img} alt="Logo imagem"></img>
            </Logo>
        </Section>
    );
}
 
export default Footer;