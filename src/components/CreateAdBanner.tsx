import { MagnifyingGlassPlus } from "phosphor-react"
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
  return (
    <div className="mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div className="flex flex-col">
          <strong className="text-2xl text-white font-black">Não encontrou o seu duo?</strong>
          <span className="text-zinc-400">Publique um anuncio para encontrar novos players!</span>
        </div>

        <Dialog.Trigger className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
          <MagnifyingGlassPlus size={24}/>
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}