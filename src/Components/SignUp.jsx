import { Formik, Form } from 'formik'
import imgSignIn from '../assets/signin-img.png'
import { formSchema } from '../Schemas/form'
import '../Styles/SignUp.css'
import { Input } from './Input'

export const SignUp = () => {
  return (
    <section className='SignUp'>
      <div className='right-form-div'>
        <div className='brand'>
          <h2>Easy<span className='color-brand'>Notes</span></h2>
        </div>
        <header className='header-form'>
          <h1 className='title-form'>Crea una cuenta</h1>
          <p className='subtitle-form'>* Más adelante podrá escoger el plan que desee *</p>
        </header>
        <Formik
          initialValues={
          {
            realname: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
          }
        }
          validationSchema={formSchema}
        >
          {({ isSubmitting }) => (
            <Form className='form'>
              <div className='form-div namediv'>
                <Input label='Nombre' name='name' type='text' placeholder='Ingrese su nombre' />
              </div>
              <div className='form-div usernamediv'>
                <Input label='Nombre de usuario' name='username' type='text' placeholder='Ingrese un nombre de usuario' />
              </div>
              <div className='form-div emaildiv'>
                <Input label='Correo electrónico' name='email' type='email' placeholder='Ingrese su correo electrónico' />
              </div>
              <div className='form-div passworddiv'>
                <Input label='Contraseña' name='password' type='password' placeholder='Ingrese su contraseña' />
              </div>
              <div className='form-div confirmpassworddiv'>
                <Input label='Confirme su contraseña' name='confirmPassword' type='password' placeholder='Vuelva a ingresar su contraseña' />
                <ul className='password-config'>
                  <li>Debe contener al menos 8 carácteres</li>
                  <li>Debe contener al menos 1 mayúscula</li>
                  <li>Debe contener al menos 1 número</li>
                  <li>Debe contener al menos 1 carácter especial</li>
                </ul>
              </div>
              <div className='button-div'>
                <button className='btn submit-btn' disabled={isSubmitting} type='submit'>Enviar</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className='image-div'>
        <img src={imgSignIn} alt='' />
      </div>
    </section>
  )
}
