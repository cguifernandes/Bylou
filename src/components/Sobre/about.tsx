import { Sobre, SText, SImg, SSection } from '../../style/styleAbout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faDog, faEarth, faLeaf, faShield, faMicrochip } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (  
        <Sobre id='about'>
            <SImg>
                <svg className='bloob' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#445F2C" d="M52.8,-66.1C65,-52.8,69,-32.8,71.7,-13.3C74.3,6.2,75.7,25.4,69.2,43C62.6,60.7,48.3,76.9,30.3,83.5C12.4,90.1,-9.1,87.1,-24.8,77.3C-40.4,67.6,-50.2,51.1,-57.1,35C-64,18.8,-68.1,3.1,-66.3,-12.5C-64.5,-28,-56.7,-43.2,-44.7,-56.5C-32.7,-69.8,-16.3,-81.3,2,-83.6C20.3,-86,40.7,-79.4,52.8,-66.1Z" transform="translate(100 100)" />
                </svg>
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
                    <span></span>
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