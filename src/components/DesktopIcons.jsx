import React from 'react';
import { motion } from 'framer-motion';

// Predefined scattered positions (mirroring the bychudy.com constellation layout)
const SCATTER_POSITIONS = [
  { top: '8%',  left: '7%'  },
  { top: '5%',  left: '28%' },
  { top: '7%',  left: '50%' },
  { top: '6%',  left: '70%' },
  { top: '6%',  left: '85%' },
  { top: '28%', left: '3%'  },
  { top: '30%', left: '20%' },
  { top: '28%', left: '40%' },
  { top: '32%', left: '60%' },
  { top: '28%', left: '80%' },
  { top: '52%', left: '8%'  },
  { top: '50%', left: '28%' },
  { top: '54%', left: '48%' },
  { top: '50%', left: '68%' },
  { top: '52%', left: '86%' },
  { top: '72%', left: '3%'  },
  { top: '70%', left: '22%' },
  { top: '73%', left: '44%' },
  { top: '70%', left: '64%' },
  { top: '72%', left: '83%' },
];

export default function DesktopIcons({ projects, onOpenWindow }) {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      {projects.map((project, index) => {
        const pos = SCATTER_POSITIONS[index % SCATTER_POSITIONS.length];
        return (
          <motion.div
            key={project.id}
            drag
            dragMomentum={false}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.04, type: 'spring', stiffness: 260, damping: 20 }}
            style={{
              position: 'absolute',
              top: pos.top,
              left: pos.left,
              pointerEvents: 'auto',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
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
                width: '76px',
                height: '76px',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
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
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                textAlign: 'center',
                lineHeight: 1.3,
                padding: '2px 6px',
                background: 'rgba(0,0,0,0.25)',
                borderRadius: '6px',
                backdropFilter: 'blur(6px)',
                maxWidth: '88px',
                wordBreak: 'break-word',
              }}
            >
              {project.title}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
