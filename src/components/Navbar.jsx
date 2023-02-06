import { createTheme } from '@nextui-org/react';

const lightTheme = createTheme({
  type: 'light',
});

return (
  <ShopCard className={lightTheme} />
);


const darkTheme = createTheme({
  type: 'dark',
});

return (
  <ShopCard className={darkTheme} />
);
