import React from 'react';
import './App.css';
import API from './API/API'
import Header from "./components/header/Header";
import Chart from "./components/charts/Chart";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Table from "./components/table/Table";

const App = () => {

    let chart1Data = API.getData(0, 0).reduce(
        (data, current) => {
            return {...data, [current.senderId]: current.debitAmount + (data[current.senderId] || 0)}
        }, {}
    )
    let chart2Data = API.getData(0, 0).reduce(
        (data, current) => {
            return {...data, [current.senderId]: current.creditAmount + (data[current.senderId] || 0)}
        }, {}
    )

    let data = API.getData(0,0)

    console.log(data)
    return <Box>
        <Header/>
        <Box m={2}>
            <Typography variant={'h4'}>Charts</Typography>
            <Grid container>
                <Grid item xs={12} sm={6}><Typography>Debit per Sender</Typography><Chart data={chart1Data}/></Grid>
                <Grid item xs={12} sm={6}><Typography>Credit per Sender</Typography><Chart data={chart2Data}/></Grid>
            </Grid>
            <Typography variant={'h4'}>Data Grid</Typography>
            <Table data={data}/>
        </Box>
    </Box>
}

export default App;
