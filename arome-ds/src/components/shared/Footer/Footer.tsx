import { SectionContainer } from "../SectionContainer/SectionContainer"
import classes from './Footer.module.css'

import AromeWhiteLogo from './vectors/arome-white-logo.svg'
import VisaLogo from './vectors/visa-logo.svg'
import MasterCardLogo from './vectors/mastercard-logo.svg'
import EloLogo from './vectors/elo-logo.svg'
import BoletoLogo from './vectors/boleto-logo.svg'
import InstagramLogo from './vectors/instagram-logo.svg'
import FacebookLogo from './vectors/facebook-logo.svg'
import TwitterLogo from './vectors/twitter-logo.svg'
import Xlogo from './vectors/x-logo.png'
import YoutubeLogo from './vectors/youtube-logo.svg'

interface ICustomAnchor {
    children: string
    to?: string
}

const CustomAnchor = (params: ICustomAnchor) => {
    return (
        <a className={classes.navsAnchors} href={params.to}>{params.children}</a>
    )
}

export const Footer = () => {
    return(
        <footer className={classes.footerContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div className={classes.logoContainer}>
                    <img src={AromeWhiteLogo} alt="" />
                </div>
                <div className={classes.linksContainer}>
                    <nav className={classes.navs}>
                        <CustomAnchor>A AROMÊ</CustomAnchor>
                        <CustomAnchor>SEGURANÇA</CustomAnchor>
                        <CustomAnchor>PAGAMENTO</CustomAnchor>
                        <CustomAnchor>POLÍTICA DE PRIVACIDADE</CustomAnchor>
                    </nav>
                    <nav className={classes.navs}>
                        <CustomAnchor>SEJA SÓCIO</CustomAnchor>
                        <CustomAnchor>FALE CONOSCO</CustomAnchor>
                        <CustomAnchor>TROCAS E DEVOLUÇÕES</CustomAnchor>
                    </nav>
                    <nav className={classes.navs}>
                        <CustomAnchor>ENTREGA E PRAZOS</CustomAnchor>
                        <CustomAnchor>TRABALHE CONOSCO</CustomAnchor>
                    </nav>
                    <nav className={classes.navs}>
                        <a>ENTRE EM CONTATO</a>
                        <a href="contato@arome.com.br">contato@arome.com.br</a>
                        <a>FALE CONOSCO</a>
                        <a href="">(53) 3283-3026</a>
                    </nav>
                </div>
                <div className={classes.paymentsAndSocialContainer}>
                    <div className={classes.leftContainer}>
                        <p>FORMAS DE PAGAMENTO</p>
                        <div className={classes.paymentsLogos}>
                            <img src={VisaLogo} alt="" />
                            <img src={MasterCardLogo} alt="" />
                            <img src={EloLogo} alt="" />
                            <img src={BoletoLogo} alt="" />
                        </div>
                    </div>
                    <div className={classes.rightContainer}>
                        <p>REDES SOCIAIS</p>
                        <div className={classes.socialLogos}>
                            <img src={InstagramLogo} alt="" />
                            <img src={FacebookLogo} alt="" />
                            <img className={classes.Xlogo} src={Xlogo} alt="" />
                            <img src={YoutubeLogo} alt="" />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </footer>    
    )
}