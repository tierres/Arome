import { SectionContainer } from "../SectionContainer/SectionContainer"
import classes from './Footer.module.css'

import ReducedLogo from './vectors/arome-reduced-logo.png'
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

interface ICustomNav {
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

const CustomNav = (params: ICustomNav) => {
    return (
        <div>
            <p>{params.children}</p>
            <nav>
                
            </nav>
        </div>
    )
}

export const Footer = () => {
    return (
        <footer className={classes.footerContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div className={classes.upSide}>
                    <div className={classes.reducedLogo}>
                        <img src={ReducedLogo} alt="Aromê" />
                    </div>
                    <div className={classes.institutional}>
                        <p className={classes.tittles}>INSTITUCIONAL</p>
                        <nav>
                            <CustomAnchor>A Aromê</CustomAnchor>
                            <CustomAnchor>Pagamentos</CustomAnchor>
                            <CustomAnchor>Política de privacidade</CustomAnchor>
                            <CustomAnchor>Segurança</CustomAnchor>
                            <CustomAnchor>Seja sócio</CustomAnchor>
                            <CustomAnchor>Seja um franqueado</CustomAnchor>
                            <CustomAnchor>Trocas e devoluções</CustomAnchor>
                        </nav>
                    </div>
                    <div className={classes.contact}>
                        <p className={classes.tittles}>CONTATO</p>
                        <nav>

                        </nav>
                    </div>
                    <div className={classes.paymentsAndSocial}>
                        <div className={classes.socialLogos}>
                            <p className={classes.tittles}>REDES SOCIAIS</p>
                        </div>
                        <div className={classes.paymentsLogos}>
                            <p className={classes.tittles}>FORMAS DE PAGAMENTO</p>
                        </div>
                    </div>
                </div>
                <div className={classes.bottomSide}>
                    <p>
                    Aromê - COMÉRCIO DE CHÁ. Todos os direitos reservados. Proibida reprodução total ou parcial. Preços e estoque sujeito a alterações sem aviso prévio. CNPJ: 14.977.653/0001-29 - Rua Albino Brod - Pelotas/RS
                    </p>
                </div>
            </SectionContainer>
        </footer>
    )
}