import { Header } from "../../components/shared/Header/Header.tsx";
import { SejaUmSocio } from "../../components/SejaUmSocio/SejaUmSocio.tsx";
import { HowItWorks } from "../../components/HowItWorks/HowItWorks.tsx";
import { ClubForm } from "../../components/ClubForm/ClubForm.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import './BecomeAMember.css'

export const BecomeAMember = () => {
  return (
    <div className='becomeAMemberScreen'>
        <Header />
        <SejaUmSocio />
        <HowItWorks />
        <ClubForm />
        <Footer />
    </div>
  );
}