import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { signin, signup } from '../../actions';
import Layout from '../../compenents/Layout';
import Card from '../../compenents/UI/Card';
import "./style.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
/**
* @author
* @function Loginpage
**/
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        UniSwap
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    //   marginRight: theme.spacing(10),

    height: "60vh",
  },
  image: {
    backgroundImage:
      "url(https://scontent.falg3-2.fna.fbcdn.net/v/t1.15752-9/164715228_884184072137474_1358892970216371025_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeEU1QwyGorSQFCCLeaz9H015HybIcyBUmDkfJshzIFSYCdWGPdPvVhrdzh3lCHwn91eZMXuzZMFF6SW2sCTpyQB&_nc_ohc=OPcOsCT_8awAX_V22ne&_nc_ht=scontent.falg3-2.fna&oh=7178dcae77a67f374da5f98a95a86c6f&oe=608501BD  )",
    // backgroundRepeat: 'no-repeat',
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(5, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const Loginpage = (props) => {
  const [email, setEmail]  = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();
  const auth = useSelector (state => state.auth);
  
  const userLogin = (e) => {
    e.preventDefault();
    if(email == ""){
      alert("Email is required");
      return;
    }
    if(password == ""){
      alert("password is required");
      return;
    }
    dispatch(signin({email, password}));
  }
  if (auth.authenticated){
    return <Redirect to={'/'} />
  }
  return( 
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Connexion
          </Typography>
    
    {/* <div className="loginContainer"> */}
    
        <form onSubmit={userLogin}>
          {/* <input
          name= "email"
          type= "text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
         /> */}
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="emailc"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
        {/* //  <input
        //   name= "password"
        //   type= "password"
        //   value={password}
        //   onChange={(e) => setPassword(e.target.value)}
        //   placeholder="password"
        //  /> */}
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              name="pwdc"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
                <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Se souvenir de moi"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Connexion
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Mot de passe oublié ?
                </Link>
              </Grid>
              <Grid item>
                <Link href="./signup" variant="body2">
                  {"Vous n'avez pas encore de compte ? Par ici"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={4}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
         /* <div>
           <button>login</button>  
         </div> */
        // </form>
      
        //  </div>
    
   );

 }

export default Loginpage