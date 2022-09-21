import tw from "twin.macro"

const Tit = ({ id, children }) => (
  <a tw="block mb-2 font-bold text-lg" href={`#${id}`} id={id}>
    {children}
  </a>
)

export const CorporateValues = () => {
  return (
    <>
      <div tw="py-4">
        <Tit id="vision">01.1. What we do.</Tit>
        <p>
          Teach individuals to be accountable and{" "}
          <span tw="underline">highly skilled programmers</span>.
        </p>
      </div>

      <div tw="py-4">
        <Tit id="values">01.2. Our Values</Tit>
        <ul>
          <li>
            <span tw="font-bold text-core">Integrity</span>. We strive to be
            transparent, respectful, honest, and accountable to ourselves and
            others; integrity fosters trust and trust builds the bonds of
            community.
          </li>
          <li>
            <span tw="font-bold text-core">Collaboration</span>. We are
            committed to creative, flexible, and generous ways of building
            bridges, working together, and communicating openly.
          </li>
          <li>
            <span tw="font-bold text-core">Innovation</span>. We engage in
            creative risk-taking to build a more agile organization that in turn
            affects transformative change at the Institute, and in the world.
          </li>
          <li>
            <span tw="font-bold text-core">Diversity and Inclusion</span>. We
            build and maintain a community and culture that celebrates and
            values diverse backgrounds, identities, and perspectives.
          </li>
        </ul>
      </div>

      <div tw="py-4">
        <Tit id="value-proposal">01.3. Value proposal.</Tit>
        <ul>
          <li>
            <span tw="font-bold text-core">Cloud First</span>: We teach our
            students to develop in the cloud ecosystem by enriching its
            applications with cloud enabled services.
          </li>
          <li>
            <span tw="font-bold text-core">Microservice oriented</span>: Scope
            defined services that scale are better than single source of truth.
          </li>
          <li>
            <span tw="font-bold text-core">
              Industry driven software design patterns and architectures
            </span>{" "}
            : We choose our curriculum based on curated and distilled high
            quality job offers aligned with our values and vision of the tech
            ecosystem.
          </li>
          <li>
            <span tw="font-bold text-core">State of the art curriculum</span>:
            Each one of our bootcamps and courses is updated quarterly with
            uprising technologies.
          </li>
        </ul>
      </div>
      <div tw="py-4">
        <Tit id="naming">01.4. Naming conventions.</Tit>
        <div tw="my-2">
          <pre tw="bg-gray-500 text-white rounded inline-block p-2">
            CORE Code School
          </pre>
        </div>
        <p tw="mt-2">
          Prefer using entire name <b>"CORE Code School"</b> when possible, use{" "}
          <b>"CORE"</b> as a shorter brand name. Name should always be written
          with <b>"CORE"</b> brand name in uppercase letters and if complete
          name is used, make sure it's capitalized <b>"Code School"</b>. Avoid
          use capitalization for entire name.{" "}
        </p>

        <p tw="mt-4 mb-2 font-bold">Pronunciation [es-ES]</p>
        <audio src="/media/pronunciacion_core.m4a" controls></audio>
      </div>
    </>
  )
}
