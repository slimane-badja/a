import React, { useEffect, useState } from 'react';
import {Grid,Box,Hidden,Container,Paper,Tabs,Tab,Typography,Avatar,TextField,ListItem,ListItemText,ListItemAvatar
,Fab,Badge,IconButton,InputAdornment,List,Divider} from '@material-ui/core';
import { makeStyles, useTheme ,withStyles, } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import NavBar from '../../drawer';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import  { useDispatch, useSelector } from 'react-redux';
import { getRealtimeConversations, getRealtimeUsers, updateMessage } from '../../actions';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      fontWeight: 400,
      fontStyle: 'normal',   
      fontSize: 14,
      lineHeight: 1.8,
      padding: 0,
      margin: 0,   
      color: '#777D74',
      overflow : 'hidden',
      background: '#fafafb',

    },
    input: {
        display: 'none',
      },
     
    paper: {
        marginTop:80,
       padding:0,
    
        flexDirection: 'inherit',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/img.jpg'})`,
         borderRadius:30,
      },
      tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        height: 520,
        width:200,
        backgroundColor:'white'
      },
     users:{
         '& .MuiTab-wrapper':{
            flexDirection: 'inherit',
         }
       
     },
     profilInfo:{
         marginLeft:20,
         height: 500,
         borderRadius:20
     },
     image:{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 70,
        width: 70,
        bottom: 45,
        boxShadow: '0 6px 21px 0 rgb(0 0 0 / 12%)',
        border: '1px solid white',
    
      },
      titre:{
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 20,
        textAlign: 'center',
        position:'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        width:'auto',
        height:50,
        left: 60,
        right: 80,
        bottom: 170,
        color:'black',
        textDecoration:'none',
      },
      myprofil:{
          width:65,
          height:65,
          borderRadius:10,
      },
      send:{
        borderRadius:30,
        '& .MuiInputBase-root':{
          borderRadius: 30,
        margin:'auto',
      
        width:700,
        }
      },
      messageRight:{
        background: '#50b5ff',
    display: 'inline-block',
    padding: '10px 10px',
    borderRadius:'15px 15px 0px 15px' ,
    margin: 7,
    color:'white'
      },


      messageLeft:{
        background: '#afb5b8c2',
    display: 'inline-block',
    padding: '10px 10px',
    borderRadius:'15px 15px 15px 0px',
    margin: 7,
    color:'white'
      },
  }));



  const StyledBadgeOnline = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  


  const StyledBadgeOffline = withStyles((theme) => ({
    badge: {
      backgroundColor: '#ff9800',
      color: '#ff9800',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
     
    },
   
  }))(Badge);
  



  //l'affichage de l'utilisateur qu'il soit connectÃ© ou pas 
  const User = (props) => {

    const {user, onClick} = props;
    let online =user.isOnline;
    if (online) {
    return(
                          <ListItem  onClick={() => onClick(user)} >
                                  
                          <ListItemAvatar>
                             < StyledBadgeOnline
                      overlap="circle"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      variant="dot"
                    >
                      <Avatar src={user.imageUrl} alt="" />
                    </ StyledBadgeOnline>
                    </ListItemAvatar>
                            <ListItemText >
                            {user.nom} {user.prenom}
                            </ListItemText>
                          </ListItem>)

    } else {
      return(
      <ListItem  onClick={() => onClick(user)} >
                                  
                          <ListItemAvatar>
                             < StyledBadgeOffline
                      overlap="circle"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      variant="dot"
                    >
                      <Avatar src={user.imageUrl} alt="" />
                    </ StyledBadgeOffline>
                    </ListItemAvatar>
                            <ListItemText >
                            {user.nom} {user.prenom}
                            </ListItemText>
                          </ListItem>)

    }
     
  
  }
 
 
  
  



