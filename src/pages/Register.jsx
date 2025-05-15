import { useState } from 'react'
import '../styles/Login.css'

function Register() {
  const [form, setForm] = useState({
    username: '', password: '', name: '', email: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Usuario registrado (simulado)')
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        
        <input name="username" onChange={handleChange} value={form.username} placeholder="Usuario" required />
        <input name="password" type="password" onChange={handleChange} value={form.password} placeholder="Contraseña" required />
        <input name="name" onChange={handleChange} value={form.name} placeholder="Nombre " required />
        <input name="email" type="email" onChange={handleChange} value={form.email} placeholder="Correo" required />
        <button type="submit">Registrarme</button>
        <br />
        <br />
        <p> <a href="/" >Ya tengo cuenta</a></p>
      </form>
    </div>
  )
}


export default Register;
