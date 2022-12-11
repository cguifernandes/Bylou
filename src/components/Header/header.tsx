import { Head, HeadImg, Ul, HeadNav } from '../../style/styleHeader';

const Header = () => {

    return (  
        <header>
            <Head>
                <HeadImg>
                    <img  alt="Logo imagem"></img>
                </HeadImg>
                <Ul>
                    <li>Jogos</li>
                    <li>Esportes</li>
                    <li>Loja</li>
                </Ul>
                <HeadNav >
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </HeadNav>
            </Head>
        </header>
    );
}
 
export default Header;