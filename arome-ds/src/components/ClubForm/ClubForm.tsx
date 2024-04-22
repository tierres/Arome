import classes from './ClubForm.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import CircleX from './vectors/circle-x.svg';

const clubMemberSchema = z.object({
  name: z.string().min(3, "*O nome deve ter pelo menos 3 letras"),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  password: z.string()
})

type ClubMembersSchema = z.infer<typeof clubMemberSchema>

export const ClubForm = () => {
    const { register, handleSubmit , formState } = useForm<ClubMembersSchema>({
      resolver: zodResolver(clubMemberSchema),
    })

    console.log(formState.errors.name)

    function handleClubMember(data: ClubMembersSchema) {
      console.log(data)
    }

  return(
    <div className={classes.clubFormContainer}>
      <SectionContainer className={classes.sectionContainer}>
        <div>
          <h1 className={classes.tittle}>
            Faça parte
          </h1>
        </div>
        <div>
          <form className={classes.form} onSubmit={handleSubmit(handleClubMember)}>
            <div className={classes.formDiv}>
              <label className={classes.formLabel} htmlFor="name">Nome: </label>
              <br />
              <input className={classes.formInput + ' ' + (formState.errors.name ? classes.formInputErrors : "")} {...register('name')} />
              {formState.errors.name && (
                <p className={classes.errorsMessage}>{formState.errors.name.message}</p>
              )}
            </div>
            <div className={classes.formDiv}>
              <label className={classes.formLabel} htmlFor="email">E-mail: </label>
              <br />
              <input className={classes.formInput} {...register('email')} />
            </div>
            <div className={classes.formDiv}>
              <label className={classes.formLabel} htmlFor="phone">Telefone: </label>
              <br />
              <input className={classes.formInput} {...register('phone')} />
            </div>
            <div className={classes.formDiv}>
              <label className={classes.formLabel} htmlFor="address">Endereço: </label>
              <br />
              <input className={classes.formInput} {...register('address')} />
            </div>
            <div className={classes.formDiv}>
              <label className={classes.formLabel} htmlFor="password">Senha: </label>
              <br />
              <input className={classes.formInput} {...register('password')} />
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

// Tierres R. Griep