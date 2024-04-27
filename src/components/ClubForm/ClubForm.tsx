import classes from './ClubForm.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import CircleX from './vectors/circle-x.svg';

const clubMemberSchema = z.object({
  name: z.string().min(3, "*O nome deve ter pelo menos 3 letras")
    .regex(/^[A-Za-z]+$/i, "*Apenas letras são permitidas"),
  email: z.string().email("*O e-mail deve ser válido"),
  phone: z.string(),
  address: z.string().min(3, "*Um endereço deve ser indicado"),
  password: z.string().min(8, "*Crie uma senha de no mínimo 8 caracteres, \nsendo: 1 letra maiúscula, 1 número e 1 caractere especial")
})

type ClubMembersSchema = z.infer<typeof clubMemberSchema>

interface ICustomDivForm {
  children: string
}

const CustomDivForm = (params: ICustomDivForm) => {
  return (
    <div className={classes.formDiv}>
      <label className={classes.formLabel} htmlFor="name">*Nome: </label>
      <br />
      <input className={classes.formInput + ' ' + (formState.errors.name ? classes.formInputErrors : "")} {...register('name')} />

      {formState.errors.name && (
      <p className={classes.errorsMessage}>{formState.errors.name.message}</p>
      )}
  </div>
  )
}

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
              <label className={classes.formLabel} htmlFor="name">*Nome: </label>
              <br />
              <input className={classes.formInput + ' ' + (formState.errors.name ? classes.formInputErrors : "")} {...register('name')} />
              {formState.errors.name && (
                <p className={classes.errorsMessage}>{formState.errors.name.message}</p>
              )}
            </div>
            <div className={classes.formDiv}>
              <label className={classes.formLabel} htmlFor="email">*E-mail: </label>
              <br />
              <input className={classes.formInput + ' ' + (formState.errors.email ? classes.formInputErrors : "")} {...register('email')} />
              {formState.errors.email && (
                <p className={classes.errorsMessage}>{formState.errors.email.message}</p>
              )}
            </div>
            <div className={classes.formDiv}>
              <label className={classes.formLabel} htmlFor="phone">Telefone: </label>
              <br />
              <input className={classes.formInput + ' ' + (formState.errors.phone ? classes.formInputErrors : "")} {...register('phone')} />
              {formState.errors.phone && (
                <p className={classes.errorsMessage}>{formState.errors.phone.message}</p>
              )}
            </div>
            <div className={classes.formDiv}>
              <label className={classes.formLabel} htmlFor="address">*Endereço: </label>
              <br />
              <input className={classes.formInput + ' ' + (formState.errors.address ? classes.formInputErrors : "")} {...register('address')} />
              {formState.errors.address && (
                <p className={classes.errorsMessage}>{formState.errors.address.message}</p>
              )}
            </div>
            <div className={classes.formDiv}>
              <label className={classes.formLabel} htmlFor="password">*Senha: </label>
              <br />
              <input className={classes.formInput + ' ' + (formState.errors.password ? classes.formInputErrors : "")} {...register('password')} />
              {formState.errors.password && (
                <p className={classes.errorsMessage}>{formState.errors.password.message}</p>
              )}
            </div>
            <br />
            <br />
            <p>Os campos marcados com um <strong>*asterisco</strong> são obrigatórios</p>
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

// Tierres Griep - Aromê