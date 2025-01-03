import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux';
import AddTask from './components/AddTask';
import Sidebar from './components/Sidebar';
import AllTasks from './components/AllTasks';
import CompleteTask from './components/CompleteTask';
import InProgressTask from './components/InProgressTask';
import Dashboard from './components/Dashboard';
import PendingTask from './components/PendingTask';
import Deployed from './components/Deployed';
import Deferred from './components/Deferred';
import EditTask from "./components/EditTask";
import TaskDetails from './components/TaskDetails';
import './App.css'


const App = () => {
   const theme = useSelector((state) => state.theme);

  return (

    <div className={`flex h-full ${theme === 'dark' ? 'dark' : ''}`}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/tasks" element={<AllTasks />} />
        <Route path="/editTask/:id" element={<EditTask />} />
        <Route path="/completeTask" element={<CompleteTask />} />
        <Route path="/pendingTask" element={<PendingTask />} />
        <Route path="/deployedTask" element={<Deployed />} />
        <Route path="/deferredTask" element={<Deferred />} />
        <Route path="/inProgressTask" element={<InProgressTask />} />
        <Route path="/statsTask" element={<Dashboard />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Routes>
    </div>

  );
};

export default App;
