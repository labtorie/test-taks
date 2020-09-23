import React from 'react';
import './App.css';
import API from './API/API'
import Header from "./components/header/Header";
import Chart from "./components/charts/Chart";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Table from "./components/table/Table";
import {useTranslation} from "react-i18next";

const App = () => {

    const { t, i18n } = useTranslation();
    // Computing debit sum for every sender
    let chart1Data = API.getData(0, 0).reduce(
        (data, current) => {
            return {...data, [current.senderId]: current.debitAmount + (data[current.senderId] || 0)}
        }, {}
    )
    // Same for credit
    let chart2Data = API.getData(0, 0).reduce(
        (data, current) => {
            return {...data, [current.senderId]: current.creditAmount + (data[current.senderId] || 0)}
        }, {}
    )

    // raw data for grid
    let data = API.getData(0,0)


    return <Box>
        <Header/>
        <Box m={2}>
            <Typography variant={'h4'}>{t('Charts')}</Typography>
            <Grid container>
                <Grid item xs={12} sm={6}><Typography>{t('Debit per Sender')}</Typography><Chart data={chart1Data}/></Grid>
                <Grid item xs={12} sm={6}><Typography>{t('Credit per Sender')}</Typography><Chart data={chart2Data}/></Grid>
            </Grid>
            <Typography variant={'h4'}>{t('Data Grid')}</Typography>
            <Table data={data}/>
        </Box>
    </Box>
}

export default App;
