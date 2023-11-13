import { Container, Grid, Typography } from '@mui/material';
import Item from '../Item/Item';

const ItemListContainer = ({ title, addToCart }) => {
  const items = [
    { title: 'Remera', price: '6000.00', image: 'https://montinkantigo.s3.amazonaws.com/data/camisas/react-e-foda-59cbd9c26b0e0.jpg' },
    { title: 'Short', price: '15000.00', image: 'https://media.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/s/h/short-de-argentina-adidas-alternativo-ni_o-violeta-100020hf1487001-1.jpg'},
    { title: 'Medias', price: '3000.00', image: 'https://rossettiar.vtexassets.com/arquivos/ids/203531-800-auto?v=638013851762730000&width=800&height=auto&aspect=true', sinStock : true },
    { title: 'Botines', price: '20000.00', image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/164021424a5c46058057ad7c0079d386_9366/Botines_X_Speedflow_Messi.3_Terreno_Firme_Dorado_GW7420_01_standard.jpg', discount: 20},
    { title: 'Camiseta titular', price: '60000.00', image: 'https://urbanzoneshop.com/cdn/shop/files/Camiseta_titular_Argentina_3_estrellas_2022_Blanco_IB3593_01_laydown.png?v=1692868515' },
  ];
  return (
    <>
      <Container maxWidth="lg">
      <Typography variant="h4" component="h4" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Item {...item} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
      </Container>
    </>
  );
};

export default ItemListContainer;
