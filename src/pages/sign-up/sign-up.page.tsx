import { FiUserPlus } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from 'validator'

import CustomButton from '../../components/custom-button/custom-button.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.component'
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './sign-up.styles'
import {
  createUserWithEmailAndPassword,
  type AuthError,
  AuthErrorCodes
} from 'firebase/auth'
import { auth, db } from '../../config/firebase.config'
import { addDoc, collection } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/user.context'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/loading/loading.componnet'

type SignUpFormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors }
  } = useForm<SignUpFormData>()

  const [isLoading, setIsLoading] = useState(false)

  const passwordValue = watch('password')

  const { isAuthenticated } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  const handleSubmitPress = async (data: SignUpFormData) => {
    setIsLoading(true)
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        email: userCredentials.user.email,
        provider: 'firebase',
        createdAt: new Date(),
        updatedAt: new Date()
      })
    } catch (error) {
      console.error('Erro ao criar usuário:', error)
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError('email', { type: 'alredyinUse' })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua conta</SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors.firstName}
              placeholder='Digite seu nome'
              {...register('firstName', { required: true })}
            />
            {errors.firstName?.type === 'required' && (
              <InputErrorMessage>O nome é obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors.lastName}
              placeholder='Digite seu sobrenome'
              {...register('lastName', { required: true })}
            />
            {errors.lastName?.type === 'required' && (
              <InputErrorMessage>O sobrenome é obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Email</p>
            <CustomInput
              hasError={!!errors.email}
              type='email'
              placeholder='Digite seu email'
              {...register('email', {
                required: true,
                validate: (value) => validator.isEmail(value)
              })}
            />
            {errors.email?.type === 'required' && (
              <InputErrorMessage>O e-mail é obrigatório.</InputErrorMessage>
            )}
            {errors.email?.type === 'validate' && (
              <InputErrorMessage>Insira um e-mail válido.</InputErrorMessage>
            )}
            {errors.email?.type === 'alredyinUse' && (
              <InputErrorMessage>
                Este e-mail já está sendo utilizado.
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Password</p>
            <CustomInput
              hasError={!!errors.password}
              type='password'
              placeholder='Digite sua senha'
              {...register('password', {
                required: true,
                minLength: 6
              })}
            />
            {errors.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}
            {errors.password?.type === 'minLength' && (
              <InputErrorMessage>
                A senha precisa ter pelo menos 6 caracteres.
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirme senha</p>
            <CustomInput
              hasError={!!errors.confirmPassword}
              type='password'
              placeholder='Repita sua senha'
              {...register('confirmPassword', {
                required: true,
                validate: (value) => value === passwordValue
              })}
            />
            {errors.confirmPassword?.type === 'required' && (
              <InputErrorMessage>Confirme a senha.</InputErrorMessage>
            )}
            {errors.confirmPassword?.type === 'validate' && (
              <InputErrorMessage>As senhas devem ser iguais.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <CustomButton
            startIcon={<FiUserPlus size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Criar Conta
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}

export default SignUpPage
