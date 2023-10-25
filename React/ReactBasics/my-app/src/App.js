import './App.css';
import './Components/Item'
import Item from './Components/Item'; 
import ItemDate from './Components/ItemDate';

function App() {

  const response = [
    {
      itemName: "nirma",
      itemDate: "22",
      itemMonth: "june",
      itemYear:"1998"
      
    },
      {
      itemName: "sabun",
      itemDate: "12",
      itemMonth: "july",
      itemYear:"1926"
      
    },
        {
      itemName: "Ajaadi",
      itemDate: "15",
      itemMonth: "august",
      itemYear:"1947"
      
    }
  ];

  return (
    <div>
      <Item itemname={response[0].itemName}>
        shivam singh
      </Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item itemname={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
      
      <Item itemname={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
   
      <div className="app">shivam singh</div>
    </div>
   
 
  );
}

export default App;
