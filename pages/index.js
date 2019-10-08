import Navbar from '../components/Navbar'
import Head from 'next/head'
import Link from 'next/link'
import '../scss/style.scss';

const Index = (props) => (
  <section>
    <Head>
      <title>Hello World</title>
    </Head>
    <Navbar/>
    <h1>Hello World from Next JS</h1>
    <div>
      <Link as={`/posts/${props.slug}`} href={`/post?title=${props.title}`}>
        <a title= "Learn Next JS">Latest post on next js</a>
      </Link>
    </div>
  </section>
)

Index.getInitialProps = async function(props){
  let title = "Latest post on next js"
  let slug = 'latest-post-next-js'
  return {
    title,
    slug
  }
}
export default Index
