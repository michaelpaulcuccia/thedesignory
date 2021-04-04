import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import EquipmentFilter from './components/EquipmentFilter';
//import OtherEquipmentFilter from './components/OtherEquipmentFilter';
import EquipmentGet from './components/EquipmentGet';
import EquipmentAdd from './components/EquipmentAdd';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#EEF4ED' }}>
        <Route exact path="/" component={EquipmentFilter} />
        {/* <Route exact path="/" component={OtherEquipmentFilter} /> */}
        <Route exact path="/equipment/get/:id" component={EquipmentGet} />
        <Route exact path="/equipment/add" component={EquipmentAdd} />
      </div>
    </BrowserRouter>
  )
}

export default App
