import { useAuth } from '../context/AuthContext'
import '../styles/Home.css'

function Home() {
  const { user } = useAuth()
  return (
    <div className='home-container'>
      <div className='home-content'>
        <h1>Bienvenido, {user?.username}!</h1>
        <p>Usa el menú lateral para navegar por el portal.</p>
      </div>

    </div>
  )
}

export default Home;
