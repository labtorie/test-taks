import MaterialTable from "material-table";
import React, {useState} from "react";
import {forwardRef} from 'react';
import moment from "moment";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {useTranslation} from "react-i18next";


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};



const Table = (props) => {
    const { t, i18n } = useTranslation();
    let [filter, setFilter] = useState(30);
    const date = moment().subtract(filter, 'days').format('YYYY/MM/DD')
    let data = props.data.filter(
        (item)=>item.date > date
    )


    console.log(date)
    return <div>
        <FormControl>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                <MenuItem value={1}>{t('1 day')}</MenuItem>
                <MenuItem value={7}>{t('1 week')}</MenuItem>
                <MenuItem value={30}>{t('1 month')}</MenuItem>
                <MenuItem value={183}>{t('6 months')}</MenuItem>
                <MenuItem value={365}>{t("1 year")}</MenuItem>
            </Select>
        </FormControl>
        <MaterialTable
            columns={[
                {title: t("Transaction ID"), field: 'transactionId'},
                {title: t("Date"), field: 'date'},
                {title: t("Debit, $"), field: 'debitAmount'},
                {title: t("Credit, $"), field: 'creditAmount'},
                {title: t("Sender ID"), field: 'senderId'},
                {title: t("Receiver ID"), field: 'receiverId'},
            ]}
            data={data}
            title={'Transactions'}
            icons={tableIcons}
            options={{
                search: false
            }}
        />

    </div>
}

export default Table
