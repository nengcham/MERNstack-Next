import React,{useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from "next/link";
import Button from '@mui/material/Button';
import { createSvgIcon } from '@mui/material/utils';

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);

const pages = ['게시글 작성', '게시글 목록'];

export function Nav(){
  const handleClick = (value) => { 
    switch(value) {
      case '게시글 작성': window.location.href='/board/write'
      break;
      case '게시글 목록': window.location.href='/board/list'
      break;
      default: window.location.href='/'
      break;
    }
  }
  return (
    <AppBar position="static" style={{marginBottom: "70px"}}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex'} }}
          >
            <Box sx={{'& > :not(style)': {m: 2}}}
            >
              <Link href='/'>
              <IconButton sx={{ p: 0, color: 'white' }}>
              <HomeIcon/>
              </IconButton>
              </Link>    
            </Box>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleClick(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
              
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
