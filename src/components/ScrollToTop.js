import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
// useLocation() is a hook of react-router-dom
  useEffect(() => {
    // //scroll to x=0, y=0 ,whenever pathname changes
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
}