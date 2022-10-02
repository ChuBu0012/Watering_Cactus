import React,{lazy, Suspense} from 'react'
import './App.css';
import tree from './tree';
const Cactus = lazy(()=>import('./cactus'))
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(
  require.context("../public/img/Cactus/", false, /\.(png|jpe?g|svg)$/)
);

function App() {
  {
    
  const Datatree = tree.map((data) => {
    return data.water.split("/");
  });

  for (let i = 0; i < Datatree.length; i++) {
    tree[i].Date = Number(Datatree[i][0]);
    tree[i].Month = Number(Datatree[i][1]);
  }

  tree.sort((a, b) => {
    return a.Date - b.Date;
  });
  tree.sort((a,b)=>{
    return a.Month - b.Month
  })
  }
  return (
    <Suspense fallback={<div>loading...</div>}>
    <div className={`bg-cactus bg-fixed bg-center bg-no-repeat bg-cover box-border scroll-smooth pb-24`}>
      <h1 className="text-bluepastel text-7xl xl:text-8xl font-thin text-center underline underline-offset-4 decoration-4 decoration-slate-400 decoration-wavy first-letter:font-medium antialiased">
        Cactus
      </h1>
      {tree.map((data) => {
        return (
          <Cactus
            key={data.id}
            name={data.name}
            pathimg={data.id}
            water={data.water}
            image={images}
          />
        );
      })}
    </div>
    </Suspense> 
  );
}

export default App;
