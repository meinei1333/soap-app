import './App.css';
import { Input, Typography, Button } from 'antd';
import { OilUnit } from './components/OilUnit';
import Oil from './components/Oil';
import oilListJson from './oil.json'
import { useContext } from 'react';

const { Title, Text } = Typography;
let oilList: Array<Oil> = [];

function App() {
  oilList = [];

  oilListJson.forEach(oil => {
    oilList.push(new Oil(oil.name, oil.price))
  })

  return (
    <div className="App">
      <Title >油量總量</Title>
      <Input id='resultTotalWeight' type="text"></Input>
      <Text> k</Text>
      <div id='oilUnitContainer' className='container'>
        {oilList.map((oil, index) => {
          return <OilUnit id={`OilUnit${index}`} key={index} oil={oil}></OilUnit>
        })}
      </div>
      <Button className='button' onClick={calculate}>顯示結果</Button>
      <div id="result" className='result'>
      </div>

    </div>
  );
}

function calculate() {
  const resultTotalWeight = (window.document.getElementById("resultTotalWeight") as any).value;
  const result = (window.document.getElementById("result") as any);

  let totalPercentage = 0;
  oilList.forEach((oil, index) => {
    totalPercentage += Number((window.document.getElementById(`OilUnit${index}`) as any).getElementsByTagName('*')[1].value);
  });
  if (totalPercentage !== 99 && totalPercentage !== 100) {
    window.alert("It's must total 100% or 99%");
    return;
  }

  if (resultTotalWeight === "") {
    window.alert("油量總量不可為空白");
    return;
  }

  result.innerHTML = "";

  let totalOilWeight = 0;
  let totalNaohWeight = 0;
  let totalWaterWeight = 0;

  oilList.forEach((oil, index) => {
    oil.weight = Number((window.document.getElementById(`OilUnit${index}`) as any).getElementsByTagName('*')[1].value);
    oil.naoh = oil.weight * oil.price;
    totalOilWeight += oil.weight;
    totalNaohWeight += oil.naoh;
  });
  totalWaterWeight = (totalNaohWeight / 0.3) - totalNaohWeight;

  let tempTotal = totalOilWeight + totalNaohWeight + totalWaterWeight;
  let multiple = 100 / tempTotal * resultTotalWeight / 100;

  oilList.forEach(oil => {
    result.innerHTML += `${oil.name}:${Math.round(oil.weight * multiple)}<br>`
  });
  result.innerHTML += `氫氧化鈉:${Math.round(totalNaohWeight * multiple)}<br>`;
  result.innerHTML += `水:${Math.round(totalWaterWeight * multiple)}<br>`;
}

export default App;
