import  {Cursor}  from "./components/cursor/Cursor";
import Magnet from "./components/magnet/Magnet";
import './index.css';

const App = () => {
  return (
    <div className="wrapper">
        <Cursor/>
      <Magnet>
        <button className="btn">Сохранить</button>
        <div className="welcome"> Hi there</div>
      </Magnet>
      <button className="btn">Сохранить</button>
    </div>
  );
};

export default App;