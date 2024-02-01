import  {Cursor}  from "./components/cursor/Cursor";
import Magnet from "./components/magnet/Magnet";
import './index.css';

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <Cursor/>
      <Magnet>
        <button className="btn">Сохранить</button>
      </Magnet>
      <button className="btn1">Сохранить</button>
    </div>
    <Magnet>
        <div className="welcome" style={{width: '100px', height: '100px'}}> Hi there</div>
      </Magnet>
    </div>
  );
};

export default App;