import { Cursor } from "./components/cursor/Cursor";
import Magnet from "./components/magnet/Magnet";
import './index.css';

const App = () => {
  return (
    <div className="wrapper">
        <Cursor/>
      <Magnet>
        <button>Сохранить</button>
        <div className="force">
          123123
        </div>
      </Magnet>
    </div>
  );
};

export default App;