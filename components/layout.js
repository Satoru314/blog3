import Header from '@/components/header.js'
import Footer from '@/components/footer.js'
export default function Layout(props) {
  return(
  <>
  <Header/>
  <main>
  {props.children}
  </main>
 <Footer/>
 </>
 )
  
}