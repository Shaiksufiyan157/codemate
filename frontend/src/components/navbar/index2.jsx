import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { NavLink, Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToken } from '../../slices/problemSlice';
// New layout components added: Avatar, Stack, Divider
import { Avatar, Box, Tooltip, IconButton, Menu, MenuItem, Typography, Stack, Divider } from '@mui/material';

// New icons added for better UX
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';


const pages = ['Home', 'Problems', 'About Us', 'Sheets', 'Rapid Fire'];
const settings = ['Profile', 'Logout'];

function Navbar() {
  // useEffect(() => {
  // const token = localStorage.getItem('token');
  // }, []);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { token } = useSelector(state => state.problem)
  const {user}= useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getStyle = ({ isActive }) => {
    return isActive ? 'border-b-2 ' : ''
  }
  const handleLogoutClick = () => {
    // if(setting==='Logout'){

    toast.success("Logged out successfully")
    dispatch(removeToken())
    navigate('/login')
    // alert("Logged out successfully")

    // }
  };

  return (
<AppBar position="sticky">
      <Toaster />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          {/* ================= DESKTOP LOGO (UNCHANGED) ================= */}
          <svg className="w-8 h-8 hidden md:block" fill="currentColor" viewBox="0 0 20 20" style={{ display: { xs: 'none', md: 'block' }, marginRight: '10px' }}>
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>CODEMATE</Link>
          </Typography>

          {/* ================= MOBILE MENU (UPDATED) ================= */}
          {/* LOGIC CHANGE: Added 'order' and 'flexGrow' logic based on !token to move hamburger to right */}
          <Box sx={{ 
            flexGrow: !token ? 0 : 1, 
            display: { xs: 'flex', md: 'none' },
            order: !token ? 2 : 0  
          }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink 
                    to={`/${page === 'Home' ? '' : page.toLowerCase().replace(/\s+/g, '').trim()}`}
                    className="text-blue-600 font-semibold no-underline w-full text-center"
                    style={{ textDecoration: 'none' }}
                  >
                      {page === 'Problems' ? 'My Problems' : page}
                  </NavLink>
                </MenuItem>
              ))}
              
              {!token && (
                <Box>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink to={'/login'} className="text-blue-600 font-semibold no-underline w-full text-center" style={{ textDecoration: 'none' }}>Login</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink to={'/signup'} className="text-blue-600 font-semibold no-underline w-full text-center" style={{ textDecoration: 'none' }}>Signup</NavLink>
                  </MenuItem>
                </Box>
              )}
            </Menu>
          </Box>

          {/* ================= MOBILE LOGO (UPDATED) ================= */}
          {/* <CodeOffIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              // LOGIC CHANGE: If !token, this comes first (order 1), pushing menu to the end
              order: !token ? 1 : 0 
            }}
          >
            CODEMATE
          </Typography>

          {/* ================= DESKTOP MENU (UNCHANGED) ================= */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavLink to={`/${page === 'Home' ? '' : page.toLowerCase().replace(/\s+/g, '').trim()}`} className={getStyle}>
                  {page === 'Problems' ? 'My Problems' : page}
                </NavLink>
              </Button>
            ))}
          </Box>

          {/* ================= USER SETTINGS / AUTH ================= */}
          {token ? (
            <Box sx={{ flexGrow: 0 }}>
  <Tooltip title="Open settings">
    <Box
      onClick={handleOpenUserMenu}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        cursor: 'pointer',
        p: 0.5,
        pr: 1.5, // extra padding on right for the arrow
        borderRadius: '40px',
        transition: '0.2s',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      }}
    >
      <Avatar 
        sx={{ 
          width: 35, 
          height: 35, 
          bgcolor: '#2563eb', // Modern blue 
          fontSize: '1rem',
          fontWeight: 'bold'
        }}
      >
        {user.username?.charAt(0).toUpperCase()}
      </Avatar>
      
      <Typography
        variant="body2"
        sx={{
          color: 'white',
          fontWeight: 600,
          display: { xs: 'none', sm: 'block' }, // Hide name on small screens
        }}
      >
        {user.username}
      </Typography>

      <KeyboardArrowDownIcon sx={{ color: 'white', fontSize: 18, opacity: 0.7 }} />
    </Box>
  </Tooltip>

  <Menu
    sx={{ mt: '45px' }}
    id="menu-appbar"
    anchorEl={anchorElUser}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={Boolean(anchorElUser)}
    onClose={handleCloseUserMenu}
    PaperProps={{
      elevation: 3,
      sx: {
        width: '180px',
        borderRadius: '12px',
        mt: 1.5,
        '& .MuiMenuItem-root': {
          px: 2,
          py: 1.2,
        },
      },
    }}
  >
    {/* You can add a "Signed in as" section here */}
    <Box sx={{ px: 2, py: 1 }}>
      <Typography variant="caption" color="text.secondary" display="block">
        Signed in as
      </Typography>
      <Typography variant="body2" fontWeight="bold" noWrap>
        {user.username}
      </Typography>
    </Box>
    
    <Divider sx={{ my: 1 }} />

    <MenuItem 
      onClick={() => {
        handleCloseUserMenu();
        handleLogoutClick();
      }}
      sx={{ color: '#d32f2f' }} // Red for logout
    >
      <LogoutIcon sx={{ fontSize: 20, mr: 1.5 }} />
      <Typography fontWeight="medium">Logout</Typography>
    </MenuItem>
  </Menu>
</Box>
          ) : (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <NavLink to={'/login'} className="text-white font-semibold no-underline" style={{textDecoration:'none', color:'white'}}>Login</NavLink>
              <NavLink to={'/signup'} className="text-white font-semibold no-underline" style={{textDecoration:'none', color:'white'}}>Signup</NavLink>
            </Box>
          )}

        </Toolbar>
      </Container>
    </AppBar>

  );
}
export default Navbar;
