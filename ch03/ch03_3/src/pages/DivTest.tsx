import {Div, Icon, SubTitle, Title} from '../components'

export default function DivTest() {
  return (
    <section className="mt-4">
      <Title>DivTest</Title>
      <Div className="text-center text-blue-100 bg-blue-600">
        <Icon name="home" className="text-3xl" />
        <SubTitle>Home</SubTitle>
      </Div>
    </section>
  )
}
