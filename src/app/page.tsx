import LogoImage from '@/assets/logo.svg'
import Image from 'next/image'
import { Stars, Trash2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-[430px] mx-auto px-4 pt-12 pb-4">
      <header className="flex items-center justify-between">
        <Image src={LogoImage} alt="logo" />

        <button type="button">
          <Trash2 className="h-8 w-8 text-snow" strokeWidth={0.8} />
        </button>
      </header>

      <form className="py-8 w-full flex flex-col text-foam">
        <label className="text-lg font-light" htmlFor="schema">
          Cole seu código SQL aqui:
        </label>
        <textarea
          name="schema"
          id="schema"
          className="my-4 bg-blueberry-600 border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-lime-600"
        />

        <label className="text-lg font-light" htmlFor="question">
          Faça uma pergunta sobre o código:
        </label>
        <textarea
          name="question"
          id="question"
          className="my-4 bg-blueberry-600 border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-1 focus:ring-lime-600"
        />

        <button
          type="submit"
          className="text-pistachio flex items-center justify-center rounded-lg border border-pistachio h-14 gap-2"
        >
          <Stars className="w-6 h-6" />
          Perguntar à inteligência artificial
        </button>
      </form>

      <div className="mt-6">
        <span className="text-lg font-light text-foam">
          Faça uma pergunta sobre o código:
        </span>
        <textarea className="my-4 bg-transparent border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-1 focus:ring-lime-600 w-full" />
      </div>
    </div>
  )
}
