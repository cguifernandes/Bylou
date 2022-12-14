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
                    <li><a href='#about'>Sobre</a></li>
                    <li><a href='#'>Produtos</a></li>
                    <li><a href='#'>Contato</a></li>
                </Ul>
            </Head>
        </header>
    );
}
 
export default Header;