import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="flex min-h-dvh min-w-full justify-center bg-stone-950 pt-20">
      <div className="container h-fit w-[500px] rounded-sm border border-stone-50 bg-stone-100 p-8 ring-4 ring-slate-200">
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default App;
