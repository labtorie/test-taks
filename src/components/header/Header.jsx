import React, {useState} from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {useTranslation} from "react-i18next";


const Header = () => {
    const { t, i18n } = useTranslation();
    let [lang, setLang] = useState('en');

    const changeLang = (lang) => {
        i18n.changeLanguage(lang).then(()=>setLang(lang))
        lang === 'he' ? document.body.setAttribute('dir', 'rtl') : document.body.setAttribute('dir', 'ltr')
    }


    return <AppBar position="static" color={"transparent"}>
        <Toolbar>
            <Typography >Labtorie Test Task</Typography>
            <FormControl style={{marginLeft: "1rem"}}>
                <Select
                    value={lang}
                    onChange={(e)=>{changeLang(e.target.value)}}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >

                    <MenuItem value={'en'}>English</MenuItem>
                    <MenuItem value={'he'}>עִברִית</MenuItem>
                </Select>
            </FormControl>
        </Toolbar>
    </AppBar>
}
export default Header
