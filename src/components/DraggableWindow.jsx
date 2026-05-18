import React, { useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { X, Minus, Maximize2 } from 'lucide-react';

export default function DraggableWindow({ 
  window, 
  onClose, 
  onFocus, 
  isFocused, 
  zIndex 
}) {
  const windowRef = useRef(null);
  const dragControls = useDragControls();

  const handlePointerDown = () => {
    onFocus(window.id);
  };

  return (
    <motion.div
      ref={windowRef}
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: 20 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      onPointerDown={handlePointerDown}
      style={{
        position: 'absolute',
        top: window.initialY || '20%',
        left: window.initialX || '30%',
        width: window.width || 450,
        height: window.height || 'auto',
        maxHeight: '80vh',
        backgroundColor: 'var(--window-bg)',
        border: '1px solid var(--window-border)',
        borderRadius: '12px',
        boxShadow: isFocused 
          ? '0 20px 40px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.5) inset' 
          : '0 10px 20px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.2) inset',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: zIndex,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
      className="draggable-window"
    >
      {/* macOS Style Title Bar */}
      <div 
        className="window-header"
        onPointerDown={(e) => {
          dragControls.start(e);
          handlePointerDown();
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 15px',
          background: 'rgba(230, 230, 230, 0.5)',
          borderBottom: '1px solid var(--window-border)',
          cursor: 'grab',
          userSelect: 'none'
        }}
      >
        <div style={{ display: 'flex', gap: '6px', marginRight: '15px' }} className="window-controls">
          <button onClick={(e) => { e.stopPropagation(); onClose(window.id); }} style={{ width: 12, height: 12, borderRadius: '50%', border: 'none', background: '#ff5f56', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
             <X size={8} color="rgba(0,0,0,0.5)" style={{ opacity: 0 }} className="window-btn-icon" />
          </button>
          <button style={{ width: 12, height: 12, borderRadius: '50%', border: 'none', background: '#ffbd2e', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
             <Minus size={8} color="rgba(0,0,0,0.5)" style={{ opacity: 0 }} className="window-btn-icon" />
          </button>
          <button style={{ width: 12, height: 12, borderRadius: '50%', border: 'none', background: '#27c93f', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
             <Maximize2 size={8} color="rgba(0,0,0,0.5)" style={{ opacity: 0 }} className="window-btn-icon" />
          </button>
        </div>
        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', flex: 1, textAlign: 'center', paddingRight: '55px' }}>
          {window.title}
        </div>
      </div>

      {/* Window Content */}
      <div 
        className="window-content"
        style={{
          padding: '20px',
          overflowY: 'auto',
          flex: 1
        }}
      >
        {window.content}
      </div>
    </motion.div>
  );
}
