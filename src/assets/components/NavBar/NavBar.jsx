import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ({ cartCount }) => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Ecommerce - Coderhouse
          </Typography>
            <CartWidget cartCount={cartCount} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
