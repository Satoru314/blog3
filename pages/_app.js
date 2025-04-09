import "@/styles/globals.css";
import Layout from '@/components/layout'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Prevent Font Awesome from adding its CSS automatically (since we use custom CSS for it)
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}