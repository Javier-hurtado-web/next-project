import Link from "next/link"

const About = () =>(
    <section>
        <h1>About This Project</h1>
        <p>This is my first NextJS project</p>
        <Link href="/">
            <a>goto Index page</a>
        </Link>
    </section>
)

export default About;