import {Routes, Route} from 'react-router-dom'
import Home from './assets/pages/Home/Home'
import Team from './assets/pages/Team/Team'
import Programs from './assets/pages/Programs/Programs'
import Events from './assets/pages/Events/Events'

function App() {
  return (
    <>
    <Routes >
      <Route path="" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/events" element={<Events/>} />
    </Routes>
    </>
  )
}

export default App
