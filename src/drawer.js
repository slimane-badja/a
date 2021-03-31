import React from 'react';
import clsx from 'clsx';
import { makeStyles,Box, useTheme ,Drawer,AppBar,Toolbar,List,CssBaseline,StylesProvider, BottomNavigation,Collapse,
IconButton,InputBase,ListItemIcon,ListItem,Badge,Avatar,Button,Tooltip,MenuItem,Hidden,BottomNavigationAction,
 Typography ,Menu,} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {AiFillMessage} from "react-icons/ai";
import {FaHome} from "react-icons/fa";
import {HiUserGroup} from "react-icons/hi"
import SearchIcon from '@material-ui/icons/Search';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {CgProfile} from "react-icons/cg";
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter, Switch, Route,Link} from 'react-router-dom'
import { logout } from './actions';
import { useDispatch,useSelector } from 'react-redux';


                         {/************css de page ***********/}
const drawerWidth = 300;
 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .MuiList-padding':{
      paddingTop:0,
     }
  },
 
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'#fff',
    
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
    marginBottom:10,
  },
  title: {
    width: 100,
    marginBottom:10,
    color: 'black',
 

  },
 hide:{
display:'none',
 },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  name:{
    marginTop: 12 ,
    marginLeft: 10 ,
    marginBottom:18,
    cursor: 'pointer',
    fontSize:17,
    color:'black',
    fontWeight:500,
    height:20,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  
  search: {
    flexGrow: 0.3,
    height: 40,
    position: 'relative',
    borderRadius: 15,
    backgroundColor:' #f5fbff',
    border:'1px solid #f1f1f1',
    bottom: 5,
    height: 34,
    width: 65,
    [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    },
  },
  searchC: {
    
    height: 35,
    position: 'relative',
    borderRadius: 15,
    backgroundColor:'#80808029',
    border:'1px solid #f1f1f1',
    bottom: 5,
    left: 30,
    width: 300,
    [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#a09e9e',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  drawerPaper:{
    backgroundColor:'#50b5ff',
    width:230,
    overflowX:'hidden',
  },  
  drClose:{
    width:65,
    backgroundColor:'#50b5ff',
    overflowX:'hidden',

  },
  liste:{
  paddingTop:0,
  },
  bottomNavBar:{
    top: 55,
    position:'fixed',
    width:'100%',
    left: 0,
    height: 100,
    marginTop: 0,
    paddingTop: 15,
    paddingBottom: 20,
    display: 'block',
  },
  grow: {
    flexGrow: 1,
  },
  navigationBtn:{
   
    fontSize:27,
  },
}));
 





          {/**************debut de fonction *********** */}
