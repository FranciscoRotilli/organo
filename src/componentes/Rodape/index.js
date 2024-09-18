import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <div className='sociais'>
                <a href='https://facebook.com' target='blank'><img src='/imagens/fb.png' alt='Facebook' /></a>
                <a href='https://twitter.com' target='blank'><img src='/imagens/tw.png' alt='Twitter' /></a>
                <a href='https://instagram.com' target='blank'><img src='/imagens/ig.png' alt='Instagram' /></a>
            </div>
            <div className='logo'>
                <img src='/imagens/logo.png' alt='Logo Organo'/>
                </div>
            <div className='creditos'>
                <p>Desenvolvido por Alura.</p>
                </div>
        </footer>
    )
}

export default Rodape