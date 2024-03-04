import './header.css';

function Header() {

    return (
      <>
        <div className='header-container'>
          <div className='header-font'>EWT</div>
          <div>
            <ul className='flex-row header-regular-fonts'>
              <li>
                About Us
              </li>
              <li>
              Equipment
              </li>
              <li>
              Blog
              </li>
            </ul>
          </div>
          <button>
            <span className="material-symbols-outlined header-regular-fonts pr-8">person</span>
            <span className='header-regular-fonts'>Account</span>
          </button>
        </div>
      </>
    )
  }
  
  export default Header
  