import {SubTitle, Title} from '../components'
import * as D from '../data'

export default function DisplayTest() {
  const inlineChildren = D.range(1, 5 + 1).map(number => (
    <div key={number} className="inline w-8 h-8 m-4 text-center text-gray-700 bg-sky-300">
      {number}
    </div>
  ))
  const blockChildren = D.range(1, 5 + 1).map(number => (
    <div key={number} className="block w-8 h-8 m-4 text-center text-gray-700 bg-sky-300">
      {number}
    </div>
  ))
  const inlineBlockChildren = D.range(1, 5 + 1).map(number => (
    <div
      key={number}
      className="inline-block w-8 h-8 m-4 text-center text-gray-700 bg-sky-300">
      {number}
    </div>
  ))
  return (
    <section className="mt-4">
      <Title>DisplayTest</Title>
      <div>
        <SubTitle>display: inline</SubTitle>
        {inlineChildren}
      </div>
      <div>
        <SubTitle>display: block</SubTitle>
        {blockChildren}
      </div>
      <div>
        <SubTitle>display: inline-block</SubTitle>
        {inlineBlockChildren}
      </div>
    </section>
  )
}
