
import './App.css';
import Hello from './hello';
import Product from './product';
import Registrasi from './registrasi';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello nama= "Jessen Fallik Bemi" pesan="Selamat Datang Di Kelas IF31"/>
        <Hello/>
        <Product/>
        <Registrasi/>
      </header>
    </div>
  );
}

export default App;
