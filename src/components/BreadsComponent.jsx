import React,{useState,useEffect} from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Home as HomeIcon, NavigateNext as NavigateNextIcon } from '@mui/icons-material';

const BreadcrumbsComponent = () => {
    const [pathSegments, setPathSegments] = useState([]);

    useEffect(() => {
      // Extract path segments from window.location.pathname
      const path = window.location.pathname;
      const segments = path.split('/').filter(Boolean);
      setPathSegments(segments);
    }, []);
  
    const handleClick = (path) => {
      window.location.href = path;
    };
    const capitalize = (str) => {
        return str
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };
      
  return (
    <Breadcrumbs
      separator={"/"}
      aria-label="breadcrumb"
   
    >
      <Link
        color="inherit"
        href="/"
      
        onClick={(event) => {
          event.preventDefault();
          handleClick('/');
        }}
       sx={{textDecoration:'none',padding:0}}
      >
        <Typography  sx={{fontSize:16,padding:0}} >Home</Typography>
      </Link>
      {pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1;
        const path = '/' + pathSegments.slice(0, index + 1).join('/');

        return isLast ? (
          <Typography     key={path} sx={{fontSize:16,display:'flex',alignItems:'baseline',color:'#DB1F51',padding:0}} color="textPrimary">
            {capitalize(segment.replace(/-/g, ' '))}
          </Typography>
        ) : (
          <Link
            key={path}
            color="inherit"
            onClick={(event) => {
              event.preventDefault();
              handleClick(path);
            }}
            sx={{fontSize:16,textDecoration:'none',padding:0}} 
          >
            {capitalize(segment.replace(/-/g, ' '))}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
