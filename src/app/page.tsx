import LogoImage from '@/assets/logo.svg'
import Image from 'next/image'
import { Trash2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-[430px] mx-auto pt-12 pb-4">
      <header className="flex items-center justify-between">
        <Image src={LogoImage} alt="logo" />
        <button type="button">
          <Trash2 className="h-8 w-8 text-snow" strokeWidth={0.8} />
        </button>
      </header>

      <form action=""></form>

      <div></div>
    </div>
  )
}
