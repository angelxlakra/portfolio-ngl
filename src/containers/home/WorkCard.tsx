import Image from "next/image"

const WorkCard = ({title, mockup, illustration, description, url, type}: {title: string, mockup: string, illustration: string, description: string, url: string, type: "CLIENT" | "PERSONAL"}) => {
  return (
    <div className="p-3 rounded-md bg-gradient-to-br from-yellow-200 via-violet-600 to-red-500 z-40">
                <div className=" h-[300px] relative rounded-md">
                  {/* front */}
                  <div className="absolute top-0 left-0 w-full h-full bg-slate-100 rounded-md">
                    <div className="flex justify-between">
                      <Image src={mockup} width={350} height={100} alt="ag-mockup" className="object-cover -mt-4 -ml-4" />
                      {/* <button className="bg-white text-black border-2 border-black rounded-md px-4 py-2 max-w-[150px] mt-[6px] font-bold ml-8">view project</button> */}
                      <div>
                        <h3 className="text-xl font-bold text-black">
                          {type}
                        </h3>
                        <p>{description}</p>
                      </div>
                    </div>
                  </div>
                  {/* overlap */}
                  <div className="absolute top-0 left-0 w-full h-full bg-slate-100 hover:opacity-0 transition-opacity delay-10 duration-500 ease-in-out rounded-md flex justify-between gap-16">
                    <div className="pl-8 py-6 flex flex-col justify-between">
                      <h1 className="text-5xl font-bold text-black font-fraunces-bold-italic lowercase">{title}</h1>
                      {/* <button className="bg-white text-black border-2 border-black rounded-md px-4 py-2 max-w-[150px] font-bold hover:text-white hover:bg-black cursor-pointer">view project</button> */}
                    </div>
                    <div className="relative h-[120%] w-[80%] object-cover -mt-[2%]">
                      <Image
                        src={illustration}
                        alt="agproject"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <div className="bg-white text-black border-2 border-black rounded-md px-4 py-2 max-w-[150px] font-bold hover:text-white hover:bg-black cursor-pointer absolute bottom-12 left-12">view project</div>
                  </a>
                </div>
              </div>
  )
}

export default WorkCard
