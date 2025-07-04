import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { Timeline } from "gsap/gsap-core"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

const Hero = () => {
  const videoRef=useRef()

  const isMobile=useMediaQuery({maxWidth:767})
  useGSAP(()=>{
    const heroSplit=new SplitText('.title',{type:'chars,words'})
    const paraSplit=new SplitText('.subtitle',{type:'lines'})

    heroSplit.chars.forEach((char)=>char.classList.add('text-gradient'))

    gsap.from(heroSplit.chars,{
      yPercent:100,
      duration:1.8,
      ease:'expo.out',
      stagger:0.05
    })
    gsap.from(paraSplit.lines,{
      opacity:0,
      yPercent:100,
      stagger:0.06,
      ease:'expo.out',
      duration:1.8
    },'a')


    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:'#hero',
        start:'top top',
        end:'bottom top',
        scrub:true
      }
    })
    tl.to('.left-leaf',{y:-150},0)
    tl.to('.right-leaf',{y:150},0)
   
    const startValue=isMobile?'top 50%':'center 60%'
    const endValue=isMobile?'120% top':'bottom top'

    let tl2 = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: true,
		pin: true,
	 },
	});
	
	videoRef.current.onloadedmetadata = () => {
	 tl2.to(videoRef.current, {
		currentTime: videoRef.current.duration,
	 });
	};
  },[])
  return (
    <>
    <section id='hero' className='noisy'>
        <h1 className='title'>MOJITO</h1>

        <img 
        src="/images/hero-left-leaf.png" alt="" className='left-leaf' />
        <img 
        src="/images/hero-right-leaf.png" alt="" className='right-leaf' />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
            <p className="txt">Cool. Crisp .Classic</p>
            <p className='subtitle'>
              Sip the Spirit <br /> of Summer
            </p>
            </div>

            <div className="view-cocktails">
              <div className="subtitle ">
                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. 
              </div>
              <a href="#cocktails" className="txt">View Cocktails</a>
            </div>
          </div>
        </div>
    </section>
    <div className="video absolute inset-0">
      <video ref={videoRef}
      src="/videos/output.mp4" muted playsInline preload="auto"></video>
    </div>
    </>
  )
}

export default Hero