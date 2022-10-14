import React, { useState } from 'react'
import  Tab  from '@material-ui/core/Tab'
import  Tabs from '@material-ui/core/Tabs'
import Paper  from '@material-ui/core/Paper'

import Box  from '@material-ui/core/Box'
import Typography  from '@material-ui/core/Typography'
import Login from '../components/Login'

const SignInOutConatiner=()=>{

    const [value,setValue]=useState(0)
    const handleChange = (event , newValue) =>{
        setValue(newValue);
    }
    const paperStyle={width:340, margin:"20px auto"}

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }


    return(
        <Paper style={paperStyle}>
         <Tabs
  value={value}
  onChange={handleChange}
  textColor="secondary"
  indicatorColor="secondary"
  aria-label="secondary tabs example"
>
  <Tab value="one" label="Sign in" />
  <Tab value="three" label="Sign Up" />
</Tabs>

<TabPanel value={value} index={0}>
       <Login/>
      </TabPanel>
      <TabPanel value={value} index={1}>
  <Login/>
      </TabPanel>

        </Paper>
    )
}

export default SignInOutConatiner;