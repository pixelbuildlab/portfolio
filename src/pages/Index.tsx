import { useEffect, useState } from 'react'
import DesignSelector, {
  type Mode,
} from '@/components/portfolio/DesignSelector'
import Snapshot from '@/components/portfolio/Snapshot'
import Orbit from '@/components/portfolio/Orbit'
import Signal from '@/components/portfolio/Signal'

const Index = () => {
  const [mode, setMode] = useState<Mode>('snapshot')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [mode])

  return (
    <div className={`portfolio-showcase mode-${mode}`}>
      <DesignSelector
        mode={mode}
        setMode={setMode}
      />
      {mode === 'snapshot' && <Snapshot />}
      {mode === 'orbit' && <Orbit />}
      {mode === 'signal' && <Signal />}
    </div>
  )
}

export default Index
