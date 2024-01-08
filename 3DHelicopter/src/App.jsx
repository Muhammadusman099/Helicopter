import { useState } from 'react'
import './sass/App.scss'
import './sass/helicopter.scss'
function App() {
const [count, setCount] = useState(0)
  return (
    <div className='container'>
      <div className="helicopter">
        <div className="blade">
          <div className="main_rotor"></div>
        </div>
        <div className="mast"></div>
        <div className="cockpit"></div>
        <div className="landing_skid landing_skid_1"></div>
        <div className="landing_skid landing_skid_2"></div>
        <div className="tail_cone"></div>
        <div className="tail_fin"></div>
        <div className="tail_rotor"></div>
      </div>
    </div>
  )
}

export default App
