import React, { useState } from 'react';
import { caseStudiesData } from '../../data/caseStudiesData';
import { CheckCircle2, ChevronRight, HelpCircle, Layers, Target, TrendingUp, AlertCircle, ArrowRight, Check } from 'lucide-react';

export default function CaseStudyWindow({ projectId }) {
  const data = caseStudiesData[projectId];
  const [activeStep, setActiveStep] = useState(0);

  if (!data) {
    return (
      <div style={{ padding: '20px', color: '#ff4d5a', textAlign: 'center', fontWeight: 600 }}>
        Case Study data not found for "{projectId}".
      </div>
    );
  }

  // Determine project theme colors
  const themes = {
    uyircare: {
      primary: '#ff3b30',
      primaryBg: '#ffe5e5',
      accent: '#e63946',
      badgeBg: 'rgba(255, 59, 48, 0.1)',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ff3b30 100%)',
      shadow: 'rgba(255, 59, 48, 0.25)',
    },
    viveha: {
      primary: '#d97706',
      primaryBg: '#fef3c7',
      accent: '#b45309',
      badgeBg: 'rgba(217, 119, 6, 0.1)',
      gradient: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
      shadow: 'rgba(217, 119, 6, 0.25)',
    },
    nexvora: {
      primary: '#6366f1',
      primaryBg: '#e0e7ff',
      accent: '#4338ca',
      badgeBg: 'rgba(99, 102, 241, 0.1)',
      gradient: 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)',
      shadow: 'rgba(99, 102, 241, 0.25)',
    }
  };

  const theme = themes[projectId] || themes.nexvora;

  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: '#333', lineHeight: 1.6 }}>
      
      {/* 1. Hero / Header Banner */}
      <div style={{
        position: 'relative',
        borderRadius: '16px',
        padding: '30px',
        background: theme.gradient,
        color: 'white',
        boxShadow: `0 8px 30px ${theme.shadow}`,
        marginBottom: '28px',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          opacity: 0.15,
          pointerEvents: 'none',
        }}>
          <Layers size={180} />
        </div>

        <span style={{
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          background: 'rgba(255,255,255,0.25)',
          padding: '4px 10px',
          borderRadius: '20px',
          display: 'inline-block',
          marginBottom: '10px',
        }}>
          Featured Case Study
        </span>

        <h1 style={{ margin: '0 0 6px 0', fontSize: '32px', fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          {data.title}
        </h1>
        <p style={{ margin: '0 0 20px 0', fontSize: '16px', opacity: 0.95, fontWeight: 500 }}>
          {data.subtitle}
        </p>

        {/* Metadata Details Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '12px',
          background: 'rgba(0,0,0,0.12)',
          borderRadius: '12px',
          padding: '15px',
          backdropFilter: 'blur(8px)',
        }}>
          <div>
            <div style={{ fontSize: '10px', textTransform: 'uppercase', opacity: 0.7, fontWeight: 700, letterSpacing: '0.04em' }}>My Role</div>
            <div style={{ fontSize: '13px', fontWeight: 700 }}>{data.role}</div>
          </div>
          <div>
            <div style={{ fontSize: '10px', textTransform: 'uppercase', opacity: 0.7, fontWeight: 700, letterSpacing: '0.04em' }}>Platform</div>
            <div style={{ fontSize: '13px', fontWeight: 700 }}>{data.platform}</div>
          </div>
          <div>
            <div style={{ fontSize: '10px', textTransform: 'uppercase', opacity: 0.7, fontWeight: 700, letterSpacing: '0.04em' }}>Timeline</div>
            <div style={{ fontSize: '13px', fontWeight: 700 }}>{data.timeline}</div>
          </div>
          <div>
            <div style={{ fontSize: '10px', textTransform: 'uppercase', opacity: 0.7, fontWeight: 700, letterSpacing: '0.04em' }}>Deliverables</div>
            <div style={{ fontSize: '13px', fontWeight: 700 }}>{data.type.split('•')[0]}</div>
          </div>
        </div>
      </div>

      {/* 2. Overview */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#111' }}>
          <span style={{ width: '4px', height: '18px', borderRadius: '4px', background: theme.primary, display: 'inline-block' }}></span>
          Project Overview
        </h2>
        <p style={{ fontSize: '14.5px', color: '#444', textAlign: 'justify' }}>
          {data.overview}
        </p>
      </section>

      {/* 3. Problem Statement & Pain Points */}
      <section style={{ marginBottom: '36px' }}>
        <div style={{ background: '#fafafa', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '14px', padding: '20px', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '15px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', color: '#111' }}>
            <AlertCircle size={18} color="#f59e0b" /> The Challenge
          </h3>
          <p style={{ fontSize: '13.5px', color: '#555', margin: 0 }}>
            {data.problem}
          </p>
        </div>

        <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#888', letterSpacing: '0.08em', marginBottom: '12px' }}>
          Key User Pain Points
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
          {data.painPoints.map((pp, idx) => (
            <div key={idx} style={{
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '12px',
              padding: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              transition: 'transform 0.2s ease',
            }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                color: theme.primary,
                background: theme.badgeBg,
                padding: '2px 8px',
                borderRadius: '6px',
                display: 'inline-block',
                marginBottom: '8px',
              }}>
                0{idx + 1} · {pp.title}
              </span>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#555', lineHeight: 1.5 }}>
                {pp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Target Audience / Personas */}
      <section style={{ marginBottom: '36px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', color: '#111' }}>
          <span style={{ width: '4px', height: '18px', borderRadius: '4px', background: theme.primary, display: 'inline-block' }}></span>
          Target Audience & Needs
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {data.audience.map((aud, idx) => (
            <div key={idx} style={{
              background: 'rgba(250, 250, 250, 0.7)',
              borderLeft: `4px solid ${theme.primary}`,
              borderRadius: '8px',
              padding: '15px',
            }}>
              <h4 style={{ margin: '0 0 2px 0', fontSize: '14px', fontWeight: 700, color: '#111' }}>{aud.name}</h4>
              <span style={{ fontSize: '11px', color: '#888', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>
                {aud.role}
              </span>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#444' }}>
                <strong>Key Need: </strong>{aud.need}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Qualitative/Quantitative Progress Chart */}
      <section style={{
        background: 'rgba(240, 245, 255, 0.4)',
        border: '1px solid rgba(0,0,0,0.05)',
        borderRadius: '14px',
        padding: '20px',
        marginBottom: '36px'
      }}>
        <h3 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#111', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TrendingUp size={18} color={theme.primary} />
          Impact Analysis: {data.existingVsNew.metricTitle}
        </h3>
        <p style={{ fontSize: '12.5px', color: '#666', margin: '0 0 16px 0' }}>
          {data.existingVsNew.chartDescription}
        </p>

        {/* Custom Progress Bars (Sleek Vanilla HTML/CSS alternative to Heavy Chart libraries) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 600, color: '#666', marginBottom: '4px' }}>
              <span>{data.existingVsNew.existingLabel}</span>
              <span>{data.existingVsNew.existingValue}% Friction</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${data.existingVsNew.existingValue}%`, height: '100%', background: '#9e9e9e', borderRadius: '4px' }}></div>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 700, color: theme.primary, marginBottom: '4px' }}>
              <span>{data.existingVsNew.newLabel}</span>
              <span>Accelerated (Ready)</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${data.existingVsNew.newValue}%`, height: '100%', background: theme.primary, borderRadius: '4px' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process & Strategy */}
      <section style={{ marginBottom: '36px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', color: '#111' }}>
          <span style={{ width: '4px', height: '18px', borderRadius: '4px', background: theme.primary, display: 'inline-block' }}></span>
          Design Process & Key Decisions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {data.process.map((pr, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{
                background: theme.primaryBg,
                color: theme.primary,
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '13px',
                flexShrink: 0,
              }}>
                {idx + 1}
              </div>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '14px', fontWeight: 700, color: '#111' }}>{pr.phase}</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#555' }}>{pr.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Design Execution / Interactive Multi-Step Flow */}
      <section style={{ marginBottom: '38px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', color: '#111' }}>
          <span style={{ width: '4px', height: '18px', borderRadius: '4px', background: theme.primary, display: 'inline-block' }}></span>
          Design Execution
        </h2>
        <p style={{ fontSize: '13px', color: '#666', margin: '0 0 16px 0' }}>
          Click on the tabs below to explore the detailed interactive product flows.
        </p>

        {/* Tab Selectors */}
        <div style={{ display: 'flex', background: 'rgba(0,0,0,0.04)', borderRadius: '10px', padding: '4px', gap: '4px', marginBottom: '18px' }}>
          {data.steps.map((st, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              style={{
                flex: 1,
                border: 'none',
                background: activeStep === idx ? 'white' : 'transparent',
                color: activeStep === idx ? theme.primary : '#666',
                fontWeight: activeStep === idx ? 700 : 500,
                padding: '8px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '12px',
                boxShadow: activeStep === idx ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              {st.stepNo}
            </button>
          ))}
        </div>

        {/* Active Step Details */}
        <div style={{
          background: 'rgba(255,255,255,0.7)',
          border: '1px solid rgba(0,0,0,0.06)',
          borderRadius: '14px',
          padding: '20px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '20px',
          alignItems: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
        }}>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '15px', fontWeight: 700, color: theme.primary, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ChevronRight size={18} />
              {data.steps[activeStep].title}
            </h3>
            <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#555', lineHeight: 1.6 }}>
              {data.steps[activeStep].description}
            </p>
          </div>

          <div style={{
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.08)',
            background: '#fafafa',
          }}>
            <img
              src={data.steps[activeStep].image}
              alt={data.steps[activeStep].title}
              style={{ width: '100%', maxHeight: '350px', objectFit: 'contain', display: 'block', margin: '0 auto' }}
            />
          </div>
        </div>
      </section>

      {/* 8. Usability Testing & Validation */}
      <section style={{ marginBottom: '36px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', color: '#111' }}>
          <span style={{ width: '4px', height: '18px', borderRadius: '4px', background: theme.primary, display: 'inline-block' }}></span>
          Usability Testing & Iterations
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {data.usability.map((usa, idx) => (
            <div key={idx} style={{
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.06)',
              borderRadius: '12px',
              padding: '16px',
            }}>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '13px', fontWeight: 700, color: '#111', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <HelpCircle size={16} color={theme.primary} />
                {usa.question}
              </h4>
              <p style={{ margin: 0, fontSize: '13px', color: '#555', borderLeft: `2px solid ${theme.primary}`, paddingLeft: '10px', fontStyle: 'italic' }}>
                {usa.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Final Outcomes */}
      <section style={{
        background: theme.gradient,
        color: 'white',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: `0 8px 24px ${theme.shadow}`,
      }}>
        <h2 style={{ fontSize: '18px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', color: 'white' }}>
          <CheckCircle2 size={20} />
          Final Impact & Outcomes
        </h2>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {data.outcomes.map((out, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', fontWeight: 500 }}>
              <span style={{ background: 'rgba(255,255,255,0.25)', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontSize: '11px', flexShrink: 0, fontWeight: 700 }}>
                <Check size={12} />
              </span>
              <span style={{ flex: 1 }}>{out}</span>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
