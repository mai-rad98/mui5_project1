import React from 'react'
import {Avatar, Button, FormControlLabel, Grid,Paper, TextField, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'

const Login=()=>{

       const paperStyle={padding :20,height:'70vh',width:300, margin:"20px auto"}
       const avatarStyle={backgroundColor:'#1bbd7e'}
        return(
            <Grid>
                <Paper elevation={14} style={paperStyle}>
                    <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                    </Grid>

                    <TextField label='Username' placeholder='Enter Username' fullWidth required />
                    <TextField label='Password' placeholder='Password' fullWidth required />
                   

                    <FormControlLabel
                    control={
                        <Checkbox
                        name='checkedB'
                        color='primary'
                        />
                    }
                    label='Remember me'
                    />
                    <Button type='submit' color='primary' variant='contained' fullWidth>Sign In</Button>
                    <Typography>
                        <Link href='#a'>
                            Forgot password ?
                             </Link>
                    </Typography>
                    <Typography> Do you have an account ?
                        <Link href='#a'>
                            Sign up 
                             </Link>
                    </Typography>
                </Paper>
            </Grid>
        )
}

export default Login;