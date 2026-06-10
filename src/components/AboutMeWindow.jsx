import React, { useState } from 'react';
import { User, Calendar, MapPin, Mail, Award, Download, Compass, Briefcase, FileText, Check, Rocket } from 'lucide-react';

export default function AboutMeWindow() {
  const [activeTab, setActiveTab] = useState('profile');

  // Roadmap milestones data
  const milestones = [
    {
      year: '2023',
      title: 'Design Foundations',
      subtitle: 'UI/UX Fundamentals & Mastery',
      description: 'Discovered the art of human-computer interaction. Focused extensively on standard grid structures, spacing rules, accessibility guidelines, typography, and fully mastering Figma design utilities.',
      icon: <Compass size={16} />,
      status: 'completed'
    },
    {
      year: '2024',
      title: 'User Research & Mobile UX',
      subtitle: 'Designing UyirCare Platform',
      description: 'Conducted localized regional research for healthcare needs in Tamil Nadu. Designed the UyirCare mobile blood donation app, integrating anonymous proxy communication channels and multi-language localized screens.',
      icon: <User size={16} />,
      status: 'completed'
    },
    {
      year: '2025',
      title: 'Branding & Small Retail POS Systems',
      subtitle: 'Developing Viveha Design & Systems',
      description: 'Engineered the complete South Indian aesthetic brand identity, logos, and promotional graphics for Viveha Shop Management. Designed a keyboard-first, split-screen retail POS billing interface.',
      icon: <Briefcase size={16} />,
      status: 'completed'
    },
    {
      year: '2026',
      title: 'Enterprise Architecture & Design Systems',
      subtitle: 'Architecting Nexvora Enterprise Platform',
      description: 'Created Nexvora enterprise SaaS platform UI. Architected a massive 80+ component modular React/Figma design system with comprehensive contrast validation, automated pipeline editors, and command-bar utilities.',
      icon: <Award size={16} />,
      status: 'active'
    }
  ];

  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: '#333', lineHeight: 1.6 }}>
      
      {/* Navigation Tabs */}
      <div style={{
        display: 'flex',
        background: 'rgba(0,0,0,0.04)',
        borderRadius: '10px',
        padding: '4px',
        gap: '4px',
        marginBottom: '20px',
      }}>
        <button
          onClick={() => setActiveTab('profile')}
          style={{
            flex: 1,
            border: 'none',
            background: activeTab === 'profile' ? 'white' : 'transparent',
            color: activeTab === 'profile' ? '#007aff' : '#666',
            fontWeight: activeTab === 'profile' ? 700 : 500,
            padding: '8px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '12px',
            boxShadow: activeTab === 'profile' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            transition: 'all 0.2s ease',
          }}
        >
          <User size={14} /> Profile & Bio
        </button>
        <button
          onClick={() => setActiveTab('roadmap')}
          style={{
            flex: 1,
            border: 'none',
            background: activeTab === 'roadmap' ? 'white' : 'transparent',
            color: activeTab === 'roadmap' ? '#007aff' : '#666',
            fontWeight: activeTab === 'roadmap' ? 700 : 500,
            padding: '8px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '12px',
            boxShadow: activeTab === 'roadmap' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            transition: 'all 0.2s ease',
          }}
        >
          <Calendar size={14} /> My Roadmap
        </button>
        <button
          onClick={() => setActiveTab('resume')}
          style={{
            flex: 1,
            border: 'none',
            background: activeTab === 'resume' ? 'white' : 'transparent',
            color: activeTab === 'resume' ? '#007aff' : '#666',
            fontWeight: activeTab === 'resume' ? 700 : 500,
            padding: '8px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '12px',
            boxShadow: activeTab === 'resume' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            transition: 'all 0.2s ease',
          }}
        >
          <FileText size={14} /> Resume (PDF)
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === 'profile' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Header Card */}
          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(240,245,255,0.5) 100%)',
            border: '1px solid rgba(0, 122, 255, 0.1)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
          }}>
            {/* Photo with double glowing ring */}
            <div style={{
              position: 'relative',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              padding: '4px',
              background: 'linear-gradient(135deg, #007aff 0%, #00c6ff 100%)',
              boxShadow: '0 8px 20px rgba(0, 122, 255, 0.25)',
              flexShrink: 0,
            }}>
              <img
                src="/img/my photo.png"
                alt="Sudhakar"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  background: '#f0f0f0',
                  border: '2px solid white',
                }}
              />
            </div>

            <div>
              <h2 style={{ margin: '0 0 4px 0', fontSize: '22px', fontWeight: 800, color: '#111' }}>
                Sudhakar J
              </h2>
              <p style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#007aff', fontWeight: 600, letterSpacing: '0.03em', textTransform: 'uppercase' }}>
                MERN Stack Developer | React Native Developer | UI/UX Designer
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <span style={badgeStyle('#e1f5fe', '#0288d1')}>React.js & Next.js</span>
                <span style={badgeStyle('#ede7f6', '#5e35b1')}>React Native</span>
                <span style={badgeStyle('#e8f5e9', '#2e7d32')}>Node.js & Express.js</span>
                <span style={badgeStyle('#fff3e0', '#ef6c00')}>MongoDB</span>
                <span style={badgeStyle('#fce4ec', '#c2185b')}>UI/UX Design</span>
                <span style={badgeStyle('#f3e5f5', '#7b1fa2')}>Design Systems</span>
              </div>
            </div>
          </div>

          {/* About Me Bio */}
          <div>
            <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 8px 0', color: '#111' }}>About Me</h3>
            <p style={{ fontSize: '13.5px', color: '#444', lineHeight: 1.7, textAlign: 'justify', margin: '0 0 12px 0' }}>
              I am a passionate Full Stack Developer and UI/UX Designer dedicated to building scalable web and mobile applications that combine exceptional user experiences with robust engineering.
            </p>
            <p style={{ fontSize: '13.5px', color: '#444', lineHeight: 1.7, textAlign: 'justify', margin: '0 0 12px 0' }}>
              My expertise spans the MERN Stack, React Native, REST APIs, and modern frontend architectures, enabling me to transform ideas into complete digital products from concept, design, development, and deployment.
            </p>
            <p style={{ fontSize: '13.5px', color: '#444', lineHeight: 1.7, textAlign: 'justify', margin: '0 0 12px 0' }}>
              I have successfully developed products such as Nexvora, a comprehensive digital solutions platform, and JK Traders Ledger Management, a mobile application designed to simplify financial tracking, ledger management, and business operations.
            </p>
            <p style={{ fontSize: '13.5px', color: '#444', lineHeight: 1.7, textAlign: 'justify', margin: '0 0 12px 0' }}>
              What sets me apart is my ability to bridge the gap between design and development. With a strong foundation in UI/UX, I create products that are not only technically scalable but also intuitive, user-centric, and visually compelling.
            </p>
            <p style={{ fontSize: '13.5px', color: '#444', lineHeight: 1.7, textAlign: 'justify', margin: 0 }}>
              Currently, I am expanding my expertise in advanced full-stack architecture, cloud technologies, AI-powered applications, and scalable product development as part of my continuous developer growth roadmap.
            </p>
          </div>

          {/* Info Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            textAlign: 'center',
          }}>
            <div style={statCardStyle()}>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#007aff' }}>2+</div>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#777', fontWeight: 600 }}>Live Products Delivered</div>
            </div>
            <div style={statCardStyle()}>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#007aff' }}>MERN</div>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#777', fontWeight: 600 }}>Full Stack Expertise</div>
            </div>
            <div style={statCardStyle()}>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#007aff' }}>Native</div>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#777', fontWeight: 600 }}>Mobile Applications</div>
            </div>
          </div>

          {/* Recruiter Highlight Section */}
          <div style={{
            background: 'rgba(0, 122, 255, 0.04)',
            borderLeft: '4px solid #007aff',
            padding: '16px',
            borderRadius: '0 12px 12px 0',
          }}>
            <h3 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 10px 0', color: '#111' }}>What I Bring</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '13px', color: '#444', fontWeight: 500 }}>
              <div style={{display:'flex', gap:'6px', alignItems:'center'}}><Check size={14} color="#007aff" /> Full Stack Development (MERN)</div>
              <div style={{display:'flex', gap:'6px', alignItems:'center'}}><Check size={14} color="#007aff" /> Cross-Platform Mobile Apps (React Native)</div>
              <div style={{display:'flex', gap:'6px', alignItems:'center'}}><Check size={14} color="#007aff" /> UI/UX Design & Product Thinking</div>
              <div style={{display:'flex', gap:'6px', alignItems:'center'}}><Check size={14} color="#007aff" /> API Development & Database Design</div>
              <div style={{display:'flex', gap:'6px', alignItems:'center'}}><Check size={14} color="#007aff" /> Scalable and Maintainable Architecture</div>
              <div style={{display:'flex', gap:'6px', alignItems:'center'}}><Check size={14} color="#007aff" /> End-to-End Product Development</div>
            </div>
          </div>

          {/* Personal Brand Statement */}
          <div style={{
            padding: '16px',
            background: 'white',
            border: '1px solid rgba(0,0,0,0.06)',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
            fontStyle: 'italic',
            textAlign: 'center',
            color: '#333',
            fontSize: '13.5px',
            fontWeight: 500,
            lineHeight: 1.6,
          }}>
            "I don't just design interfaces or write code—I build complete digital products that solve real-world problems through a combination of user-centered design and modern software engineering."
          </div>

          {/* Developer Roadmap Badge */}
          <div style={{
            background: 'linear-gradient(90deg, #f0f4ff 0%, #ffffff 100%)',
            border: '1px solid #dce4ff',
            borderRadius: '10px',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#005bb5', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Rocket size={16} /> Developer Growth Roadmap
            </div>
            <div style={{ fontSize: '12px', color: '#555', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}>
              MERN <span style={{ color: '#007aff' }}>→</span> React Native <span style={{ color: '#007aff' }}>→</span> Cloud <span style={{ color: '#007aff' }}>→</span> DevOps <span style={{ color: '#007aff' }}>→</span> AI Applications
            </div>
          </div>

          {/* Internships Section */}
          <div>
            <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '20px 0 10px 0', color: '#111' }}>Internships</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                background: 'white',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: '10px',
                padding: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
              }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>Better Tomorrow</div>
                <div style={{ fontSize: '12px', color: '#007aff', fontWeight: 600, marginBottom: '2px' }}>MERN Stack Developer</div>
              </div>
              <div style={{
                background: 'white',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: '10px',
                padding: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
              }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>Isaii Technologies & Private Limited</div>
                <div style={{ fontSize: '12px', color: '#007aff', fontWeight: 600, marginBottom: '2px' }}>UI/UX Designer, Project Manager & Branding</div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div style={{
            background: 'rgba(0,0,0,0.02)',
            borderRadius: '10px',
            padding: '12px 16px',
            fontSize: '12.5px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '10px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#555' }}>
              <MapPin size={14} color="#888" />
              <span>Tamil Nadu, India</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#555' }}>
              <Mail size={14} color="#888" />
              <a href="mailto:sudhakarjk08@gmail.com" style={{ color: '#007aff', textDecoration: 'none', fontWeight: 600 }}>
                sudhakarjk08@gmail.com
              </a>
            </div>
          </div>

        </div>
      )}

      {/* Roadmap Tab */}
      {activeTab === 'roadmap' && (
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 6px 0', color: '#111' }}>My Professional Journey</h3>
          <p style={{ fontSize: '12.5px', color: '#666', margin: '0 0 20px 0' }}>
            A timeline of milestones illustrating my progression and design accomplishments.
          </p>

          {/* Vertical Roadmap Timeline */}
          <div style={{ position: 'relative', paddingLeft: '24px', margin: '0 10px' }}>
            
            {/* Center Line Track */}
            <div style={{
              position: 'absolute',
              top: '8px',
              bottom: '8px',
              left: '7px',
              width: '2px',
              background: 'linear-gradient(to bottom, #007aff 0%, #00c6ff 80%, rgba(0, 198, 255, 0.1) 100%)',
            }}></div>

            {/* Milestones nodes */}
            {milestones.map((m, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: '22px' }}>
                
                {/* Timeline Bulb Node */}
                <div style={{
                  position: 'absolute',
                  left: '-24px',
                  top: '2px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: m.status === 'active' ? '#00c6ff' : '#007aff',
                  border: '3px solid white',
                  boxShadow: `0 0 0 2px ${m.status === 'active' ? 'rgba(0, 198, 255, 0.4)' : 'rgba(0, 122, 255, 0.4)'}, 0 2px 6px rgba(0,0,0,0.15)`,
                  zIndex: 2,
                }}></div>

                {/* Milestone Detail Card */}
                <div style={{
                  background: 'white',
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderRadius: '12px',
                  padding: '14px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#111' }}>
                      {m.title}
                    </h4>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'white',
                      background: m.status === 'active' ? '#00c6ff' : '#007aff',
                      padding: '1px 6px',
                      borderRadius: '4px',
                    }}>
                      {m.year}
                    </span>
                  </div>
                  <h5 style={{ margin: '0 0 8px 0', fontSize: '11.5px', color: '#777', fontWeight: 600 }}>
                    {m.subtitle}
                  </h5>
                  <p style={{ margin: 0, fontSize: '12px', color: '#555', lineHeight: 1.5, textAlign: 'justify' }}>
                    {m.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      )}

      {/* Resume Tab */}
      {activeTab === 'resume' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(0, 122, 255, 0.05)',
            border: '1px solid rgba(0, 122, 255, 0.12)',
            borderRadius: '12px',
            padding: '14px 18px',
          }}>
            <div>
              <h3 style={{ margin: '0 0 2px 0', fontSize: '14px', fontWeight: 700, color: '#111' }}>Sudhakar's Professional Resume</h3>
              <p style={{ margin: 0, fontSize: '11.5px', color: '#666' }}>Formatted as a high-quality print-ready PDF</p>
            </div>

            <a
              href="/img/Sudhakar.j(23cs168).pdf"
              download="Sudhakar_J_Resume.pdf"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: '#007aff',
                color: 'white',
                padding: '8px 14px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(0, 122, 255, 0.25)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#0062cc'}
              onMouseLeave={e => e.currentTarget.style.background = '#007aff'}
            >
              <Download size={14} /> Download PDF
            </a>
          </div>

          {/* PDF Viewer Iframe with fallback Card */}
          <div style={{
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
            background: '#ececec',
            height: '420px',
            position: 'relative',
          }}>
            <img
              src="/img/sudhakar.resume.jpg"
              alt="Sudhakar Resume Preview"
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          </div>

        </div>
      )}

    </div>
  );
}

// Styling helper functions
function badgeStyle(bg, color) {
  return {
    background: bg,
    color,
    fontSize: '10.5px',
    fontWeight: 600,
    padding: '3px 8px',
    borderRadius: '12px',
    display: 'inline-block',
  };
}

function statCardStyle() {
  return {
    background: 'white',
    border: '1px solid rgba(0,0,0,0.06)',
    borderRadius: '12px',
    padding: '12px 6px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.01)',
  };
}
