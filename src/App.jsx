import { Home, About, Products, Reviews, Footer, Contact } from './sessions';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <main className="relative">
      <NavBar/>
      <section className="xl:padding-1 wide:padding-r padding-b">
         <Home/>
      </section>

      <section>
         <About/>
      </section>

      <section>
         <Products/>
      </section>

      <section>
         <Reviews/>
      </section>

      <section>
        <Contact/>
      </section>

      <section>
        <Footer/>
      </section>
      
    </main>
  )
}