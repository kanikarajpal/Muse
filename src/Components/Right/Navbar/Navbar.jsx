import Button from "../../SubComponents/Button/Button"
import "./NavbarStyle.css"

export default function Navbar() {
  return (
    <div className="Login-section">
      <Button cls = 'login-btn '>Login</Button>
      <Button cls = 'login-btn'>Signin</Button>
    </div>
  )
}
