import { useState } from 'react';
import './App.css';
import Input from './components/UI/Input';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>('');

  return (
    <div className="App">
      <span className="heading">ToDo</span>
      <Input todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
