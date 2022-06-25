import { Route, Routes } from 'react-router-dom';
import { Event } from './pages/Event';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Event />} />
      <Route path="/event/lesson/:slug" element={ <Event />} />
    </Routes>
  )
}

export default App;
