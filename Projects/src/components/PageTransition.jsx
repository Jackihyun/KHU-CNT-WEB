import React, { useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

const TIMEOUT = 300;

const PageTransition = ({ children }) => {
  const location = useLocation();
  const nodeRef = useRef(null); 
  
  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        timeout={TIMEOUT}
        classNames="scale"
      >
          {children}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default PageTransition;
