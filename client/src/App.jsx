import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex min-h-screen items-center justify-center bg-slate-950">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-fuchsia-500/30 border-t-fuchsia-500" />
              <p className="mt-6 text-sm uppercase tracking-[0.35em] text-slate-400">Loading FanFest 2026</p>
            </div>
          </motion.div>
        ) : (
          <motion.div key="content" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
