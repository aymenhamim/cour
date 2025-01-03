import { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState();
  const [isOpen, setIsOpen] = useState(false);

  function HandleSubmit(e) {
    e.preventDefault();

    if (!userName.length || !password.length) {
      setErrMsg('field is empty');
      setIsOpen(false);
    } else {
      setErrMsg('');
      setIsOpen(true);
    }
  }

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-zinc-800 font-mono">
      <form
        onSubmit={HandleSubmit}
        className="w-[30rem] rounded-lg bg-zinc-100 p-10"
      >
        {!isOpen && (
          <>
            <h2 className="pb-10 text-center text-3xl font-semibold">
              Login Form
            </h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-lg font-semibold">
                UserName
              </label>
              <input
                type="text"
                name="username"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                className="mb-4 rounded-md border border-zinc-900 px-4 py-2 outline-none drop-shadow-lg transition-all duration-300 hover:bg-zinc-100 focus:ring-4 focus:ring-zinc-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password " className="text-lg font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="rounded-md border border-zinc-900 px-4 py-2 outline-none drop-shadow-lg transition-all duration-300 hover:bg-zinc-100 focus:ring-4 focus:ring-zinc-400"
              />
            </div>

            <motion.button
              initial={{ scale: 0, opacity: 0, width: 700 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: 1, width: 'fit-content' }}
              type="submit"
              className="transition-all] mx-auto my-8 bg-zinc-900 p-3 text-sm text-zinc-50 duration-300 hover:bg-zinc-700"
            >
              Se Connecter
            </motion.button>
          </>
        )}
        {errMsg && (
          <p
            className="rounded-r-md border-l-4 border-red-700 bg-red-200 px-3 py-4 text-red-700"
            exit={{ opacity: 0 }}
          >
            {errMsg}
          </p>
        )}

        {isOpen && (
          <>
            <p className="rounded-r-md border-l-4 border-s-emerald-700 bg-emerald-200 px-3 py-4 text-emerald-700">
              Welcome <b>{userName}</b>
            </p>
            <button
              className="transition-all] mx-auto my-8 bg-zinc-900 px-6 py-3 text-sm text-zinc-50 duration-300 hover:bg-zinc-700"
              onClick={() => setIsOpen(false)}
            >
              Back
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default App;
