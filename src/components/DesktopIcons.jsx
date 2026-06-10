import React from 'react';
import { motion } from 'framer-motion';

export default function DesktopIcons({ projects, onOpenWindow, onOpenAboutMe }) {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, left: 0, width: '100%', height: '100%', 
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '80px', // leave space for the dock
    }}>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px 60px',
        maxWidth: '1000px',
        justifyContent: 'center',
        alignItems: 'flex-start',
        pointerEvents: 'auto',
      }}>
        {projects.map((project, index) => {
          return (
            <motion.div
              key={project.id}
              drag
              dragMomentum={false}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.04, type: 'spring', stiffness: 260, damping: 20 }}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                width: '90px',
                userSelect: 'none',
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              onDoubleClick={() => onOpenWindow(project)}
              onClick={() => onOpenWindow(project)}
            >
              {/* Thumbnail */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  border: '2px solid rgba(255,255,255,0.6)',
                  flexShrink: 0,
                  background: '#eee',
                }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  draggable={false}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={e => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Label */}
              <span
                style={{
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  textShadow: '0 2px 6px rgba(0,0,0,0.8)',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  padding: '4px 8px',
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(8px)',
                  maxWidth: '96px',
                  wordBreak: 'break-word',
                }}
              >
                {project.title}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
