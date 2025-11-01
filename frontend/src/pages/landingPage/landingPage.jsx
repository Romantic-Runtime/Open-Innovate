import "./landingPage.css";
import GlareHover from '../../components/GlareHover';
const LandingPage = () => {


  return (
    <>
      <div className=" bg-linear-to-b from-[#090909] from-50% to-[#3ED194] min-h-screen min-w-screen ">
        <div className="h-screen min-w-screen max-h-[80vh] bg-[#090909] rounded-b-full blur-[90px] "></div>
        <div className="bg-linear-to-br from-[#000000] to-[#3CC88E] p-[2.5px] rounded-[48px] w-screen max-w-270 left-30 absolute top-10 ">
          <div className="bg-[#000000]/90 flex flex-row justify-between rounded-[48px] p-3">
            <h1 className="text-amber-50 relative left-20"><span className="text-green-500 font-bold relative left-2 font-[Young Serif] text-2xl">Open</span> <br></br><span className="font-bold font-[Young Serif] text-xl">Innovate</span></h1>
            <div className="bg-linear-to-b from-[#51D685] to-[#B5F415] rounded-4xl p-0.5 ml-150 flex items-center justify-center">
              <button className="text-amber-50 rounded-4xl bg-[#090909] p-6 ">Login</button>
            </div>
            <button className="text-black font-bold rounded-4xl px-6 bg-linear-to-b from-[#41D195] to-[#C9FF05]">Register</button>
          </div>
        </div>
        <div className="font-[Montserrat] flex flex-col items-center justify-center font-normal text-white absolute top-50 left-80">
          <h1 className="text-center text-4xl">Turn your big idea into real-world Innovation<br></br> with Right People</h1>
          <h1>Register your projects to build a perfect team or join existing to become a perfect team</h1>
          <div className="flex flex-row">
            <button className="bg-linear-to-b from-[#51D685] to-[#B5F415] p-6 m-2 rounded-4xl text-black font-bold text-lg">Register Your Project</button>
            <div className="bg-linear-to-b from-[#51D685] to-[#B5F415] p-0.5 m-2 rounded-4xl ">
              <button className="text-amber-50 rounded-4xl bg-[#090909] p-6 font-bold  ">Join a Project </button>
            </div>
          </div>
        </div>
        <div className="relative h-1/2 flex gap-7 items-center justify-center pb-10 ">
          <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width='350px'
            height='230px'
            background=""
            className="rotate-12 shadow-2xl/100 shadow-[#3DCA86] bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%] "
          />
          <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            background=""
            width="436px"
            height="320px"
            className="shadow-2xl/100 shadow-[#3DCA86] bg-linear-[135deg,#000000,#021D11_10%,#0D492C_20%,#000000_40%,#071C15_50%,#0D492C_70%,#000000_90%,#021D11_100%]"
          />
          <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            background=""
            className="rotate-168 shadow-2xl/100 shadow-[#3DCA86] bg-linear-[120deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%]"
            height="230px"
            width="350px"

          />

          {/* </GlareHover> */}
        </div>
      </div>

      <div className=" bg-[#090909] min-h-screen min-w-screen flex flex-col items-center justify-start p-15 gap-5">
        <div className="bg-[#37BC7E] rounded-4xl p-0.5">
          <button className="bg-[#031D14] rounded-4xl px-7 font-bold py-1 text-[#F5E9CB]">Key Features</button>
        </div>
        <h1 className="relative text-[#FFFFFF] tracking-wider  text-5xl">Why Choose <span className="italic">OpenInnovate</span>?</h1>
        <section className="grid grid-cols-4 grid-rows-3 gap-5 pt-5">
          <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width=''
            height=''
            background=""
            className="  h-auto border-2 w-aut bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%]  "
          /> <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width=''
            height=''
            background=""
            className="  h-auto border-2 w-aut bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%] "
          /> <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width=''
            height=''
            background=""
            className="  h-auto border-2 w-auto col-span-2 row-span-2 col-start- bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%] "
          /> <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width=''
            height=''
            background=""
            className="  col-span-2 col-start-1 h-auto border-2 w-aut bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%] "
          /> <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width=''
            height=''
            background=""
            className="  col-span-2 col-start-1 h-auto border-2 w-aut bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%] "
          /> <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width='500px'
            height='230px'
            background=""
            className="border-2 col-span-2 bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%] "
          />
        </section>
      </div>
      <div className=" bg-[#090909] min-h-screen min-w-screen flex flex-col items-center justify-start p-15 gap-5">
        <div className="bg-[#37BC7E] rounded-4xl p-0.5">
          <button className="bg-[#031D14] rounded-4xl px-7 font-bold py-1 text-[#F5E9CB]">How It Works</button>
        </div>
        <h1 className="relative text-[#FFFFFF] tracking-wider  text-5xl">Get Started In Simple Steps</h1>
        <section className="grid grid-cols-10 grid-rows-2 gap-5">
          <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width=''
            height=""
            background=""
            className=" col-span-4 h-auto border-2 w-aut bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%]  "
          />
          <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width='500px'
            height='230px'
            background=""
            className="col-span-6   h-auto border-2 w-aut bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%]  "
          />
          <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width=''
            height=''
            background=""
            className="col-span-5  h-auto border-2 w-aut bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%]  "
          />
          <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width=''
            height=''
            background=""
            className="col-span-5 h-auto border-2 w-aut bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%]  "
          />
        </section>
      </div>
      <div className=" bg-[#090909] min-h-screen min-w-screen flex flex-col items-center justify-start p-15 gap-5">
        <div className="bg-[#37BC7E] rounded-4xl p-0.5">
          <button className="bg-[#031D14] rounded-4xl px-7 font-bold py-1 text-[#F5E9CB]">Pricing</button>
        </div>
        <h1 className="relative text-[#FFFFFF] tracking-wider  text-5xl">Plans for Everyone</h1>
        <section className="grid grid-cols-3 grid-rows-6 gap-5 p-2 pr-4">
          <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width=''
            height=''
            background=""
            className="row-span-5 h-auto border-2 w-aut bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%]  "
          />
          <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width=''
            height=''
            background=""
            className="row-span-5 h-auto border-2 w-aut bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%]  "
          />
          <GlareHover
            glareColor="#36b274"
            glareOpacity={0.6}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1000}
            playOnce={false}
            width='350px'
            height='500px'
            background=""
            className="row-span-5 h-auto border-2 w-aut bg-linear-[135deg,#082B1F,#021D11_10%,#083325_25%,#0D492C_30%,#245A42_35%,#071C15_55%,#1B4C35_70%,#021D11_100%]  "
          />
        </section>
      </div>
    </>
  )
}
export default LandingPage;



