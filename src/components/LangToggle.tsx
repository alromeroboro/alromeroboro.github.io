import { useState } from 'react';

interface LangToggleProps {
  locale: string;
  path: string;
}

export default function LangToggle({ locale, path }: LangToggleProps) {
  const enHref = path;
  const esHref = `/es${path === '/' ? '' : path}`;

  const [pending, setPending] = useState<'en' | 'es' | null>(null);

  function navigate(e: React.MouseEvent, target: 'en' | 'es') {
    e.preventDefault();
    if (target === locale) return;
    setPending(target);
    setTimeout(() => {
      window.location.href = target === 'en' ? enHref : esHref;
    }, 380);
  }

  const activeLocale = (pending ?? locale) as 'en' | 'es';
  const isES = activeLocale === 'es';

  const neon = '#00ffff';
  const fuchsia = '#ff00c8';
  const activeColor = isES ? fuchsia : neon;
  const activeGlow = isES
    ? '0 0 6px #ff00c8, 0 0 18px #ff00c866'
    : '0 0 6px #00ffff, 0 0 18px #00ffff66';

  // 13 tick marks: every 4th is taller
  const ticks = Array.from({ length: 13 }, (_, i) => ({
    tall: i % 4 === 0,
  }));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3px',
        fontFamily: "'JetBrains Mono', 'IBM Plex Mono', monospace",
        userSelect: 'none',
      }}
    >
      {/* Micro label */}
      <div
        style={{
          fontSize: '7px',
          letterSpacing: '0.15em',
          color: 'rgba(192, 200, 208, 0.45)',
          textTransform: 'uppercase',
        }}
      >
        LANG.SYS
      </div>

      {/* Toggle housing */}
      <div
        style={{
          position: 'relative',
          width: '106px',
          height: '26px',
          background: 'linear-gradient(180deg, #0a0e1a 0%, #050810 100%)',
          border: `1px solid ${activeColor}55`,
          borderRadius: '2px',
          display: 'flex',
          alignItems: 'stretch',
          transition: 'border-color 0.35s',
        }}
      >
        {/* Corner L-brackets */}
        {/* Top-left */}
        <div style={{ position: 'absolute', top: 2, left: 2, width: 6, height: 6,
          borderTop: `1px solid ${activeColor}88`, borderLeft: `1px solid ${activeColor}88` }} />
        {/* Top-right */}
        <div style={{ position: 'absolute', top: 2, right: 2, width: 6, height: 6,
          borderTop: `1px solid ${activeColor}88`, borderRight: `1px solid ${activeColor}88` }} />
        {/* Bottom-left */}
        <div style={{ position: 'absolute', bottom: 2, left: 2, width: 6, height: 6,
          borderBottom: `1px solid ${activeColor}88`, borderLeft: `1px solid ${activeColor}88` }} />
        {/* Bottom-right */}
        <div style={{ position: 'absolute', bottom: 2, right: 2, width: 6, height: 6,
          borderBottom: `1px solid ${activeColor}88`, borderRight: `1px solid ${activeColor}88` }} />

        {/* Center divider hairline */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '20%',
          height: '60%',
          width: '1px',
          background: 'rgba(255,255,255,0.12)',
          transform: 'translateX(-50%)',
        }} />

        {/* Sliding thumb */}
        <div
          style={{
            position: 'absolute',
            top: '2px',
            bottom: '2px',
            width: 'calc(50% - 4px)',
            left: isES ? 'calc(50% + 2px)' : '2px',
            transition: 'left 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.35s, border-color 0.35s, box-shadow 0.35s',
            background: `${activeColor}22`,
            border: `1px solid ${activeColor}`,
            borderRadius: '1px',
            boxShadow: `inset 0 0 6px ${activeColor}44, ${activeGlow}`,
          }}
        />

        {/* EN label */}
        <a
          href={enHref}
          onClick={(e) => navigate(e, 'en')}
          aria-current={locale === 'en' ? 'true' : undefined}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '9px',
            letterSpacing: '0.12em',
            fontWeight: 700,
            textDecoration: 'none',
            position: 'relative',
            zIndex: 1,
            color: !isES ? neon : 'rgba(192,200,208,0.35)',
            textShadow: !isES ? '0 0 8px #00ffff, 0 0 20px #00ffff66' : 'none',
            transition: 'color 0.35s, text-shadow 0.35s',
          }}
        >
          EN
        </a>

        {/* ES label */}
        <a
          href={esHref}
          onClick={(e) => navigate(e, 'es')}
          aria-current={locale === 'es' ? 'true' : undefined}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '9px',
            letterSpacing: '0.12em',
            fontWeight: 700,
            textDecoration: 'none',
            position: 'relative',
            zIndex: 1,
            color: isES ? fuchsia : 'rgba(192,200,208,0.35)',
            textShadow: isES ? '0 0 8px #ff00c8, 0 0 20px #ff00c866' : 'none',
            transition: 'color 0.35s, text-shadow 0.35s',
          }}
        >
          ES
        </a>
      </div>

      {/* Tick marks */}
      <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-end', height: '6px' }}>
        {ticks.map((tick, i) => (
          <div
            key={i}
            style={{
              width: '1px',
              height: tick.tall ? '6px' : '3px',
              background: `${activeColor}44`,
              transition: 'background 0.35s',
            }}
          />
        ))}
      </div>
    </div>
  );
}
