import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="nav-menu">
        <li className="nav-menu-item">Home</li>
        <li className="nav-menu-item">Products</li>
        <li className="nav-menu-item">Cart</li>
      </ul>

      <button type="button" className="logout-desktop-btn">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
