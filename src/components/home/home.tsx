import Header from "../header/header"
import './home.css';

function Home() {

  return (
    <>
      <div className="main-container">
      <Header />
      <div className="content-container">
        <div className="left-content"></div>
        <div className="right-content">
          <div className="dashed-line guide-text">
            This is guide text
          </div>
          <h1 className="main-text">
          Be Prepared For The Mountains And Beyond!
          </h1>
          <div className="fx-row scroll-down-text">
            <div>Scroll down</div>
            <span className="material-symbols-outlined pl-4">arrow_downward_alt</span>
          </div>
        </div>
      </div>
      </div>
     
    </>
  )
}

export default Home
