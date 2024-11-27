const Hero = () => {
  return (
    <div className='bg-hero py-40 text-white hero'>
      <div className='lg:flex-row flex-col hero-content'>
        <div className="w-5/12"></div>
        <div className="w-7/12">
          <h1 className='font-bold text-5xl'>Would you like a Cup of Delicious Coffee?</h1>
          <p className='py-6'>
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className='bg-[#E3B577] btn'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
