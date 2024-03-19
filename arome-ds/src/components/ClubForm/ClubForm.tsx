import classes from './ClubForm.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer';

export const ClubForm = () => {
  return(
    <div className={classes.clubFormContainer}>
      <SectionContainer className={classes.sectionContainer}>
        <div>
          <h1 className={classes.tittle}>
            Faça parte
          </h1>
        </div>
        <div>
            <p>
              Nome
              Email
              Telefone
              senha e 
              endereço
            </p>
        </div>
      </SectionContainer>
    </div>
  );
};