export default function Chat() {
    const classes = useStyles();
    const theme = useTheme();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const [chatStarted, setChatStarted] = useState(false);
  const [chatUser, setChatUser] = useState('');
  const [message, setMessage] = useState('');
  const [userUid, setUserUid] = useState(null);
  




  let unsubscribe;
  useEffect(() => {
      unsubscribe = dispatch(getRealtimeUsers(auth.email))
      .then(unsubscribe => {
        return unsubscribe;
      })
      .catch(error =>{
        console.log(error);
      })
  }, []);
//compenentWillUnmount pour une faute!!
useEffect(() => {
  return () => {
    //cleanup
    unsubscribe.then(f => f()).catch(error => console.log(error));
  }

}, []);

//initialisation de la conversation 
const initChat = (user) => {

  setChatStarted(true)
  setChatUser(`${user.nom} ${user.prenom} `)
  setUserUid (user.email);

  console.log(user);

  dispatch(getRealtimeConversations({ uid_1: auth.email, uid_2: user.email }));
}
// la conversation
const submitMessage =(e) => {
const msgObj = {
  user_uid_1: auth.email,
  user_uid_2: userUid,
  message
}

if(message !==""){
  dispatch(updateMessage(msgObj))
  .then(() => {
    setMessage('')
  });
}
 //console.log(msgObj);
}



//l'affichage de la liste des utilisateurs connectÃ© et non connÃ©ctÃ©s
    return (
        <div  className={classes.root}>
             <Grid container  >
      
      <Container maxWidth="lg"  className={classes.paper} >
    
      <Grid item lg={12} style={{display:'flex'}}>

     <Grid>
       <NavBar/>
     </Grid>
      
      <Paper style={{height:500,borderRadius:20}}>
          <Box display='flex' style={{padding:20}}>
          <img className={classes.myprofil} src={process.env.PUBLIC_URL + '/p5.jpg'}/>
          <Typography
           style={{fontWeight:600,fontSize:15,textAlign:'center',margin: 'auto'}}>{auth.nom} {auth.prenom}</Typography>
          </Box>
          <Divider/>
          <Typography style={{textAlign:'center',padding:20,fontWeight:600}}>Discussions</Typography>
<List style={{height:310,overflowY:'auto'}}>
{
user.users.length > 0 ?
               user.users.map(user => {
                 return (
                 <User
                 onClick={initChat} 
                 key={user.email} 
                 user={user} />
                 );
               }) : null
             }  

</List>
      </Paper>
      {/****************************************************************************** */}



      <Grid item lg={8} minWidth="md" >
      

             <Box style={{height:450,overflowY:'auto',}}>
             {
               chatStarted ?
               user.conversations.map(con =>
               { if (con.user_uid_1 == auth.email) {


                  return(
                  <Box style={{ textAlign: 'right',marginRight:20}}>
                  <Typography  className={classes.messageRight }  >{con.message}</Typography>
            </Box>
                  )}
                  else {
                    return(
                    
                        <Box className={classes.messageLeft} style={{ textAlign: 'left',marginLeft:20}}>
                        <Typography  >{con.message}</Typography>
                  </Box>
                    )
                  }


                }
                )
                : null
             }
             </Box>








<Box >
{
                chatStarted ?
                <Box >
                  
                            <TextField
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                     placeholder="write message"
                    multiline
                    fullWidth
                    margin="dense"  
                    variant="outlined"
                   className={classes.send}
                    InputProps={{endAdornment: 
                        <InputAdornment position="end">
                          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                    <IconButton style={{ color: '#ff5722',}}>
                        <AttachFileIcon  />
                        </IconButton>
                    </label>
                              
                    <IconButton style={{ color:'rgb(5 19 95 / 70%)',}}  onClick={submitMessage}>
                  <SendIcon/>
                    </IconButton>
                      </InputAdornment>,
                    }}

                    />
                  

                  
                 
                </Box>  : null
                  
                        }        
    

      </Box>

      </Grid>
     <Paper className={classes.profilInfo}>


     <img style={{ height: 100,width:230,objectFit: 'cover'}} src={process.env.PUBLIC_URL + '/img11.jpeg'}/>
      <Avatar className={classes.image} src={process.env.PUBLIC_URL + '/p5.jpg'}/>
      <Link to={"/profil"} className={classes.titre}>
      {
          chatStarted ? chatUser : ''
        }
      </Link>
     
       
     </Paper>
      
      </Grid>


      </Container>
      </Grid>
        </div>
    )
}
