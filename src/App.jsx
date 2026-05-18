import React, { useState } from 'react';
import DesktopIcons from './components/DesktopIcons';
import DraggableWindow from './components/DraggableWindow';
import Dock from './components/Dock';
import ProjectDetails from './components/ProjectDetails';
import { projectsData, dockIcons } from './data/projects';
import { AnimatePresence } from 'framer-motion';

// Content for About Me (Notes App)
function NotesContent() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', lineHeight: 1.7, color: '#333', padding: '5px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '14px', color: '#111' }}>
        Sudhakar 👋
      </h2>
      <p style={{ marginBottom: '12px', fontSize: '14px' }}>
        I am an elite <strong>UI/UX Designer & Visual Artist</strong> specializing in creating modern, premium digital platforms and user-centric brand identity designs.
      </p>
      <p style={{ marginBottom: '12px', fontSize: '14px' }}>
        This desktop represents my creative playground, showcasing completed end-to-end design platforms such as <strong>Nexvora</strong>, regional healthcare applications like <strong>UyirCare</strong>, and immersive branding projects like <strong>Viveha</strong>.
      </p>
      <div style={{ background: '#f6f6f6', borderRadius: '8px', padding: '12px', marginBottom: '15px', borderLeft: '4px solid #007aff' }}>
        <h4 style={{ margin: '0 0 6px 0', fontSize: '13px', fontWeight: 700 }}>Featured Experience</h4>
        <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: '#444' }}>
          <li>End-to-End Product Design (Figma)</li>
          <li>Brand Identity & Graphic Artistry</li>
          <li>Design System Architecture</li>
          <li>Aesthetic Web & App Interfaces</li>
        </ul>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '12px', color: '#666' }}>
        <span>📍 Tamil Nadu, India</span>
        <span>•</span>
        <a href="mailto:sudhakarjk08@gmail.com" style={{ color: '#007aff', textDecoration: 'none' }}>sudhakarjk08@gmail.com</a>
      </div>
    </div>
  );
}

