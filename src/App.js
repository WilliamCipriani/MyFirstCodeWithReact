import './App.css';
import {Testimonio} from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre la APP:  
        </h1>
        <Testimonio 
          nombre = 'Shawn Wang'
          pais = 'Singapur'
          imagen = 'shawn'
          cargo = 'Ingeniero de Sofware'
          empresa = 'Amazon'
          testimonio = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.'
        />

        <Testimonio 
          nombre = 'Sarah Chima'
          pais = 'Nigeria'
          imagen = 'sarah'
          cargo = 'Ingeniera de Sofware'
          empresa = 'ChatDesk'
          testimonio = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.'
        />

        <Testimonio 
          nombre = 'Emma Bostian'
          pais = 'Suecia'
          imagen = 'emma'
          cargo = 'Ingeniera de Sofware'
          empresa = 'Spotify'
          testimonio = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.' 
        />
      </div>
    </div>
  );
}

export default App;
