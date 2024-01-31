import './Header.css'
import vetorA from './Vetores/vector-A.svg'
import vetorR from './Vetores/vector-r.svg'
import vetorO from './Vetores/vector-o.svg'
import vetorM from './Vetores/vector-m.svg'
import vetorE from './Vetores/vector-e.svg'
import vetorPonto from './Vetores/vector-ponto.svg'

export const Header = () => {
  return(
    <div className="Header">
      <img src={vetorA} alt="Vetor A" />
      <img src={vetorR} alt="Vetor R" />
      <img src={vetorO} alt="Vetor O" />
      <img src={vetorM} alt="Vetor M" />
      <img src={vetorE} alt="Vetor E" />
      <img src={vetorPonto} alt="Vetor Ponto" />
      <p>Testando a fonte</p>
    </div>
  );
};