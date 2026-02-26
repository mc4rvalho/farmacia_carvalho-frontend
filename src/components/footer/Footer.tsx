/* eslint-disable prefer-const */
import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react"

export function Footer() {
  let date = new Date().getFullYear()

  return (
    <>
      <div className="flex justify-center bg-cyan-500 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Farmácia Carvalho | Copyright: {date}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>

          <div className="flex gap-2">
            <a href="#" target="_blank">
              <LinkedinLogoIcon size={48} weight="bold" />
            </a>
            <a href="#" target="_blank">
              <InstagramLogoIcon size={48} weight="bold" />
            </a>
            <a href="#" target="_blank">
              <GithubLogoIcon size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
