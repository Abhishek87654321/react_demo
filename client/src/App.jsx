
import './App.css'
import PostsList from './features/posts/PostsList'


function App() {
  

  return (
    <>
      <div className='app'>
          <h1>React On Rails Blog</h1>
          <p>Find this application layout in client/src/app.jsx</p>
          <PostsList />
      </div>
    </>
  )
}

export default App
