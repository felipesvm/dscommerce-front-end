import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  function handleChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  function validate() {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Campo obrigatório'
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Campo obrigatório'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!validate()) {
      return
    }

    // TODO: substituir por chamada real à API (grant type "password") na etapa do AuthContext.
    console.log('Login com:', formData)
    navigate('/')
  }

  return (
    <div className="mx-auto flex max-w-sm justify-center">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full rounded border border-gray-200 bg-white p-8"
      >
        <h1 className="mb-6 text-center text-lg font-semibold tracking-wide text-gray-700 uppercase">
          Login
        </h1>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`w-full rounded border px-3 py-2 text-sm outline-none ${
              errors.email
                ? 'border-red-400 focus:border-red-500'
                : 'border-gray-300 focus:border-blue-400'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Senha"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            className={`w-full rounded border px-3 py-2 text-sm outline-none ${
              errors.password
                ? 'border-red-400 focus:border-red-500'
                : 'border-gray-300 focus:border-blue-400'
            }`}
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login
