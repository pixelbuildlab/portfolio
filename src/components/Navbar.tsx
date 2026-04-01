import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50'>
      <div className='max-w-4xl mx-auto px-6 h-16 flex items-center justify-between'>
        <a
          href='#'
          className='flex items-center gap-2 group'
        >
          <div className='w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform'>
            <Code2 className='w-4 h-4 text-primary-foreground' />
          </div>
          <span className='font-bold text-sm font-mono text-foreground'>
            M.Waqar
          </span>
        </a>

        <div className='hidden md:flex items-center gap-8'>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className='text-muted-foreground hover:text-foreground transition-colors text-sm'
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className='md:hidden text-foreground'
        >
          {open ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
        </button>
      </div>

      {open && (
        <div className='md:hidden border-t border-border bg-background px-6 py-4 space-y-3'>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className='block text-muted-foreground hover:text-foreground transition-colors'
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
