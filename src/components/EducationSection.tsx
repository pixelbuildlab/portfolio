import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

const EducationSection = () => {
  return (
    <section
      id='education'
      className='py-32 px-6'
    >
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className='font-mono text-primary text-sm tracking-widest uppercase mb-4'>
            Education & Certifications
          </h2>
          <h3 className='text-4xl md:text-5xl font-bold mb-12'>
            Academic background
          </h3>
        </motion.div>

        <div className='space-y-8'>
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='relative pl-8 border-l-2 border-accent/30'
          >
            <div className='absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center'>
              <GraduationCap className='w-3 h-3 text-accent-foreground' />
            </div>
            <div className='mb-1'>
              <span className='font-mono text-xs text-accent'>
                September 2018 — September 2022
              </span>
            </div>
            <h4 className='text-xl font-bold'>B.S. Software Engineering</h4>
            <p className='text-accent font-mono text-sm mb-1'>
              International Islamic University — Islamabad
            </p>
            <p className='text-muted-foreground text-sm'>CGPA: 3.27</p>
          </motion.div>

          {/* Certificate */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className='relative pl-8 border-l-2 border-primary/30'
          >
            <div className='absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center'>
              <Award className='w-3 h-3 text-primary-foreground' />
            </div>
            <div className='mb-1'>
              <span className='font-mono text-xs text-primary'>2025</span>
            </div>
            <h4 className='text-xl font-bold'>Oracle Cloud Infrastructure</h4>
            <p className='text-muted-foreground text-sm'>
              AI Foundations Associate Certification
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
