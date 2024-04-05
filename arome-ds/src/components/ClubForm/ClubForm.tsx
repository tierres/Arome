import classes from './ClubForm.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(3, 'Por favor, informe um nome válido')
})

export const ClubForm = () => {
    const { handleSubmit, register } = useForm({
        mode:  'all',
        criteriaMode: 'all',
        resolver: zodResolver(schema),
        defaultValues: {
            name: ''
        }
    });

    return(
        <div className={classes.clubFormContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div>
                    <h1 className={classes.tittle}>
                        Faça parte
                    </h1>
                </div>
                <div>
                    <form className={classes.form}>
                        <div className={classes.formDiv}>
                            <label htmlFor="name">Nome: </label>
                            <br />
                            <input type="text" name='name' required/>
                        </div>
                        <div className={classes.formDiv}>
                            <label htmlFor="email">E-mail: </label>
                            <br />
                            <input type="email" name='email' required/>
                        </div>
                        <div className={classes.formDiv}>
                            <label htmlFor="phone">Telefone: </label>
                            <br />
                            <input type="tel" name='phone'/>
                        </div>
                        <div className={classes.formDiv}>
                            <label htmlFor="address">Endereço: </label>
                            <br />
                            {/* Configurar para autocompletar o endereço colocando CEP */}
                            <input type="text" name='address' required/>
                        </div>
                        <div className={classes.formDiv}>
                            <label htmlFor="password">Senha: </label>
                            <br />
                            <input type="password" name='password' required/>
                        </div>
                        <br />
                        <br />
                        <button className={classes.submitButton} type='submit'>
                            Comece
                        </button>
                    </form>
                </div>
            </SectionContainer>
        </div>
    );
};