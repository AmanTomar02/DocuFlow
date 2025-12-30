import './App.css'
import Header from './components/Header'
import ImageUpload from './components/ImageUpload'
import ExcelUpload from './components/ExcelUpload'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ImageUpload />
        <ExcelUpload />
      </main>
    </div>
  )
}

export default App
