export default function Home() {
  return (
    <main style={{ minHeight: '100vh', padding: 40, fontFamily: 'system-ui, sans-serif', background: '#09090b', color: '#fafafa' }}>
      <section style={{ maxWidth: 900, margin: '0 auto' }}>
        <p style={{ opacity: 0.6, marginBottom: 8 }}>MH AIOS</p>
        <h1 style={{ fontSize: 42, margin: 0 }}>Agency Omni Core</h1>
        <p style={{ opacity: 0.75, fontSize: 18, lineHeight: 1.6 }}>
          Agency Agents + Omni routing + Supabase memory.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginTop: 32 }}>
          {['Agent Registry', 'Conversations', 'Long-term Memory', 'Agent Runs'].map((item) => (
            <div key={item} style={{ border: '1px solid #27272a', borderRadius: 16, padding: 20, background: '#111113' }}>
              <strong>{item}</strong>
              <p style={{ opacity: 0.55, marginBottom: 0 }}>Supabase-backed</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
