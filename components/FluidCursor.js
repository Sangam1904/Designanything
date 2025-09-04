"use client"

import { useEffect, useRef } from 'react'

export default function FluidCursor() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const velocityRef = useRef({ x: 0, y: 0 })
  const lastMouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse tracking
    const handleMouseMove = (e) => {
      const newX = e.clientX
      const newY = e.clientY
      
      // Calculate velocity
      velocityRef.current.x = newX - lastMouseRef.current.x
      velocityRef.current.y = newY - lastMouseRef.current.y
      
      mouseRef.current.x = newX
      mouseRef.current.y = newY
      lastMouseRef.current.x = newX
      lastMouseRef.current.y = newY
    }

    // Fluid simulation
    const particles = []
    const particleCount = 50

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0,
        vy: 0,
        life: Math.random(),
        maxLife: 1,
        size: Math.random() * 3 + 1
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update particles
      particles.forEach((particle, index) => {
        // Attract to mouse
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 200) {
          const force = (200 - distance) / 200
          particle.vx += (dx / distance) * force * 0.5
          particle.vy += (dy / distance) * force * 0.5
        }
        
        // Apply velocity from mouse movement
        particle.vx += velocityRef.current.x * 0.01
        particle.vy += velocityRef.current.y * 0.01
        
        // Apply friction
        particle.vx *= 0.95
        particle.vy *= 0.95
        
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
        
        // Update life
        particle.life -= 0.005
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.life = particle.maxLife
          particle.vx = 0
          particle.vy = 0
        }
        
        // Draw particle
        const alpha = particle.life * 0.6
        const size = particle.size * particle.life
        
        ctx.save()
        ctx.globalAlpha = alpha
        ctx.fillStyle = '#1A2FFB'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })
      
      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            const alpha = (1 - distance / 100) * 0.2
            ctx.save()
            ctx.globalAlpha = alpha
            ctx.strokeStyle = '#1A2FFB'
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  )
}
