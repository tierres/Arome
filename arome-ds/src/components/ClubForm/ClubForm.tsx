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
              <label htmlFor="name">Nome: </label>
              <br />
              <input type="text" name='name' value={fields.name} onChange={handleFieldsChange}/>
            </div>
            <div className={classes.formDiv}>
              <label htmlFor="email">E-mail: </label>
              <br />
              <input type="email" name='email' value={fields.email} onChange={handleFieldsChange}/>
            </div>
            <div className={classes.formDiv}>
              <label htmlFor="phone">Telefone: </label>
              <br />
              <input type="tel" name='phone' value={fields.phone} onChange={handleFieldsChange}/>
            </div>
            <div className={classes.formDiv}>
              <label htmlFor="address">Endereço: </label>
              <br />
              <input type="text" name='address' value={fields.address} onChange={handleFieldsChange}/>
            </div>
            <div className={classes.formDiv}>
              <label htmlFor="password">Senha: </label>
              <br />
              <input type="text" name='password' value={fields.password} onChange={handleFieldsChange}/>
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