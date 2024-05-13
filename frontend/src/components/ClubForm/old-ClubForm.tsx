import classes from './ClubForm.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer';
import { ChangeEvent, FormEvent, useState } from 'react';

interface IForm {
    name: string
    email: string
    phone: string
    address: string
    password: string
}

const initialState: IForm = {
  name: '',
  email: '',
  phone: '',
  address: '',
  password: ''

}

export const ClubForm = () => {
  const [fields, setFields] = useState(initialState)

  const handleFieldsChange = (e: ChangeEvent<HTMLInputElement>) => setFields({
    ...fields,
    [e.currentTarget.name]: e.currentTarget.value
  });

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await fetch('https://enf01kcpbh9v.x.pipedream.net/users', {
      method: 'post',
      body: JSON.stringify(fields),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setFields(initialState)
    alert('Cadastro realizado com sucesso.')
  }

  console.log(fields)

  return(
    <div className={classes.clubFormContainer}>
      <SectionContainer className={classes.sectionContainer}>
        <div>
          <h1 className={classes.tittle}>
            Faça parte
          </h1>
        </div>
        <div>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.formDiv}>
              <label className={classes.formLabel} htmlFor="name">Nome: </label>
              <br />
              <input className={classes.formInput} type="text" name='name' value={fields.name} onChange={handleFieldsChange} required/>
            </div>
            <div className={classes.formDiv}>
              <label className={classes.formLabel} htmlFor="email">E-mail: </label>
              <br />
              <input className={classes.formInput} type="email" name='email' value={fields.email} onChange={handleFieldsChange} required/>
            </div>
            <div className={classes.formDiv}>
              <label className={classes.formLabel} htmlFor="phone">Telefone: </label>
              <br />
              <input className={classes.formInput} type="tel" name='phone' value={fields.phone} onChange={handleFieldsChange}/>
            </div>
            <div className={classes.formDiv}>
              <label className={classes.formLabel} htmlFor="address">Endereço: </label>
              <br />
              {/* Configurar para autocompletar o endereço colocando CEP */}
              <input className={classes.formInput} type="text" name='address' value={fields.address} onChange={handleFieldsChange} required/>
            </div>
            <div className={classes.formDiv}>
              <label className={classes.formLabel} htmlFor="password">Senha: </label>
              <br />
              <input className={classes.formInput} type="password" name='password' value={fields.password} onChange={handleFieldsChange} required/>
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