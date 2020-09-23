import React, {useState} from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


const Header = () => {
    let [lang, setLang] = useState('en');

    return <AppBar position="static" color={"transparent"}>
        <Toolbar>
            <Typography >Header yet</Typography>
            <FormControl style={{marginLeft: "1rem"}}>
                <Select
                    value={lang}
                    onChange={(e)=>{setLang(e.target.value)}}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >

                    <MenuItem value={'en'}>English</MenuItem>
                    <MenuItem value={'he'}>Hebrew</MenuItem>
                </Select>
            </FormControl>
        </Toolbar>
    </AppBar>
}
export default Header
