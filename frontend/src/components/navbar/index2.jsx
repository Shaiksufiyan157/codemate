import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { NavLink, Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToken } from '../../slices/problemSlice';

const pages = ['Home', 'Problems', 'About Us', 'Sheets', 'Rapid Fire'];
const settings = ['Profile', 'Logout'];

function Navbar() {
  // useEffect(() => {
  // const token = localStorage.getItem('token');
  // }, []);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { token } = useSelector(state => state.problem)
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
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <AccountCircle sx={{ fontSize: 40, color: 'white' }} />
                </IconButton>
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
              >
                <MenuItem key={'logout'} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handleLogoutClick} className="text-blue-600 font-semibold">
                    Logout
                  </Typography>
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
