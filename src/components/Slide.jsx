import { motion } from 'framer-motion'

function Slide({ id, title, subtitle, children, bg = 'bg-slate-900' }) {
  return (
    <section id={id} className={`relative min-h-screen w-full ${bg} text-white flex items-center`}>      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(234,179,8,0.08),transparent_40%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-blue-200/80 max-w-3xl"
          >
            {subtitle}
          </motion.p>
        )}
        <div className="mt-10 grid gap-8">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Slide
