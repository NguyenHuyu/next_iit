// 'use client'
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { FloatingPortal, useFloating } from "@floating-ui/react";

// export default function PopoverRightEnd({
//   children,
//   renderPopover,
//   className,
//   placement,
// }) {
//   const [open, setOpen] = useState(false);
//   const hideOpen = () => {
//     setOpen(false);
//   };
//   const appearOpen = () => {
//     setOpen(true);
//   };
//   const { x, y, strategy, reference, floating } = useFloating({
//     placement: "right",
//   });
//   return (
//     <div
//       className={className}
//       ref={reference}
//       onMouseEnter={appearOpen}
//       onMouseLeave={hideOpen}
//     >
//       {children}
//       <FloatingPortal>
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               initial={{ opacity: 1, transform: "scale(0)" }}
//               animate={{ opacity: 1, transform: "scale(1)" }}
//               exit={{ opacity: 0, transform: "scale(0)" }}
//               transition={{ duration: 0.15 }}
//               ref={floating}
//               style={{
//                 position: strategy,
//                 top: y ?? 0,
//                 left: x ?? 0,
//                 width: "max-content",
//               }}
//             >
//               {renderPopover}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </FloatingPortal>
//     </div>
//   );
// }
