import {Title} from '../components'

export default function DisplayNoneTest() {
  return (
    <section className="mt-4">
      <Title>DisplayNoneTest</Title>
      <div className="mt-4">
        <p className="visible">visibility: visible test</p>
        <p className="invisible">visibility: hidden test</p>
        <p className="hidden">display: none test</p>
      </div>
    </section>
  )
}
