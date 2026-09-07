import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center sm:px-6">
        <img
          src="/enes-mobilya-logo.png"
          alt={`${site.name} logosu`}
          className="h-14 w-auto"
        />
        <p className="max-w-md text-sm text-muted-foreground text-pretty">
          {site.slogan}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}
