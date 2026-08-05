export type Mode = 'snapshot' | 'orbit' | 'signal'

const modes: { id: Mode; label: string; note: string }[] = [
  { id: 'snapshot', label: '01 / Snapshot', note: 'one-screen editorial' },
  { id: 'orbit', label: '02 / Orbit', note: 'dark spatial system' },
  { id: 'signal', label: '03 / Signal', note: 'electric new wave' },
]

export default function DesignSelector({
  mode,
  setMode,
}: {
  mode: Mode
  setMode: (mode: Mode) => void
}) {
  return (
    <div
      className='design-selector'
      aria-label='Portfolio design selector'
    >
      <span className='selector-label'>Portfolio // choose a direction</span>
      <div
        className='selector-options'
        role='tablist'
      >
        {modes.map((item) => (
          <button
            key={item.id}
            className={mode === item.id ? 'active' : ''}
            onClick={() => setMode(item.id)}
            role='tab'
            aria-selected={mode === item.id}
          >
            <span>{item.label}</span>
            <small>{item.note}</small>
          </button>
        ))}
      </div>
    </div>
  )
}
