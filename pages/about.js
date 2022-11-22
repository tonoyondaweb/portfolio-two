export default function About(props) {
  return (
    <section className="h-screen grid place-items-center" id="about">
      <h1>About</h1>
    </section>
  )
}

export async function getStaticProps() {
  return{
    props: {
      about: 'About Me'
    }
  }
}