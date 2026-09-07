export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'default',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'default' | 'inverted'
}) {
  const centered = align === 'center'
  const inverted = tone === 'inverted'

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
        {eyebrow}
      </span>
      <h2
        className={`mt-3 font-serif text-3xl font-bold text-balance sm:text-4xl ${
          inverted ? 'text-background' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed text-pretty ${
            inverted ? 'text-background/70' : 'text-muted-foreground'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
