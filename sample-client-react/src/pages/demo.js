import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const VERSION = "0.1.0";
const GREENAWARD_API_BASE_URL = "http://127.0.0.1:61072/service";
const _shop = "greenshop22.myshopify.com";
const _sdkkey = "cdacc7296fc538fa1b1006f2f4c9b832"


async function fetchGreenData(servicePath, method, jwt, payload) {
    const methodUpper = method?.toUpperCase();
    const options = { }

    if(methodUpper && methodUpper!== 'GET') {
        options.method = methodUpper;
        if(payload) options.body = JSON.stringify(payload);
    }

    if(jwt){
        options.headers = {
            Authorization: `Bearer ${jwt}`
        }
    }
   
    const resp = await  fetch(`${GREENAWARD_API_BASE_URL}${servicePath}`, options);

    console.log("fetch resp: ", resp);
    return resp;
}


function Demo() {
    const [units, setUnit] = useState();
    const [jwt, setJwt] = useState();

    useEffect(() => {
        //console.log("aaa")
        const jwt = fetchGreenData("/auth/g-sdk", "POST", undefined, { shop: _shop, secret: _sdkkey })
        setJwt(jwt);
    }, []);

    const renderProducts = () => {
        return _products.map(p => {
            console.log(p.name)
            return <Grid container direction="row" >
                <Grid justifyContent="center">
                    {p.name}
                </Grid>
                <Grid justifyContent="center">
                    {p.id}
                </Grid>
            </Grid>

        })
    }

    return (
        <Container maxWidth="xl">
            <Grid>
                <Button href="/" size="small" >Home</Button>
            </Grid>
            <Grid container direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
                <Grid>
                    <h2>SDK Demo Shop</h2>
                    <div>{ `Store ID: ${_shop}` }</div>
                    <div>{ `SDK Key: ${_sdkkey}` }</div>
                </Grid>
                <Grid container direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
                    {renderProducts()}
                </Grid>
            </Grid>
        </Container>
    );
}

const _products = [
    { name: "p1", id: "demo-p1", co2: 1, water: 0, landfill: 0 },
    { name: "p2", id: "demo-p2", co2: 1, water: 0, landfill: 0 },
    { name: "p3", id: "demo-p3", co2: 1, water: 0, landfill: 0 },
]

export default Demo;
