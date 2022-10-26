import * as yup from 'yup'

export const formSchema = yup.object().shape({
  name: yup.string().max(15, 'Máximo 15 carácteres').required('Requerido'),
  username: yup.string().min(5, 'Mínimo 5 carácteres').max(12, 'Máximo 12 carácteres').required(),
  email: yup.string().email('Debe ingresar un email válido').required('Requerido'),
  password: yup.string().matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Formato Inválido').required('Requerido'),
  confirmPassword: yup.string().oneOf([yup.ref('password', null), 'Las contraseñas deben coincidir'])
})
