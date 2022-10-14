import React from 'react'
import {Avatar, Button, FormControlLabel, Grid,Paper, TextField, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import {Formik,Form, Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'


const Login=()=>{
  

       const paperStyle={padding :20,height:'70vh',width:300, margin:"20px auto"}
       const avatarStyle={backgroundColor:'#1bbd7e'}
       const initialValues ={
        username:'',
        password:'',
        remember:false
       }

       const validationSchema=Yup.object().shape({

        username:Yup.string().email('please enter valid email'),
        password:Yup.string().required('Required')

       })





        const onSubmit=(values,props)=>{
            console.log(values)
        }



        return(
            <Grid>
                <Paper elevation={14} style={paperStyle}>
                    <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                    </Grid>

                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props)=>(

                            <Form>
                               
                    <Field as={TextField} label='Username'  name='username' placeholder='Enter Username' fullWidth required 
                    helperText= <ErrorMessage name='username' /> 
                    />
                    <Field as={TextField} label='Password' name='password' placeholder='Password' fullWidth required 
                     helperText= <ErrorMessage name='password' /> 
                    />
                   

                    <Field as={FormControlLabel}
                    name='remember'
                    control={
                        <Checkbox
                        color='primary'
                        />
                    }
                    label='Remember me'
                    />
                    <Button type='submit' color='primary' variant='contained' fullWidth>Sign In</Button>
                            </Form>
                        )}
                    </Formik>

                    
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