
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import logo from '../logo.jpg'

function Login({onAuth}) {
  const [pw, setPw] = useState('')
  const handle = () => {
    if (pw === '26061984') onAuth(true)
    else alert('Falsches Passwort')
  }
  return (
    <div className="login">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Autogalerie Stefan Schäfer — Ölmanager (Test)</h2>
      <input placeholder="Passwort" value={pw} onChange={e=>setPw(e.target.value)} type="password" />
      <button onClick={handle}>Login</button>
    </div>
  )
}

function SearchBox({onSearch}) {
  const [q, setQ] = useState('')
  return (
    <div className="searchbox">
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Artikelnummer, EAN oder Freigabe (z.B. VW 504.00)" />
      <button onClick={()=>onSearch(q)}>Suchen</button>
      <button onClick={()=>onSearch('')}>Alle</button>
    </div>
  )
}

function OilRow({o}) {
  return (
    <tr>
      <td>{o.hersteller}</td>
      <td>{o.bezeichnung}</td>
      <td>{o.freigaben}</td>
      <td className={'cat-'+o.kategorie.replace(/\s+/g,'')}>{o.kategorie}</td>
      <td>{o.preis ? o.preis.toFixed(2) : '-' } €</td>
      <td>{o.vk ? o.vk.toFixed(2) : '-' } €</td>
      <td>{o.marge ? o.marge.toFixed(1) : '-' }%</td>
      <td>{o.history && o.history.length ? o.history[o.history.length-1].date : '-'}</td>
    </tr>
  )
}

export default function App(){
  const [auth, setAuth] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    // load local initial dataset
    axios.get('/api/localdb').then(r=>setData(r.data)).catch(()=>{})
  },[])

  const onSearch = async (q) => {
    setLoading(true)
    try {
      const r = await axios.get('/api/search', { params: { q } })
      setData(r.data)
    } catch(e){ alert('Fehler bei Suche') }
    setLoading(false)
  }

  if (!auth) return <Login onAuth={setAuth} />

  return (
    <div className="app">
      <header>
        <img src={logo} alt="logo" />
        <h1>Ölpreisübersicht – Autogalerie Stefan Schäfer</h1>
        <div className="controls">
          <button onClick={()=>window.location.reload()}>Logout</button>
        </div>
      </header>

      <main>
        <SearchBox onSearch={onSearch} />
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th>Hersteller</th><th>Bezeichnung</th><th>Freigaben</th><th>Kategorie</th><th>Ø Preis (netto)</th><th>Dein VK (netto)</th><th>Marge</th><th>Letzte Änderung</th>
              </tr>
            </thead>
            <tbody>
              {data.map((o,idx)=><OilRow o={o} key={idx} />)}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
