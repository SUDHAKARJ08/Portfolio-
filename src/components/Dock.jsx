import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DockIcon from './DockIcon';

export default function Dock({ items, onIconClick }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      {/* macOS-style menu bar at very bottom */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '28px',
        background: 'rgba(200, 200, 220, 0.35)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.25)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '11px',
        color: 'rgba(0,0,0,0.5)',
        fontWeight: 500,
        letterSpacing: '0.3px',
      }}>
        Sudhakar · UI/UX Designer & Visual Artist
      </div>

      {/* Dock */}
      <div
        style={{
          position: 'fixed',
          bottom: '36px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '8px',
          padding: '10px 14px',
          background: 'rgba(255, 255, 255, 0.22)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderRadius: '22px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.6)',
          zIndex: 1000,
        }}
      >
        {items.map((item, i) => {
          const isHovered = hoveredId === item.id;
          const isNeighbour = Math.abs(items.findIndex(x => x.id === hoveredId) - i) === 1;

          let scale = 1;
          if (isHovered) scale = 1.5;
          else if (isNeighbour) scale = 1.25;

          return (
            <div key={item.id} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: 'absolute',
                      bottom: 'calc(100% + 10px)',
                      background: 'rgba(30,30,30,0.85)',
                      color: 'white',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                      pointerEvents: 'none',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {item.name}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                animate={{ scale, y: isHovered ? -12 : isNeighbour ? -5 : 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => onIconClick(item)}
                whileTap={{ scale: scale * 0.88 }}
                style={{
                  width: '52px',
                  height: '52px',
                  cursor: 'pointer',
                  transformOrigin: 'bottom center',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <DockIcon type={item.iconType} />
              </motion.div>
            </div>
          );
        })}
      </div>
    </>
  );
}
