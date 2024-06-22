
import { Input } from '@nextui-org/input';
import logo from '../assets/stuverse.png'


const AuthPage = () => {
  return (
    <div className="flex flex-col items-center bg-slate-900 h-screen">
      <img src={logo} alt="logo" className="h-40"></img>
      <h1 className="text-3xl font-pacifico font-bold  text-white">
        Welcome Back!
      </h1>
      <h3 className="text-sm font-pacifico font-bold text-white mb-32">
        Join our community
      </h3>
      <form>
        <Input
          isReadOnly
          type="email"
          
          variant="bordered"
          placeholder="Enter your email"
          className="max-w-xs mb-4 "
              />
              <label className="text-white">Password</label>
        <Input
          isReadOnly
          type="password"

          variant="bordered"
          placeholder="Enter your password"
          className="max-w-xs mb-4 "
        />
      </form>
    </div>
  );
}

export default AuthPage