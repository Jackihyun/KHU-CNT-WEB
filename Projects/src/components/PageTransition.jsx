<<<<<<< HEAD
// import React, { useRef } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { useLocation } from 'react-router-dom';

// const TIMEOUT = 150;

// const getTransitionStyles = {
//   entering: {
//     position: 'absolute',
//     opacity: 0,
//   },
//   entered: {
//     transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
//     opacity: 1,
//   },
//   exiting: {
//     transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
//     opacity: 0,
//   },
// };
=======
import React, { useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

const TIMEOUT = 300;
>>>>>>> origin/ys-fe

// const PageTransition = ({ children }) => {
//   const location = useLocation();
//   const nodeRef = useRef(null); 
  
<<<<<<< HEAD
//   return (
//     <TransitionGroup component={null}>
//       <CSSTransition
//         key={location.pathname}
//         timeout={TIMEOUT}
//         classNames="page"
//         unmountOnExit
//         nodeRef={nodeRef} 
//       >
//         {(status) => (
//           <div ref={nodeRef} style={getTransitionStyles[status]}> 
//             {children}
//           </div>
//         )}
//       </CSSTransition>
//     </TransitionGroup>
//   );
// };
=======
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
>>>>>>> origin/ys-fe

// export default PageTransition;
