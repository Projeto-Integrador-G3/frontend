import { GithubLogo, FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    return (
        <>
        <div className="flex justify-center text-white bg-green-300">
          <div className="container flex flex-col items-center py-2">
            <p className='text-xl font-bold'>Projeto Uni - Generation Brasil</p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-3 py-1'>
            <a href="https://github.com/Uni-G3" target='_blank'><GithubLogo size={40} weight='bold'/></a>
            <a href="" target='_blank'><LinkedinLogo size={40} weight='bold' /></a>
            <a href="" target='_blank'><FacebookLogo size={40} weight='bold' /></a>
            <a href="" target='_blank'><InstagramLogo size={40} weight='bold' /></a>
            </div>
          </div>
        </div>

        </>
    )
}

export default Footer