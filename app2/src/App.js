import logo from './logo.svg';
import './App.css';

function App() {
  const showItem=()=>{
    return <><div>Lorem content</div></>
  }
  const showHome=()=>{
    return <></>
  }
  return (
    <>
    <div className='container'> <div className="inside"><button onClick={()=>{showHome}}>Home</button></div>
    <div  className="inside"><button onClick={showItem}>flights</button></div>
    <div  className="inside"><button>Hotels</button></div>
    <div  className="inside"><button>About</button></div></div>
    
  </>
  );
}

export default App;
