import farma from "../../assets/farma.jpg";

export function Home() {
  return (
    <>
      <div className="bg-cyan-300 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Bem vindos a Farmácia Carvalho!</h2>

            <p className="text-xl">
              A stack completa para o seu cuidado: Atendimento, Agilidade e
              Tecnologia.
            </p>
          </div>

          <div className="flex justify-center">
            <img 
            src={farma} 
            alt="Imagem Página Home"
            className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
