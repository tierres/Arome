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
  password: z.string().min(1, "*Crie uma senha de no mínimo 8 caracteres, \nsendo: 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial")
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, "*A senha deve conter no mínimo 8 caracteres, \nsendo: 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial")
})

type ClubMembersSchema = z.infer<typeof clubMemberSchema>

interface ICustomDivForm {
  children: string
  type: keyof FieldErrors<{ name: string; email: string; phone: string; address: string; password: string; }>;
}



export const ClubForm = () => {
    const { register, handleSubmit , formState } = useForm<ClubMembersSchema>({
      resolver: zodResolver(clubMemberSchema),
    })

    console.log(formState.errors.name)

    function handleClubMember(data: ClubMembersSchema) {
      console.log(data)
    }

    const CustomDivForm = (params: ICustomDivForm) => {
      return (
        <div className={classes.formDiv}>
          <label className={classes.formLabel} htmlFor={params.type}>{params.children}</label>
          <input className={classes.formInput + ' ' + (formState.errors[params.type] ? classes.formInputErrors : "")} {...register(params.type)} />

          {formState.errors[params.type] && (
            <p className={classes.errorsMessage}>{formState.errors[params.type].message}</p>
          )}
        </div>
      )
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
            <CustomDivForm type='name'>*Nome: </CustomDivForm>
            <CustomDivForm type='email'>*E-mail: </CustomDivForm>
            <CustomDivForm type='phone'>Telefone: </CustomDivForm>
            <CustomDivForm type='address'>*Endereço: </CustomDivForm>
            <CustomDivForm type='password'>*Senha: </CustomDivForm>
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

// Tierres Griep - Aromê - teste - 27 de abril 20h33