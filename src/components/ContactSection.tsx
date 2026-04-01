import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react'

const ContactSection = () => {
  return (
    <section
      id='contact'
      className='py-32 px-6'
    >
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className='font-mono text-primary text-sm tracking-widest uppercase mb-4'>
            Contact
          </h2>
          <h3 className='text-4xl md:text-5xl font-bold mb-12'>
            Let's connect
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className='text-muted-foreground text-lg mb-10'>
            I'm always open to new opportunities and interesting projects. Feel
            free to reach out!
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <a
              href='mailto:waqardanish1@gmail.com'
              className='flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group'
            >
              <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                <Mail className='w-5 h-5 text-primary' />
              </div>
              <span>waqardanish1@gmail.com</span>
            </a>
            <a
              href='tel:+923013073514'
              className='flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group'
            >
              <div className='w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors'>
                <Phone className='w-5 h-5 text-secondary' />
              </div>
              <span>+92 (301) 307-3514</span>
            </a>
            <div className='flex items-center gap-4 text-muted-foreground'>
              <div className='w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center'>
                <MapPin className='w-5 h-5 text-accent' />
              </div>
              <span>Valencia Town, Lahore 54770</span>
            </div>
            <a
              href='https://github.com/pixelbuildlab/m-waqar-1'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group'
            >
              <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                <Github className='w-5 h-5 text-primary' />
              </div>
              <span>pixelbuildlab/m-waqar-1</span>
            </a>
            <a
              href='https://linkedin.com/in/m-waqar1'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group'
            >
              <div className='w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors'>
                <Linkedin className='w-5 h-5 text-secondary' />
              </div>
              <span>linkedin.com/in/m-waqar1</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
