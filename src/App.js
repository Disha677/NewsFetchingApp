// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

const App = () => {
  // apikey= process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  // state = {
  //   progress: 0
  // }

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>

          {/* <Route exact path="/"><News <News setProgress={setProgress}     setProgress={setProgress} key="general" pageSize={6} country="in" category="general" /></Route>
              <Route exact path="/business"><News <News setProgress={setProgress}     key="business" pageSize={6} country="in" category="business" /></Route>
              <Route exact path="/entertainment"><News <News setProgress={setProgress}     key="entertainment" pageSize={6} country="in" category="entertainment" /></Route>
              <Route exact path="/general"><News <News setProgress={setProgress}     key="general" pageSize={6} country="in" category="general" /></Route>
              <Route exact path="/health"><News <News setProgress={setProgress}     key="health" pageSize={6} country="in" category="health" /></Route>
              <Route exact path="/science"><News <News setProgress={setProgress}     key="science" pageSize={6} country="in" category="science" /></Route>
              <Route exact path="/sports"><News <News setProgress={setProgress}     key="sports" pageSize={6} country="in" category="sports" /></Route>
              <Route exact path="/technology"><News <News setProgress={setProgress}     key="technology" pageSize={6} country="in" category="technology" /></Route> */}

          <Route exact path="/" element={<News setProgress={setProgress}  key="general" pageSize={6} country="in" category="general" />} ></Route>
          <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={6} country="in" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress}   ey="entertainment" pageSize={6} country="in" category="entertainment" />}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={6} country="in" category="general" />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize={6} country="in" category="health" />} ></Route>
          <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pageSize={6} country="in" category="science" />} ></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={6} country="in" category="sports" />} ></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={6} country="in" category="technology" />} ></Route>
        </Routes>
      </Router>

    </div>
  )

}

export default App