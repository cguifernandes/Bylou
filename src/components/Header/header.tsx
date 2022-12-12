import { Head, HeadImg, Ul } from '../../style/styleHeader';
// import Logo from '../../img/image.png'

const Header = () => {
    return (  
        <header>
            <Head>
                <HeadImg>
                    <img alt="Logo imagem"></img>
                </HeadImg>
                <Ul>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <li>Produtos</li>
                </Ul>
            </Head>
        </header>
    );
}
 
export default Header;