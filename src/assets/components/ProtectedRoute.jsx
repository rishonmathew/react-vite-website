import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import supabase from '../lib/supabaseClient'

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    async function checkAuth() {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session) {
          navigate('/login')
        } else {
          setLoading(false)
        }
      } catch (error) {
        console.error('Auth check error:', error)
        navigate('/login')
      }
    }

    checkAuth()
  }, [navigate])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 mx-auto border-4 border-primary border-t-transparent rounded-full"
          />
          <p className="text-slate-300">Verifying authentication...</p>
        </motion.div>
      </div>
    )
  }

  return children
}
