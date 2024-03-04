import { SectionContainer } from "../SectionContainer/SectionContainer"
import classes from './Footer.module.css'
import AromeWhiteLogo from './vectors/arome-white-logo.svg'

export const Footer = () => {
    return(
        <footer className={classes.blackContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div className={classes.logoContainer}>
                    <img src={AromeWhiteLogo} alt="" />
                </div>
                <div className={classes.linksContainer}>
                    <nav className={classes.navs}>
                        <a href="">A AROMÊ</a>
                        <a href="">SEGURANÇA</a>
                        <a href="">PAGAMENTO</a>
                        <a href="">POLÍTICA DE PRIVACIDADE</a>
                    </nav>
                    <nav className={classes.navs}>
                        <a href="">SEJA SÓCIO</a>
                        <a href="">FALE CONOSCO</a>
                        <a href="">TROCAS E DEVOLUÇÕES</a>
                    </nav>
                    <nav className={classes.navs}>
                        <a href="">ENTREGA E PRAZOS</a>
                        <a href="">TRABALHE CONOSCO</a>
                    </nav>
                    <nav className={classes.navs}>
                        <a>ENTRE EM CONTATO</a>
                        <a href="contato@arome.com.br">contato@arome.com.br</a>
                        <a>FALE CONOSCO</a>
                        <a href="">(53) 3283-3026</a>
                    </nav>
                </div>
                <div className={classes.paymentsAndSocialContainer}>
                    <div>
                        <p>FORMAS DE PAGAMENTO</p>
                    </div>
                    <div>
                        <p>REDES SOCIAIS</p>
                    </div>
                </div>
            </SectionContainer>
        </footer>
    )
}