/**
 * Next.js App Component
 * 
 * This is the root component that wraps all pages in the application.
 * It imports global styles and renders the current page component.
 * 
 * @param {Object} Component - The page component to render
 * @param {Object} pageProps - Props passed to the page component
 */
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
