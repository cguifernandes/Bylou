import { Sobre, SText, SImg, SSection } from '../../style/styleAbout';
import NatureAnimation from '../../assets/LottieJson/nature.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faDog, faEarth, faLeaf, faShield, faMicrochip, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Player } from '@lottiefiles/react-lottie-player';

const About = () => {
    return (  
        <Sobre 
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" 
        data-aos-duration="1200"
        id='about'>
            <SImg>
                <Player 
                    src={NatureAnimation}
                    loop
                    autoplay
                    className="player"
                />
            </SImg>
            <SText>
                <h2>Olá, tudo bem?</h2>
                <p>Meu nome é Louise, sou farmacêutica de formação e especializada em cosmética natural. Comecei a manipular meus próprios cosméticos devido ao alto índice de matérias primas prejudiciais ao nosso corpo e ao meio ambiente. Substâncias altamente alergênicas e tóxicas que podem causar problemas na pele, distúrbios endócrinos e destruição do meio ambiente. A manipulação de cosméticos sempre foi minha paixão a qual estendo a todos que possuem necessidades especiais ou que apenas buscam um produto natural, seguro, eficaz e com alta tecnologia. Meus cosméticos são veganos livres de Parabenos, Ftalatos, Corantes e Essências sintéticas, Fenoxietanol, Silicones, Liberadores de formol, BHT, BHA, PEG’s, EDTA, derivados de animais e substâncias nocivas à pele e ao meio ambiente.</p>
                <span>By Lou, pensando em você, nos animais e no planeta! <FontAwesomeIcon className='icon' icon={faHeart} /><FontAwesomeIcon className='icon' icon={faDog} /><FontAwesomeIcon className='icon' icon={faEarth} /></span>
            </SText>
            <SSection>
                <div className="item">
                    <span><FontAwesomeIcon className='icon' icon={faLeaf} /></span>
                    <div className="text">
                        <p>Produto</p>
                        <h3>Natural</h3>
                    </div>
                </div>
                <div className="item">
                    <span><FontAwesomeIcon className='icon' icon={faShield} /></span>
                    <div className="text">
                        <p>Sendo 100%</p>
                        <h3>Seguro</h3>
                    </div>
                </div>
                <div className="item">
                    <span><FontAwesomeIcon className='icon' icon={faCheckCircle} /></span>
                    <div className="text">
                        <p>E 100%</p>
                        <h3>Eficaz</h3>
                    </div>
                </div>
                <div className="item">
                    <span><FontAwesomeIcon className='icon' icon={faMicrochip} /></span>
                    <div className="text">
                        <p>Usando uma</p>
                        <h3>Alta tecnologia</h3>
                    </div>
                </div>
            </SSection>
        </Sobre>
    );
}
 
export default About;