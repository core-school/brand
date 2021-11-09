import tw from "twin.macro"

export const ProductSampleSection = () => {
  return (
    <div tw="flex flex-row flex-wrap gap-3">
      <div>
        <img
          tw="rounded object-cover h-52"
          src="/product/core-t-shirt.jpg"
          alt="CORE T-Shirt"
          width={300}
        />
        <p tw="text-center mt-2 text-gray-500">T-Shirt</p>
      </div>
      <div>
        <img
          tw="rounded object-cover h-52"
          src="/product/students.jpg"
          alt="CORE T-Shirt"
          width={300}
        />
        <p tw="text-center mt-2 text-gray-500">CORE Students</p>
      </div>
    </div>
  )
}
