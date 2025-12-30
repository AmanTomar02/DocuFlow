import './Header.css'
import { Bell, User } from 'lucide-react'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="3" fill="url(#logoGradient)"/>
              <path d="M8 8h8M8 12h8M8 16h5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <defs>
                <linearGradient id="logoGradient" x1="3" y1="3" x2="21" y2="21">
                  <stop stopColor="#3B82F6"/>
                  <stop offset="1" stopColor="#1D4ED8"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-text">DocuFlow</span>
        </div>
        <div className="header-actions">
          <button className="icon-btn notification-btn">
            <Bell size={20} />
          </button>
          <button className="icon-btn avatar-btn">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

