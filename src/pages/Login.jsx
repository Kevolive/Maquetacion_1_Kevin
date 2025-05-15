import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import '../styles/Login.css'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ username })
  }

  return (
    <div className="login-container">
      <div className="login-banner">
        <img src="/assets/banner-login.jpg" alt="Banner" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
        <button type="submit">Iniciar Sesión</button>
        <br />
        <br />
        <p> <a href="/register" >¿No tiene una cuenta?</a></p>
      </form>
    </div>
  )
}
