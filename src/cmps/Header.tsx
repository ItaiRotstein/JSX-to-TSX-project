import todoLogo from "../assets/img/todo-icon-512x512.png"
import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header-container">
      <header className={'header'}>
        <a>
          <div className="logo-container">
            <img src={todoLogo} alt="" className="logo-img" />
            <h1 className="logo-text"><span>Check</span>Box</h1>
          </div>
        </a>
        <div className="nav-links">
          <a>
            <FaUserAlt />
            <span>Register</span>
          </a>
          <a>
            <FaSignInAlt />
            <span>Login</span>
          </a>
        </div>
      </header >
    </div >
  )
}
export default Header