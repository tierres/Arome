import { SectionContainer } from "../SectionContainer/SectionContainer"
import classes from './Footer.module.css'

import AromeWhiteLogo from './vectors/arome-white-logo.svg'
import VisaLogo from './vectors/visa-logo.svg'
import MasterCardLogo from './vectors/mastercard-logo.svg'
import EloLogo from './vectors/elo-logo.svg'
import BoletoLogo from './vectors/boleto-logo.svg'
import InstagramLogo from './vectors/instagram-logo.svg'
import FacebookLogo from './vectors/facebook-logo.svg'
import Xlogo from './vectors/x-logo.png'
import YoutubeLogo from './vectors/youtube-logo.svg'

interface ICustomAnchor {
    to?: string
    children: string
}

const CustomAnchor = (params: ICustomAnchor) => {
    return (
        <a 
            className={classes.navsAnchors} 
            href={ typeof params.to === 'string' ? params.to : '' }
        >
            {params.children}
        </a>
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
                        <CustomAnchor to="/become-a-member">SEJA SÓCIO</CustomAnchor>
                        <CustomAnchor>FALE CONOSCO</CustomAnchor>
                        <CustomAnchor>TROCAS E DEVOLUÇÕES</CustomAnchor>
                    </nav>
                    <nav className={classes.navs}>
                        <CustomAnchor>ENTREGA E PRAZOS</CustomAnchor>
                        <CustomAnchor>TRABALHE CONOSCO</CustomAnchor>
                    </nav>
                    <nav className={classes.navs}>
                        <CustomAnchor to="">ENTRE EM CONTATO</CustomAnchor>
                        <a className={classes.email} href="mailto:contato@arome.com.br">contato@arome.com.br</a>
                        <span className={classes.phone}>(53) 3283-3026</span>
                    </nav>
                </div>
                <div className={classes.paymentsAndSocialContainer}>
                    <div className={classes.leftContainer}>
                        <p>FORMAS DE PAGAMENTO</p>
                        <div className={classes.paymentsLogos}>
                            <img className={classes.logo} src={VisaLogo} alt="" />
                            <img className={classes.logo} src={MasterCardLogo} alt="" />
                            <img className={classes.logo} src={EloLogo} alt="" />
                            <img className={classes.logo} src={BoletoLogo} alt="" />
                        </div>
                    </div>
                    <div className={classes.rightContainer}>
                        <p>REDES SOCIAIS</p>
                        <div className={classes.socialLogos}>
                            <img className={classes.logo} src={InstagramLogo} alt="" />
                            <img className={classes.logo} src={FacebookLogo} alt="" />
                            <img className={classes.Xlogo} src={Xlogo} alt="" />
                            <img className={classes.logo} src={YoutubeLogo} alt="" />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </footer>    
    )
}

// oi