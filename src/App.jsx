import './style.css';

function App() {

  return (
    <section class="title">
      <header id="title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
      </header>
      <header>
        <h1>MUSIC-PLAYLIST</h1>
      </header>
      <div class="intro">
        <h2>Album No. 1</h2>
        <img src="./playlist.png" alt="no pic" />
      </div>
      <div>
        <article>
          <p>Track 1</p>
          <small>lorem</small>
        </article>
        <article>
          <p>Track 1</p>
          <small>lorem</small>
        </article>
        <article>
          <p>Track 1</p>
          <small>lorem</small>
        </article>
        <article>
          <p>Track 1</p>
          <small>lorem</small>
        </article>
        <article>
          <p>Track 1</p>
          <small>lorem</small>
        </article>
      </div>
    </section>
  )
}

export default App
