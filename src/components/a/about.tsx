import { Sobre, SText, SImg } from '../../style/styleAbout'

const About = () => {
    return (  
        <Sobre>
            <SImg>
            <svg className='bloob' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#445F2C" d="M52.8,-66.1C65,-52.8,69,-32.8,71.7,-13.3C74.3,6.2,75.7,25.4,69.2,43C62.6,60.7,48.3,76.9,30.3,83.5C12.4,90.1,-9.1,87.1,-24.8,77.3C-40.4,67.6,-50.2,51.1,-57.1,35C-64,18.8,-68.1,3.1,-66.3,-12.5C-64.5,-28,-56.7,-43.2,-44.7,-56.5C-32.7,-69.8,-16.3,-81.3,2,-83.6C20.3,-86,40.7,-79.4,52.8,-66.1Z" transform="translate(100 100)" />
            </svg>

            </SImg>
            <SText>
                <h2>Olá, tudo bem?</h2>
                <p>Meu nome é Louise, sou farmacêutica de formação e especializada em cosmética natural. Comecei amanipular meus próprios cosméticos devido ao alto índice de matérias primas prejudiciais ao nossocorpo e ao meio ambiente. Substâncias altamente alergênicas e tóxicas que podem causarproblemas na pele, distúrbios endócrinos e destruição do meio ambiente. A manipulação decosméticos sempre foi minha paixão a qual estendo a todos que possuem necessidades especiais ouque apenas buscam um produto natural, seguro, eficaz e com alta tecnologia. Meus cosméticos sãoveganos livres de Parabenos, Ftalatos, Corantes e Essências sintéticas, Fenoxietanol, Silicones, Liberadores de formol, BHT, BHA, PEG’s, EDTA, derivados de animais e substâncias nocivas à pele eao meio ambiente.</p>
                <span>By Lou, pensando em você, nos animais e no planeta! COLOCAR ICONS</span>
            </SText>
        </Sobre>
    );
}
 
export default About;