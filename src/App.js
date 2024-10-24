//EJERCICIO 1------------------------------------------------------------------------------------------------------
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import styles from "./styles/punto1.module.css"

// function Inicio() {
//   return <div className={styles.rainbowBackground}><h1>Bienvenido a la página de inicio</h1></div>;
// }

// function Sobre() {
//   return <div className={styles.rainbowBackground}><h1>Acerca de nosotros</h1></div>;
// }

// function App() {
//   return (
//     <Router>
//       <div className={styles.navbar}>
//         <Link to="/inicio" className={styles.navButton}>Inicio</Link>
//         <Link to="/sobre" className={styles.navButton}>Sobre</Link>
//       </div>
//       <Routes>
//         <Route path="/inicio" element={<Inicio />} />
//         <Route path="/sobre" element={<Sobre />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


//EJERCICIO 2------------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import styles from "./styles/punto2.module.css"

// function Contador() {
//   const [contador, setContador] = useState(0);

//   useEffect(() => {
//     console.log(`El contador ha cambiado a: ${contador}`);
//   }, [contador]);

//   return (
//     <div className={styles.container}>
//       <div className={styles.counterBox}>
//       <h1>Contador: {contador}</h1>
//       <button onClick={() => setContador(contador + 1)}>Incrementar</button>
//       <button onClick={() => setContador(contador - 1)}>Decrementar</button>
//       </div>
//     </div>
//   );
// }

// export default Contador;



//EJERCICIO 3------------------------------------------------------------------------------------------------------
// import React from 'react';
// import { ThemeProvider, useTheme } from './components/ThemeContext';
// import styles from './styles/punto3.module.css'; 

// const ThemeToggleButton = () => {
//     const { toggleTheme } = useTheme();

//     return (
//         <button className={styles.button} onClick={toggleTheme}>
//             Cambiar tema
//         </button>
//     );
// };

// const ThemedText = () => {
//     const { theme } = useTheme();

//     return (
//         <h1 className={theme === 'light' ? styles['text-light'] : styles['text-dark']}>
//             Modo {theme}
//         </h1>
//     );
// };

// function App() {
//     return (
//         <ThemeProvider> 
//             <MainContent />
//         </ThemeProvider>
//     );
// }

// const MainContent = () => {
//     const { theme } = useTheme();
    
//     return (
//         <div className={`${styles.App} ${theme === 'dark' ? styles.dark : styles.light}`}>
//             <ThemedText />
//             <ThemeToggleButton />
//         </div>
//     );
// }

// export default App;



//EJERCICIO 4------------------------------------------------------------------------------------------------------
// import React from 'react';
// import { CounterApp } from './components/Counter';

// function App() {
//     return (
//         <div className="App">
//             <CounterApp />
//         </div>
//     );
// }
// export default App;



//EJERCICIO 5------------------------------------------------------------------------------------------------------
//Probar primero el test 

import React from 'react';
import Boton from './components/Button';

function App() {
  return (
    <div>
      <Boton />
    </div>
  );
}

export default App;


