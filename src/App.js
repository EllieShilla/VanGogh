import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function Biography(){
  return (
    <body id="bioBody">
    <div className="bio">
<h1>Винсент Ван Гог</h1>
<img src={"./images/Autoportrait_de_Vincent_van_Gogh.jfif"}/>
<p>Винсент получил свое имя в честь первенца Ван Гогов, который умер, едва появившись на свет. </p>
<p>Младший на четыре года брат Винсента, Тео, был единственным человеком, которому мог довериться художник. 
  Он также поддерживал его морально и финансово на протяжении всей жизни.</p>
<p>Из-за неустойчивого психического состояния художник провел много времени в лечебнице при монастыре Сен-Поль-де-Mусоль. 
  Это был один из самых плодотворных периодов в его творческой жизни. Здесь же появились его знаменитые «Ирисы». </p>
<p>Ван Гог написал 850 полотен.</p>
</div>
</body>
  )
}
function Painting(){
  return (
    <body id="paint">
  <div>
    <img src={"./images/nochnaya-terrasa-kafe-van-gog-688x870.jpg"}/>
  <p>Ночная терраса кафе</p>
  </div>
  </body>)
}
function Gallery(){
  return (
    <body id="gallery">
      <div>
      <img src={"./images/58bae32ac36188b0088b4588-688x848.jpg"}/>
      <p>Портрет доктора Гаше</p>
      </div>
      <div>
      <img src={"./images/294363-688x923.jpg"}/>
      <p>Подсолнухи</p>
      </div>
      <div>
      <img src={"./images/IMG_148926-688x430.jpg"}/>
      <p>Звездная ночь</p>
      </div>
      <div>
      <img src={"./images/Sunset_at_Montmajour-688x543.jpg"}/>
      <p>Закат в Монмажуре</p>
      </div>
    </body>
  )
}
function NotFound(){
  return <h2>Not Found</h2>
}

function NavMenu(){
  return(
    <div id="link">
    <Link to="/biography" className="Links">Biography</Link>
    <Link to="/painting" className="Links">Painting</Link>
    <Link to="/gallery" className="Links">Gallery</Link>
    </div>
  )
}

function App() {
  return (
    <div className="App">
     <Router>
       <div>
         <NavMenu/>
         <Switch>
           <Route exact path="/biography" component={Biography}/>
           <Route path="/painting" component={Painting}/>
           <Route path="/gallery" component={Gallery}/>
           <Route component={NotFound}/>
         </Switch>
       </div>
     </Router>
    </div>
  );
}

export default App;
