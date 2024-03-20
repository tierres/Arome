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
        <div className={classes.form}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nome: </label>
              <input type="text" name='name' value={fields.name} onChange={handleFieldsChange}/>
            </div>
            <div>
              <label htmlFor="email">E-mail: </label>
              <input type="text" name='email' value={fields.email} onChange={handleFieldsChange}/>
            </div>
            <div>
              <label htmlFor="phone">Telefone: </label>
              <input type="text" name='phone' value={fields.phone} onChange={handleFieldsChange}/>
            </div>
            <div>
              <label htmlFor="address">Endereço: </label>
              <input type="text" name='address' value={fields.address} onChange={handleFieldsChange}/>
            </div>
            <div>
              <label htmlFor="password">Senha: </label>
              <input type="text" name='password' value={fields.password} onChange={handleFieldsChange}/>
            </div>
            <br/>
            <input type='submit'/>
          </form>
        </div>
      </SectionContainer>
    </div>
  );
};