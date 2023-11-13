import { Container } from '@mui/material';
import NavBar from './assets/components/NavBar/NavBar';
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';
import Footer from './assets/Footer/Footer';
import { useState } from 'react';
import Swal from 'sweetalert2';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((count) => count + 1);
    Swal.fire({
      title: 'Producto agregado al carrito',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  };

  return (
    <>
      <Container disableGutters maxWidth={false}>
        <NavBar cartCount={cartCount} />
        <ItemListContainer title="Productos" addToCart={addToCart}/>
        <Footer />
      </Container>
    </>
  );
}

export default App;
