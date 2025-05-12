
import './App.css'
import TinderCardStack from './components/TinderCardStack.tsx'
import matchList from './data/sample_carpool_data.ts'


export default function App() {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <TinderCardStack matches={matchList} />
    </div>
  )
  
}

