interface LangToggleProps {
  locale: string;
  /** Current path without locale prefix, e.g. "/" or "/projects" */
  path: string;
}

export default function LangToggle({ locale, path }: LangToggleProps) {
  const enHref = path;
  const esHref = `/es${path === '/' ? '' : path}`;

  return (
    <div
      className="flex items-center gap-2 font-body text-[10px] tracking-widest"
      style={{ fontFamily: 'inherit' }}
    >
      <a
        href={enHref}
        className={
          locale === 'en'
            ? 'text-neon'
            : 'text-muted/50 hover:text-neon transition-colors'
        }
        style={locale === 'en' ? { textShadow: '0 0 8px #00ffff, 0 0 20px #00ffff66' } : undefined}
        aria-current={locale === 'en' ? 'true' : undefined}
      >
        [ EN ]
      </a>
      <span style={{ color: 'rgba(14,30,46,0.8)' }}>//</span>
      <a
        href={esHref}
        className={
          locale === 'es'
            ? 'text-fuchsia'
            : 'text-muted/50 hover:text-fuchsia transition-colors'
        }
        style={locale === 'es' ? { textShadow: '0 0 8px #ff00c8, 0 0 20px #ff00c866' } : undefined}
        aria-current={locale === 'es' ? 'true' : undefined}
      >
        [ ES ]
      </a>
    </div>
  );
}
