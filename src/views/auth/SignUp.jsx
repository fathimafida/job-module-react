import { Input } from '@nextui-org/input'


const SignUp = () => {
  return (
    
      <div >
          <form className='flex flex-col gap-3'>
              <label className='text-white text-lg'>
                  Name
                  <span className='text-red-500'>*</span>
              </label>
              <Input
                  placeholder='Enter your name'
                  isRequired
                  inputStyle={{
                      color: "white",
                  }}
                  variant='bordered'
              
              >
              </Input>
          </form>
</div>
  )
}

export default SignUp