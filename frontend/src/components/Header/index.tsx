import logo from '../../assets/img/logo.svg'
import './styles.css'
export function Header(){
  return(
    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a href="https://github.com/Rafaelrrb"> @Rafaelrrb</a>
            </p>
        </div>
    </header>
  )
}