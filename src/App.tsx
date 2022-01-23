import './App.css';
import { Input, Typography, Button } from 'antd';
import { OilUnit } from './components/OilUnit';
import Oil from './components/Oil';
import oilList from './oil.json'

function App() {
  const { Title, Text } = Typography;
  return (
    <div className="App">
      <Title>油量總量</Title>
      <Input id='total' type="text"></Input>
      <Text> k</Text>
      <div id='oilUnitContainer' className='container'>
        {oilList.map((oil, index) => {
          return <OilUnit id={`OilUnit${index}`} key={index} oil={oil}></OilUnit>
        })}
      </div>
      <Button className='button' onClick={calculate}>顯示結果</Button>
      <Input id='result' className='result'></Input>
    </div>
  );
}

function calculate() {
  oilList.forEach((oil, index) => {
    console.log(window.document.getElementById(`OilUnit${index}`));
      
  });
}

export default App;