// Content for All Gallery (Photos App)
function PhotosContent() {
  const allImages = [
    { src: '/img/nexvora.png', title: 'Nexvora Platform' },
    { src: '/img/uyircare.png', title: 'UyirCare Health' },
    { src: '/img/viveha.png', title: 'Viveha App' },
    { src: '/img/viveha branding.png', title: 'Viveha Branding' },
    { src: '/img/viveha poster.png', title: 'Viveha Poster' },
    { src: '/img/Event app.figma (1).png', title: 'Event App UI' },
    { src: '/img/Event app.figma (2).png', title: 'Event Flow' },
    { src: '/img/mobile banking app(1).png', title: 'FinTech Dashboard' },
    { src: '/img/mobile banking app(2).png', title: 'FinTech Cards' },
    { src: '/img/ticket booking app.png', title: 'Ticket Transit' },
    { src: '/img/online course poster.png', title: 'EdTech Poster' },
    { src: '/img/Kiosk.png', title: 'Kiosk Terminal' },
    { src: '/img/app promotion poster.png', title: 'App Promotion' },
    { src: '/img/ID Mockup.png', title: 'Corporate Identity' }
  ];

  return (
    <div style={{ padding: '2px' }}>
      <h3 style={{ margin: '0 0 14px 0', fontSize: '15px', fontWeight: 700, color: '#111' }}>
        Visual Archive ({allImages.length} Shots)
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
        {allImages.map((img, i) => (
          <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <img 
              src={img.src} 
              alt={img.title} 
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} 
            />
            <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 600, color: '#555', background: 'rgba(255,255,255,0.8)' }}>
              {img.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Content for Finder App
function FinderContent({ onOpenProject }) {
  return (
    <div style={{ padding: '2px' }}>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', fontWeight: 700, color: '#111' }}>
        Projects Directory
      </h3>
      <div style={{ display: 'flex', flexDirection: 'col', gap: '2px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', color: '#888' }}>
              <th style={{ padding: '6px 8px', fontWeight: 600 }}>Name</th>
              <th style={{ padding: '6px 8px', fontWeight: 600 }}>Kind</th>
              <th style={{ padding: '6px 8px', fontWeight: 600 }}>Year</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project) => (
              <tr 
                key={project.id} 
                onClick={() => onOpenProject(project)}
                className="finder-row"
                style={{ cursor: 'pointer', borderBottom: '1px solid rgba(0,0,0,0.03)' }}
              >
                <td style={{ padding: '8px', fontWeight: 600, color: '#007aff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <img src={project.thumbnail} alt="" style={{ width: '16px', height: '16px', borderRadius: '4px', objectFit: 'cover' }} />
                  {project.title}
                </td>
                <td style={{ padding: '8px', color: '#555' }}>{project.subtitle || 'Design System'}</td>
                <td style={{ padding: '8px', color: '#888' }}>{project.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function App() {
  const [openWindows, setOpenWindows] = useState([]);
  const [focusedWindowId, setFocusedWindowId] = useState(null);
  const [zIndexCounter, setZIndexCounter] = useState(10);

  const createWindow = (id, title, content, options = {}) => {
    const existing = openWindows.find(w => w.id === id);
    if (existing) {
      focusWindow(id);
      return;
    }

    const newZ = zIndexCounter + 1;
    setZIndexCounter(newZ);

    const newWindow = {
      id,
      title,
      content,
      zIndex: newZ,
      initialX: options.initialX || (Math.random() * 20 + 20) + '%',
      initialY: options.initialY || (Math.random() * 15 + 10) + '%',
      width: options.width || 460,
    };

    setOpenWindows(prev => [...prev, newWindow]);
    setFocusedWindowId(id);
  };

  const openProjectWindow = (project) => {
    createWindow(
      project.id,
      `Information about: ${project.title}`,
      <ProjectDetails project={project} />,
      { width: 480 }
    );
  };

  const openDockApp = (item) => {
    if (item.action === 'url') {
      window.open(item.url, '_blank');
      return;
    }

    if (item.action === 'window') {
      let content;
      let title;
      let width = 450;

      if (item.content === 'notes') {
        content = <NotesContent />;
        title = 'Notes — About Sudhakar';
      } else if (item.content === 'photos') {
        content = <PhotosContent />;
        title = 'Photos — Visual Portfolio';
        width = 540;
      }

      createWindow(`dock-${item.id}`, title, content, { width, initialX: '30%', initialY: '12%' });
      return;
    }

    if (item.id === 'finder') {
      createWindow(
        'dock-finder',
        'Finder — Projects List',
        <FinderContent onOpenProject={openProjectWindow} />,
        { width: 500, initialX: '25%', initialY: '15%' }
      );
      return;
    }
  };

  const closeWindow = (id) => {
    setOpenWindows(prev => prev.filter(w => w.id !== id));
    if (focusedWindowId === id) {
      setFocusedWindowId(null);
    }
  };

  const focusWindow = (id) => {
    if (focusedWindowId === id) return;

    const newZ = zIndexCounter + 1;
    setZIndexCounter(newZ);

    setOpenWindows(prev => prev.map(w => {
      if (w.id === id) {
        return { ...w, zIndex: newZ };
      }
      return w;
    }));
    setFocusedWindowId(id);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div className="desktop-background" />

      <DesktopIcons
        projects={projectsData}
        onOpenWindow={openProjectWindow}
      />

      <AnimatePresence>
        {openWindows.map(win => (
          <DraggableWindow
            key={win.id}
            window={win}
            onClose={closeWindow}
            onFocus={focusWindow}
            isFocused={focusedWindowId === win.id}
            zIndex={win.zIndex}
          />
        ))}
      </AnimatePresence>

      <Dock
        items={dockIcons}
        onIconClick={openDockApp}
      />
    </div>
  );
}

export default App;
