import React from 'react';

export default function ProjectDetails({ project, onOpenCaseStudy }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

      {/* Header row */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <img
          src={project.thumbnail}
          alt={project.title}
          style={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: '0 0 4px 0', fontSize: '20px', fontWeight: 700, color: '#111' }}>
            {project.title}
          </h2>
          <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#666', fontWeight: 500 }}>
            {project.subtitle}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            <span style={badgeStyle('#f0f0f0', '#555')}>{project.type}</span>
            <span style={badgeStyle('#e8f4ff', '#0070f3')}>{project.year}</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', margin: 0 }} />

      {/* Description */}
      <div>
        <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#333', margin: 0 }}>
          {project.description}
        </p>
      </div>

      {/* Interactive Case Study Button */}
      {onOpenCaseStudy && ['uyircare', 'viveha', 'nexvora'].includes(project.id) && (
        <button
          onClick={() => onOpenCaseStudy(project.id)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            width: '100%',
            padding: '12px 16px',
            background: 'linear-gradient(135deg, #007aff 0%, #0056b3 100%)',
            border: 'none',
            borderRadius: '12px',
            color: 'white',
            fontWeight: 700,
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 15px rgba(0, 122, 255, 0.25)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #0062cc 0%, #004499 100%)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #007aff 0%, #0056b3 100%)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          Read Premium Interactive Case Study →
        </button>
      )}

      {/* Key Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '12px', fontWeight: 700, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Highlights
          </h4>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {project.highlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#333' }}>
                <span style={{ color: '#007aff', fontWeight: 700, flexShrink: 0 }}>→</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Figma Link */}
      {project.figmaLink && (
        <a
          href={project.figmaLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 16px',
            background: 'linear-gradient(135deg, #f5f0ff 0%, #ece6ff 100%)',
            border: '1px solid #d6c9ff',
            borderRadius: '12px',
            textDecoration: 'none',
            color: '#5b21b6',
            fontWeight: 600,
            fontSize: '14px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #ece6ff 0%, #ddd3ff 100%)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #f5f0ff 0%, #ece6ff 100%)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {/* Figma logo */}
          <svg width="20" height="20" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 28.5C19 25.5826 20.1589 22.7847 22.2218 20.7218C24.2847 18.6589 27.0826 17.5 30 17.5C32.9174 17.5 35.7153 18.6589 37.7782 20.7218C39.8411 22.7847 41 25.5826 41 28.5C41 31.4174 39.8411 34.2153 37.7782 36.2782C35.7153 38.3411 32.9174 39.5 30 39.5C27.0826 39.5 24.2847 38.3411 22.2218 36.2782C20.1589 34.2153 19 31.4174 19 28.5Z" fill="#1ABCFE" transform="translate(-11 -0.5)"/>
            <path d="M0 46.5C0 43.5826 1.15893 40.7847 3.22183 38.7218C5.28473 36.6589 8.08262 35.5 11 35.5H19V46.5C19 49.4174 17.8411 52.2153 15.7782 54.2782C13.7153 56.3411 10.9174 57.5 8 57.5C5.08262 57.5 2.28473 56.3411 0.221825 54.2782C-1.84107 52.2153 -3 49.4174 -3 46.5H0Z" fill="#0ACF83" transform="translate(0 -0.5)"/>
            <path d="M19 0.5V17.5H30C32.9174 17.5 35.7153 16.3411 37.7782 14.2782C39.8411 12.2153 41 9.41738 41 6.5C41 3.58262 39.8411 0.78473 37.7782 -1.27817C35.7153 -3.34107 32.9174 -4.5 30 -4.5H8C5.08262 -4.5 2.28473 -3.34107 0.221825 -1.27817C-1.84107 0.78473 -3 3.58262 -3 6.5C-3 9.41738 -1.84107 12.2153 0.221825 14.2782C2.28473 16.3411 5.08262 17.5 8 17.5H19V0.5Z" fill="#FF7262" transform="translate(0 0.5)"/>
            <path d="M0 6.5C0 3.58262 1.15893 0.78473 3.22183 -1.27817C5.28473 -3.34107 8.08262 -4.5 11 -4.5H19V17.5H8C5.08262 17.5 2.28473 16.3411 0.221825 14.2782C-1.84107 12.2153 -3 9.41738 -3 6.5H0Z" fill="#F24E1E" transform="translate(0 0.5)"/>
            <path d="M0 28.5C0 25.5826 1.15893 22.7847 3.22183 20.7218C5.28473 18.6589 8.08262 17.5 11 17.5H19V39.5H8C5.08262 39.5 2.28473 38.3411 0.221825 36.2782C-1.84107 34.2153 -3 31.4174 -3 28.5H0Z" fill="#A259FF" transform="translate(0 -0.5)"/>
          </svg>
          View in Figma →
        </a>
      )}

      {/* Divider before images */}
      {project.images && project.images.length > 0 && (
        <>
          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', margin: 0 }} />
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: 700, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Preview
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {project.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  style={{
                    width: '100%',
                    borderRadius: '10px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    display: 'block',
                  }}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function badgeStyle(bg, color) {
  return {
    background: bg,
    color,
    fontSize: '11px',
    fontWeight: 600,
    padding: '3px 9px',
    borderRadius: '20px',
    display: 'inline-block',
  };
}
