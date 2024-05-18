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

// const PageTransition = ({ children }) => {
//   const location = useLocation();
//   const nodeRef = useRef(null); 
  
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

// export default PageTransition;
