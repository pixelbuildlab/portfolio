import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden px-6'>
      <div className='absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-float' />
      <div
        className='absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float'
        style={{ animationDelay: '1.5s' }}
      />
      <div className='absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px]' />

      <div className='relative z-10 max-w-4xl mx-auto text-center'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='font-mono text-primary text-sm tracking-widest uppercase mb-6'
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className='text-5xl md:text-8xl font-bold tracking-tight mb-6'
        >
          <span className='text-foreground'>Muhammad </span>
          <span className='bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent'>
            Waqar
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4'
        >
          Software Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className='text-base text-muted-foreground max-w-2xl mx-auto mb-10'
        >
          Enthusiastic about software development and skilled at resolving
          challenges. Full-stack developer crafting scalable solutions with
          modern technologies across Python, Node.js, React, and cloud
          platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className='flex items-center justify-center gap-6 flex-wrap'
        >
          <a
            href='#projects'
            className='bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity'
          >
            View Projects
          </a>
          <a
            href='#contact'
            className='border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:border-primary transition-colors'
          >
            Get In Touch
          </a>
          <div className='flex gap-4'>
            <a
              href='https://github.com/pixelbuildlab'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <Github className='w-6 h-6' />
            </a>
            <a
              href='https://linkedin.com/in/m-waqar1'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-secondary transition-colors'
            >
              <Linkedin className='w-6 h-6' />
            </a>
            <a
              href='mailto:waqardanish1@gmail.com'
              className='text-muted-foreground hover:text-accent transition-colors'
            >
              <Mail className='w-6 h-6' />
            </a>
            <a
              href='tel:+923013073514'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <Phone className='w-6 h-6' />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2'
      >
        <ArrowDown className='w-5 h-5 text-muted-foreground animate-bounce' />
      </motion.div>
    </section>
  )
}

export default HeroSection