const NavBar= () => {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const  auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleClick = () => {
    
    setOpen(!open);
  };
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl1(null);
  };
  
  
  const [openR, setOpenR] = React.useState(false);

  const handleClickR = () => {
    setOpenR(!openR);
  };
   return (
      < StylesProvider  injectFirst >
   <div className={classes.root}>
       <CssBaseline />
                          {/********top menu *********/}

      <AppBar style={{backgroundColor:'#fff',height: 55, }} position="fixed" className={classes.appBar}>
                    
            <Toolbar>
            <Hidden only={['sm', 'xs']}>
                <IconButton
                      color="inherit"aria-label="open drawer"
                      onClick={handleClick}edge="start" className={clsx(classes.menuButton)}
                      >
                        <MenuIcon style={{color:'#50b5ff'}}/>
                </IconButton>
                    
                </Hidden>
                <img alt="logo" src={process.env.PUBLIC_URL + '/images/logo4.jpg'}
                            style={{width: 87, height: 53,marginBottom:7}} />

                            {/********barre de recherche *********/}


                            <Hidden only={['xs','sm']}>
                <div className={classes.search}>

                   <div className={classes.searchIcon}>
                          <SearchIcon style={{color:'#50b5ff'}} />
                    </div>

                    <InputBase
                       placeholder="Search…"
                      classes={{root: classes.inputRoot,input: classes.inputInput,}}inputProps={{ 'aria-label': 'search' }}
                        />

                </div>

                </Hidden>

             <Hidden only={['lg','md','xl']}>  <IconButton  onClick={handleClickR} > 
               <SearchIcon style={{color:'#50b5ff'}} /></IconButton> </Hidden>
               
                       
                         {/********right buttons *********/}

               <Box display="flex"justifyContent="flex-end" flexGrow= {1}  style={{marginBottom: 10}}   >

               <Hidden only={['sm','xs']}> 
                   <Tooltip disableFocusListener title="Profil">

                        <Button style={{textTransform:'lowercase'}}>
                           <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/avatar.jpg'}
                            style={{width: 40, height: 40}} />
                            <h6 href="#text-buttons" className={classes.name}> {auth.FirstName} {auth.LastName} </h6>      
                        </Button>

                   </Tooltip>
                   </Hidden>

                <Hidden only={['md','xl','lg']}>    
                  <Button style={{top: 7,left: 10
                  }}>
                   <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/avatar.jpg'}
                            style={{width: 35, height: 35}} />
                            
                            </Button>
                              </Hidden>

                             
                  <Tooltip disableFocusListener title="notifications">

                     <IconButton aria-label="show new notifications"  button onClick={handleClick1} aria-controls="notification"
                     style={{color:'#50b5ff',paddingTop:0,paddingBottom: 0,height: 45,top:12,}}>
                         
                          {/********notifications number*********/}

                          <Badge badgeContent={7} color="secondary">
                            <NotificationsIcon 
                             />
                          </Badge>
                     </IconButton>  

                  </Tooltip>
                    


                          {/********notifications liste*********/}


                     <Menu  

                          id="notification"
                          anchorReference="anchorPosition"
                          anchorPosition={{ top: 70, left: 1180 }}
                        
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}>


                         <Link href="#" color="inherit">

                                <MenuItem>

                               

                                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/d5.jpg'} 
                                 style={{ width: 50,height: 50, marginRight:25 }} />

                                <Typography>
                                <a  style={{ fontWeight: 600,marginRight:5}}>Paule Molive</a> a ajouté une nouvelle publication<br/>
                                <small>Il y a 1 minute </small> 
                                </Typography>
                                   
                                      
                                  </MenuItem>
                                  
                          </Link>


                          <Link href="#" color="inherit">
                                   <MenuItem>
   

                                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/p5.jpg'} 
                                 style={{ width: 50,height: 50, marginRight:25 }} />

                                        <Typography>
                                        <a style={{ fontWeight: 600,marginRight:5}}>Anna Sthesia</a> Vous a envoyé une demande d'abbonement<br/>
                                        <small>Il y a 1 heure</small> 
                                        </Typography>
                                   
    
                                  </MenuItem>

                             </Link>



                             <Link href="#" color="inherit">
                                  <MenuItem>
   

                                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/img2.jpg'} 
                                 style={{ width: 50,height: 50, marginRight:25 }} />

                                        <Typography>
                                        <a style={{ fontWeight: 600,marginRight:5}}>Master 2 ISI</a> Votre demande d'adhésion a été approuveé<br/>
                                        <small>Il y a 1 heur</small> 
                                        </Typography>
                                   
    
                                  </MenuItem>
                             </Link>
                                  
                              </Menu>

                      
                         
                  <Tooltip disableFocusListener title="Message">

                     <IconButton aria-label="show new mails"
                     
                     button onClick={handleClick2} aria-controls="messages"
                     style={{color:'#50b5ff',paddingTop: 0,paddingBottom: 0,height: 45,top: 12,}}>
                          
                           {/********messages number *********/}


                          <Badge badgeContent={4} color="secondary">
                            <AiFillMessage  />
                          </Badge>
                     </IconButton>

                  </Tooltip>



                        {/********messages liste*********/}


                        <Menu  
                        className={classes.root}

                        id="messages"
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 70, left: 1180 }}
                        keepMounted
                        open={Boolean(anchorEl1)}
                        onClose={handleClose2}
                        
                        style={{width:500}}
                        
                        >


                          <Button  href="#" style={{backgroundColor: '#50b5ff',textTransform: 'lowercase',
                          fontSize: 17,width:'100%',color:'white'}}>
                            Ouvrir dans Messagerie</Button>


                        <Link href="#" color="inherit">

                              <MenuItem>

                            

                              <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/d5.jpg'} 
                              style={{ width: 50,height: 50, marginRight:25 }} />

                                      <Typography>
                                      <a  style={{ fontWeight: 600,marginRight:5}}>Paule Molive</a> <br/>
                                      <small  style={{ fontSize: 15, color:'#777d74'}}>salut Coucou CV bien?</small> 
                                      </Typography>
                                
                                    
                                </MenuItem>
                                
                        </Link>


                        <Link href="#" color="inherit">
                                <MenuItem>


                              <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/p5.jpg'} 
                              style={{ width: 50,height: 50, marginRight:25 }} />

                                      <Typography>
                                      <a style={{ fontWeight: 600,marginRight:5}}>Anna Sthesia</a>
                                      <br/>
                                      <small  style={{ fontSize: 15, color:'#777d74'}}>Bonjour</small> 
                                      </Typography>
                                

                                </MenuItem>

                          </Link>



                          <Link href="#" color="inherit">
                                <MenuItem>


                              <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/img2.jpg'} 
                              style={{ width: 50,height: 50, marginRight:25 }} />

                                      <Typography>
                                      <a style={{ fontWeight: 600,marginRight:5}}>Anna Sthesia</a>   <br/>
                                      <small  style={{ fontSize: 15, color:'#777d74'}}>Bonjour</small>                                   
                                      </Typography>
                                

                                </MenuItem>
                          </Link>
                                
                            </Menu>


                  <Tooltip disableFocusListener title="Déconnexion">
                 
                        <IconButton aria-label=""
                         style={{color:'#50b5ff',paddingTop: 0, paddingBottom: 0,height: 45,top: 12,}}>
                                 {
                   auth.authenticated ?
                  <li>
                  <Link to={'#'} onClick={() => {
                  dispatch(logout(auth.email))
                  }}>< PowerSettingsNewIcon /></Link>
                  </li> : null
                  }
                            
                      
                        </IconButton>
                  </Tooltip>

              </Box>
               


                          {/**bottom nav bar */}

                          <Hidden only={['lg', 'md','xl']}>

  



                      <BottomNavigation
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      showLabels
                    color="primary" className={classes.bottomNavBar} navigationBtn
                    >

                     
                      <Collapse in={openR} timeout="auto" unmountOnExit>
               <div className={classes.searchC}>


                <InputBase
                    placeholder="Search…"
                  classes={{root: classes.inputRoot,input: classes.inputInput,}}inputProps={{ 'aria-label': 'search' }}
                    />

                </div>
               </Collapse>   

                      <Box>
                      <BottomNavigationAction className={classes.navigationBtn} label="Home" icon={<FaHome />} />
                      <BottomNavigationAction className={classes.navigationBtn} label="Profil" icon={<CgProfile  />} />
                      <BottomNavigationAction className={classes.navigationBtn} label="Groupes" icon={<HiUserGroup  />} />
                      <BottomNavigationAction  
                      className={classes.navigationBtn}label="Messages" icon={<AiFillMessage/>} />
                     </Box>
                    </BottomNavigation>


      
      </Hidden >




            </Toolbar>
        
      </AppBar>
    

     


               {/********sideNavBar *********/}

                          <Hidden only={['sm', 'xs']}>
      <Drawer
                
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,})}
        
        classes={{
          paper: clsx({
            [classes.drClose]: !open,
            [classes.drawerPaper]: open,
          }),
          
        }}
      >
                  
          <List style={{marginTop:90}}>

          <Link  to={"/"} style={{textDecoration:'none'}} >

              <ListItem button style={{paddingLeft: 16,paddingRight: 16,right: 5,marginBottom:10}}>

                  <ListItemIcon  style={{color:'#fff',display: 'block',marginRight: 10}}>

                      <FaHome style={{marginLeft: 10, marginBottom: 5,fontSize: 22}}/>

                  </ListItemIcon >

                      <Typography style={{color:'#fff',fontSize: 18}}
                      className={clsx( {
                        [classes.hide]: !open,
                      })}
                      >Home</Typography>
              </ListItem>

              </Link>



              <Link  to={"/messages"} style={{textDecoration:'none'}} >

              <ListItem button style={{paddingLeft: 16,paddingRight: 16,right: 5,marginBottom:10}}>

                      <ListItemIcon  style={{color:'#fff',display: 'block',marginRight: 10}}>
                      <AiFillMessage style={{marginLeft: 10, marginBottom: 5,fontSize: 22}}/>
                     
                      </ListItemIcon >
                      <Typography style={{color:'#fff',fontSize: 18}}
                      className={clsx( {
                        [classes.hide]: !open,
                      })}

                      >Messages</Typography>
                      
                      
              </ListItem>
              </Link>




              <Link  to={"/groupes"} style={{textDecoration:'none'}} >

              <ListItem button style={{paddingLeft: 16,paddingRight: 16,right: 5,marginBottom:10}}>

                  <ListItemIcon  style={{color:'#fff',display: 'block',marginRight: 10}}>

                      <HiUserGroup style={{marginLeft: 10, marginBottom: 5,fontSize: 22}}/>

                  </ListItemIcon >

                      <Typography style={{color:'#fff',fontSize: 18}}
                      className={clsx( {
                        [classes.hide]: !open,
                      })}

                      >Groupes et Pages</Typography>

              </ListItem>
              </Link>




<Link Link to={"/profil"} style={{textDecoration:'none'}} >
              <ListItem button  style={{paddingLeft: 16,paddingRight: 16,right: 5,marginBottom:10}}>

                 <  ListItemIcon style={{color:'#fff',display: 'block',marginRight: 10}}>

                      <CgProfile style={{marginLeft: 10, marginBottom: 5,fontSize: 22}}/>

                     
                      
                </ListItemIcon>

                      <Typography style={{color:'#fff',fontSize: 18}}
                      className={clsx( {
                        [classes.hide]: !open,
                      })}

                      >Profil</Typography>

               </ListItem>
               </Link>


               <Typography style={{color:'#fff',fontSize: 16,marginTop: 80,marginLeft: 30,}}

                    className={clsx( {
                    [classes.hide]: !open, })}
                >

                    Copyright ©2021 <br/>All rights reserved <br/><span style={{marginLeft: 25,fontSize: 19}} >UniSwap</span>

               </Typography>

                      
                    
                    

                      
        </List>
                    
      </Drawer>
      </Hidden >
   </div>


   </StylesProvider >  

    )
}

export default NavBar
