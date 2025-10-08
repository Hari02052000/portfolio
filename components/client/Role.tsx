'use client';
import TypewriterComponent from 'typewriter-effect'


function Role() {

  const roles = ['Node js Developer','React js Developer','Angular Developer','Javascript Developer','Frontend Developer','Backend Developer']
  return (
     <div className="flex gap-1 flex-wrap font-extralight mt-7 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
       I am a Passionate {" "}
      <span className="text-text-main font-semibold text-xl break-words sm:text-2xl md:text-3xl lg:text-4xl">
        <TypewriterComponent
         options={{
          strings : roles,
          autoStart : true,
          loop : true,
          delay : 75,
          deleteSpeed : 50,
          wrapperClassName : 'pl-2'
         }}
        /> 
    </span>  

    </div>
  )
}

export default Role
