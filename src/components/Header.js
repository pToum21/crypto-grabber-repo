import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from "../CryptoContext";

function Header() {
    const history = useNavigate();

    const {currency, setCurrency} = CryptoState();

    console.log(currency)

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            type: 'dark'
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography 
                            onClick={() => history('/')} 
                            className="header-title"
                            variant="h6"
                        >
                            Crypto Grabber
                        </Typography>
                        <Select
                            variant="outlined"
                            style={{
                                width: 100,
                                height: 40,
                                marginRight: 15,
                            }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            {/* USD */}
                            <MenuItem value={'USD'}>USD</MenuItem>
                            {/* Japanese Yen */}
                            <MenuItem value={'JPY'}>JPY</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header;
