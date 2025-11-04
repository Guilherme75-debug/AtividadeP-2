const imgInstagram = require('./Instagram.png');
const imgGitHub = require('./github.png');
const imgFacebook = require('./linkedin.png');
const imgLinkedin = require('./linkedin.png');

function Footer(){

    return(
        <footer>
            <nav className='menuFooter'>
                <li><a href='home'>Home</a></li>
                <li><a href='projetos'>Projetos</a></li>
                <li><a href='serviço'>Serviço</a></li>
                <li><a href='contato'>Contato</a></li>
            </nav>
            <div className="direitos">
                desenvolvido por: Guilherme França
            </div>
            <div className='redesSociais'>
                </div>
                    <img src={imgInsta} className=""/>
                    
                    </footer>
    )
}

export default Footer;