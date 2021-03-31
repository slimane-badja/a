import React, { useState } from 'react';
import Layout from '../../compenents/Layout';
import Card from '../../compenents/UI/Card';
import { signup }   from '../../actions';
import   { useDispatch, useSelector }   from 'react-redux';
import { Redirect } from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";

/**
* @author
* @function RegisterPage
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
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const RegisterPage = (props) => {
  
    const [nom ,setnom] = useState('');
    const [prenom ,setprenom] = useState('');
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [confirmpassword ,setconfirmPassword] = useState('');
    const [etudiant ,setEtudiant] = useState('');
    // const [enseignant ,setEnseignant] = useState('');
    const auth = useSelector(state => state.auth);
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const registerUser = (e) => {
    e.preventDefault();
    
   
    const user = {
      nom, prenom, email, password, confirmpassword
    }
  
    dispatch(signup(user))
   
  }

  if (auth.authenticated){
    return <Redirect to={'./login'} />
  }




    return(
          <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inscrivez-vous
        </Typography>
           {/* <div className="registerContainer"> */}
             
               <form onSubmit={registerUser}>
                {/* <h3>Sign up</h3> 
                <input
                name="nom" 
                type="text"
                value={nom}
                onChange={(e) => setnom(e.target.value)}
                placeholder="nom"
                /> */}
                <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="nom"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nom"
                autoFocus 
                value={nom}
                onChange={(e) => setnom(e.target.value)}
                />
                {/* <input
                name="prenom" 
                type="text"
                value={prenom}
                onChange={(e) => setprenom(e.target.value)}
                placeholder="prenom"
                /> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Prénom"
                name="prenom"
                autoComplete="lname"
                autoFocus
                onChange={(e) => setprenom(e.target.value)}
                
                />
                {/* <input
                name="email" 
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                /> */}
                </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                {/* <input
                name="password" 
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                /> */}
                </Grid>
                <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="pwd"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                {/* <input
                name="Confirm Password" 
                type="text"
                value={confirmpassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                /> */}
                 </Grid>
                <Grid item xs={12}>
                <TextField
                variant="outlined"
                required
                fullWidth
                name="mpwd"
                label="Confirmer mot de passe"
                type="password"
                id="confirmpassword"
                autoComplete="current-password"
                value={confirmpassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                />

                {/* <div>
                  <button>Sign up</button>
                </div> */}
                 {/* <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    name="fonction"
                    value={enseignant}
                    checked={values.fonction === "Enseignant"}
                    onChange={(e) => setEnseignant(e.target.value)}
                    control={<Radio color="primary" />}
                    label="Enseignant"
                  />
                  <FormControlLabel
                    name="fonction"
                    value={etudiant}
                    checked={values.fonction === "Etudiant"}
                    onChange={(e) => setEtudiant(e.target.value)}
                    control={<Radio color="primary" />}
                    label="Etudiant"
                  />
                </RadioGroup>
              </FormControl> */}
            </Grid>

            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="J'ai lu et accepté les termes et conditions d'utilisation"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Allons-y
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="./login" variant="body2">
                {"Déjà inscrit ? Connectez-vous par ici !"}
              </Link>
            </Grid>
          </Grid>
               </form>
                     

             </div> 
        
          <Box mt={5}>
        <Copyright />
      </Box>
    </Container>    
        

      
    
   );

 }

export default RegisterPage