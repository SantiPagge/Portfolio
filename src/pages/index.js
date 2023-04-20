import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="bg-blue-600 flex justify-center font-bold text-3xl py-4">Este es mi portfolio con Next.js</div>
      <div>
        <Image src='/Santu.jpg' alt='santu' className='rounded-full w-52' width={500} height={500}/>
      </div>
    </div>
  )
}
