import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import supabase from '../assets/lib/supabaseClient'
import { 
  LogOut, 
  Calendar, 
  Mail, 
  Star, 
  Users,
  TrendingUp,
  DollarSign,
  CheckCircle,
  X,
  Clock,
  Phone,
  MessageSquare,
  Eye,
  Trash2,
  Filter
} from 'lucide-react'

export default function Admin() {
  const [activeTab, setActiveTab] = useState('bookings')
  const [bookings, setBookings] = useState([])
  const [contacts, setContacts] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [stats, setStats] = useState({
    totalBookings: 0,
    pendingBookings: 0,
    totalContacts: 0,
    pendingTestimonials: 0
  })
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [activeTab])

  const fetchData = async () => {
    setLoading(true)
    try {
      // Fetch bookings
      const { data: bookingsData } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false })

      // Fetch contacts
      const { data: contactsData } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false })

      // Fetch testimonials
      const { data: testimonialsData } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false })

      setBookings(bookingsData || [])
      setContacts(contactsData || [])
      setTestimonials(testimonialsData || [])

      // Calculate stats
      setStats({
        totalBookings: bookingsData?.length || 0,
        pendingBookings: bookingsData?.filter(b => !b.completed)?.length || 0,
        totalContacts: contactsData?.length || 0,
        pendingTestimonials: testimonialsData?.filter(t => !t.approved)?.length || 0
      })
    } catch (error) {
      console.error('Fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  const approveTestimonial = async (id) => {
    try {
      await supabase
        .from('testimonials')
        .update({ approved: true })
        .eq('id', id)
      fetchData()
    } catch (error) {
      console.error('Approve error:', error)
    }
  }

  const deleteItem = async (table, id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return
    
    try {
      await supabase.from(table).delete().eq('id', id)
      fetchData()
    } catch (error) {
      console.error('Delete error:', error)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className="card-hover">
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-glow`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div>
          <div className="text-3xl font-bold text-white">{value}</div>
          <div className="text-sm text-slate-400">{label}</div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-dark py-8 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-display font-bold text-white mb-2">
              Admin Dashboard
            </h1>
            <p className="text-slate-400">
              Manage bookings, contacts, and testimonials
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="btn-secondary group"
          >
            <LogOut className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Logout
          </button>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Calendar}
            label="Total Bookings"
            value={stats.totalBookings}
            color="from-primary to-primary-light"
          />
          <StatCard
            icon={Clock}
            label="Pending Bookings"
            value={stats.pendingBookings}
            color="from-blue-500 to-blue-600"
          />
          <StatCard
            icon={Mail}
            label="Total Contacts"
            value={stats.totalContacts}
            color="from-purple-500 to-purple-600"
          />
          <StatCard
            icon={Star}
            label="Pending Reviews"
            value={stats.pendingTestimonials}
            color="from-yellow-500 to-yellow-600"
          />
        </div>

        {/* Tabs */}
        <div className="card mb-6">
          <div className="flex gap-2 border-b border-white/10 pb-4">
            {[
              { id: 'bookings', label: 'Bookings', icon: Calendar },
              { id: 'contacts', label: 'Contacts', icon: Mail },
              { id: 'testimonials', label: 'Testimonials', icon: Star }
            ].map(tab => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4 inline mr-2" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="card">
          {loading ? (
            <div className="text-center py-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 mx-auto border-4 border-primary border-t-transparent rounded-full mb-4"
              />
              <p className="text-slate-400">Loading data...</p>
            </div>
          ) : (
            <>
              {/* Bookings */}
              {activeTab === 'bookings' && (
                <div className="space-y-4">
                  {bookings.length === 0 ? (
                    <p className="text-slate-400 text-center py-8">No bookings yet</p>
                  ) : (
                    bookings.map(booking => (
                      <motion.div
                        key={booking.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">
                              {booking.first_name} {booking.last_name}
                            </h3>
                            <p className="text-sm text-slate-400">
                              {formatDate(booking.created_at)}
                            </p>
                          </div>
                          <button
                            onClick={() => deleteItem('bookings', booking.id)}
                            className="p-2 rounded-lg hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-slate-300">
                            <Mail className="w-4 h-4 text-primary" />
                            {booking.email}
                          </div>
                          <div className="flex items-center gap-2 text-slate-300">
                            <Phone className="w-4 h-4 text-primary" />
                            {booking.phone}
                          </div>
                          <div className="flex items-center gap-2 text-slate-300">
                            <Calendar className="w-4 h-4 text-primary" />
                            {booking.preferred_day}
                          </div>
                          <div className="flex items-center gap-2 text-slate-300">
                            <Clock className="w-4 h-4 text-primary" />
                            {booking.preferred_time}
                          </div>
                        </div>

                        <div className="mt-4 p-4 rounded-lg bg-white/5">
                          <div className="flex items-start gap-2">
                            <MessageSquare className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <p className="text-sm text-slate-300">{booking.topic}</p>
                          </div>
                        </div>

                        <div className="mt-4 flex gap-2 text-xs">
                          {booking.notify_sms && (
                            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                              SMS Notifications
                            </span>
                          )}
                          {booking.marketing_opt_in && (
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                              Marketing Opted In
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              )}

              {/* Contacts */}
              {activeTab === 'contacts' && (
                <div className="space-y-4">
                  {contacts.length === 0 ? (
                    <p className="text-slate-400 text-center py-8">No contacts yet</p>
                  ) : (
                    contacts.map(contact => (
                      <motion.div
                        key={contact.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">
                              {contact.name}
                            </h3>
                            <p className="text-sm text-slate-400">
                              {formatDate(contact.created_at)}
                            </p>
                          </div>
                          <button
                            onClick={() => deleteItem('contacts', contact.id)}
                            className="p-2 rounded-lg hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2 text-slate-300 mb-4">
                          <Mail className="w-4 h-4 text-primary" />
                          {contact.email}
                        </div>

                        <div className="p-4 rounded-lg bg-white/5">
                          <p className="text-sm text-slate-300 whitespace-pre-wrap">
                            {contact.message}
                          </p>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              )}

              {/* Testimonials */}
              {activeTab === 'testimonials' && (
                <div className="space-y-4">
                  {testimonials.length === 0 ? (
                    <p className="text-slate-400 text-center py-8">No testimonials yet</p>
                  ) : (
                    testimonials.map(testimonial => (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-slate-400">
                              {formatDate(testimonial.created_at)}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {!testimonial.approved && (
                              <button
                                onClick={() => approveTestimonial(testimonial.id)}
                                className="px-4 py-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-400 text-sm font-medium transition-colors"
                              >
                                <CheckCircle className="w-4 h-4 inline mr-1" />
                                Approve
                              </button>
                            )}
                            <button
                              onClick={() => deleteItem('testimonials', testimonial.id)}
                              className="p-2 rounded-lg hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${
                                  i < testimonial.rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-slate-600'
                                }`}
                              />
                            ))}
                          </div>
                          {testimonial.approved && (
                            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                              Approved
                            </span>
                          )}
                        </div>

                        {testimonial.email && (
                          <div className="flex items-center gap-2 text-slate-300 mb-4 text-sm">
                            <Mail className="w-4 h-4 text-primary" />
                            {testimonial.email}
                          </div>
                        )}

                        <div className="p-4 rounded-lg bg-white/5">
                          <p className="text-sm text-slate-300 whitespace-pre-wrap italic">
                            "{testimonial.message}"
                          </p>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  )
}
