import { useEffect, useRef } from 'react'

const PALETTE = [
  [167, 139, 250],
  [0,   212, 255],
  [255, 107,  53],
  [255, 255, 255],
  [124,  58, 237],
]

function rand(min, max) { return Math.random() * (max - min) + min }

// Place this INSIDE any section that has position:relative + overflow:hidden
// It fills its parent container automatically
export default function Floating3DBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx    = canvas.getContext('2d')
    let W, H, raf
    let mx = 0, my = 0
    let particles = []

    const orbs = [
      { x: 0.15, y: 0.25, r: 320, color: [124, 58, 237], vx: 0.00012, vy: 0.00008 },
      { x: 0.80, y: 0.65, r: 280, color: [0,  212, 255], vx:-0.00010, vy: 0.00014 },
      { x: 0.50, y: 0.85, r: 240, color: [255,107,  53], vx: 0.00008, vy:-0.00010 },
    ]

    function init() {
      const parent = canvas.parentElement
      W = canvas.width  = parent.offsetWidth  || window.innerWidth
      H = canvas.height = parent.offsetHeight || window.innerHeight
      particles = Array.from({ length: 100 }, () => {
        const [r, g, b] = PALETTE[Math.floor(Math.random() * PALETTE.length)]
        return {
          x: rand(0, W), y: rand(0, H),
          vx: rand(-0.3, 0.3), vy: rand(-0.3, 0.3),
          r, g, b,
          size: rand(0.8, 2.2),
          alpha: rand(0.3, 0.7),
        }
      })
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      const px = (mx / (W || 1) - 0.5) * 22
      const py = (my / (H || 1) - 0.5) * 14

      // glowing orbs
      orbs.forEach(o => {
        const ox = o.x * W + px * 0.5
        const oy = o.y * H + py * 0.5
        const g  = ctx.createRadialGradient(ox, oy, 0, ox, oy, o.r)
        g.addColorStop(0,   `rgba(${o.color},0.20)`)
        g.addColorStop(0.5, `rgba(${o.color},0.07)`)
        g.addColorStop(1,   `rgba(${o.color},0)`)
        ctx.beginPath()
        ctx.arc(ox, oy, o.r, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
        o.x += o.vx; o.y += o.vy
        if (o.x < 0 || o.x > 1) o.vx *= -1
        if (o.y < 0 || o.y > 1) o.vy *= -1
      })

      // network lines
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        const ax = a.x + px, ay = a.y + py
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const d = Math.hypot(ax - b.x - px, ay - b.y - py)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(ax, ay)
            ctx.lineTo(b.x + px, b.y + py)
            ctx.strokeStyle = `rgba(167,139,250,${(1 - d / 110) * 0.13})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // particles + glow
      particles.forEach(p => {
        ctx.shadowBlur  = 10
        ctx.shadowColor = `rgba(${p.r},${p.g},${p.b},1)`
        ctx.beginPath()
        ctx.arc(p.x + px, p.y + py, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${p.alpha})`
        ctx.fill()
        ctx.shadowBlur = 0
        p.x += p.vx; p.y += p.vy
        if (p.x < -50) p.x = W + 50
        if (p.x > W+50) p.x = -50
        if (p.y < -50) p.y = H + 50
        if (p.y > H+50) p.y = -50
      })

      raf = requestAnimationFrame(draw)
    }

    init()
    draw()

    const ro = new ResizeObserver(() => init())
    ro.observe(canvas.parentElement)
    const onMouse = e => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMouse)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position:      'absolute',
        inset:         0,
        width:         '100%',
        height:        '100%',
        zIndex:        0,
        pointerEvents: 'none',
      }}
    />
  )
}
