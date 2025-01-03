import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';

function App() {
  const articles = [{ id: 1, designation: 'SKQJ', price: 12 }];

  return (
    <div className="flex min-h-dvh min-w-full items-center justify-center bg-stone-950 pt-20">
      <div className="container h-fit w-[500px] rounded-sm border border-stone-50 bg-stone-100 p-8 ring-4 ring-slate-200">
        <Header />
        <Form />
        <List articles={articles} />
      </div>
    </div>
  );
}

export default App;
