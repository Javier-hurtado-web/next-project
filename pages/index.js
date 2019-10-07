import Navbar from '../components/Navbar'

const Index = () => (
  <section>
    <Navbar/>
    <h1>Hello World from Next JS</h1>
    <style jsx global>{`
      nav a {
        padding: 10px;
        text-decoration: none;
        color: green;
      }
    `}</style>
  </section>
)

export default Index
