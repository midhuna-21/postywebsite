// app/search-not-found/page.jsx
'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SearchNotFound() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const router = useRouter()

  return (
    <div style={{ textAlign: 'center', padding: '80px 20px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>No Results Found</h1>
      <p style={{ fontSize: '1rem', marginBottom: '30px', color: '#555' }}>
        Sorry, we couldn’t find any results for <strong>"{query}"</strong>.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button
        aria-label="go-back"
          onClick={() => router.back()}
          style={{
            padding: '10px 20px',
            border: 'none',
            backgroundColor: '#0070f3',
            color: '#fff',
            cursor: 'pointer',
            borderRadius: '5px'
          }}
        >
          Go Back
        </button>

        <Link
          href="/"
          title='home'
          style={{
            padding: '10px 20px',
            backgroundColor: '#eaeaea',
            color: '#333',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
