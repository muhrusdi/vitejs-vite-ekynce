import { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [download, setDownload] = useState(false);
  const arr = new Array(1).fill(null);
  const counts = useRef(3);

  const downloadImg = async (order) => {
    if (order < 1) return;
    // arr.map(async (item, i) => {
    await fetch(`https://quran.ksu.edu.sa/ayat/safahat1/3.png`).then((data) => {
      alert(order);
      downloadImg(order - 1);
      // reader.readAsDataURL(data.blob());
      // reader.onloadend = function () {
      //   var base64data = reader.result;
      //   document.body.appendChild(a);
      //   a.download = i + 1;
      //   a.href = base64data;
      //   a.click();
      // };
    });
    // window.location.href = `https://quran.ksu.edu.sa/ayat/safahat1/${
    //   i + 1
    // }.png`;
    // });
  };

  useEffect(() => {
    let a = document.createElement('a');
    var reader = new FileReader();
    if (download) {
      downloadImg(Number(counts.current));
    }
  }, [download, arr]);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={() => setDownload(true)}>download</button>
      <button onClick={() => setDownload(false)}>Cancel</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
