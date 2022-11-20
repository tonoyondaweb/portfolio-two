import { client } from "../contentful"

export default function index(props) {
  return (
    <div>{props.title}</div>
  )
}

export async function getStaticProps() {

  return {
    props: {
      title: "Index"
    }
  }
}