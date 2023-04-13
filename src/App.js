import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostData from './pages/PostData';
import NotFound from './pages/NotFound';
import ViewData from './pages/ViewData';
import InsertData from './pages/InsertData';
import Navbar from './components/navBar/Navbar';
// import UpdateData from './pages/UpdateData';
function App() {
	return (
		<>
			<Router>
				<Navbar></Navbar>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/postData/:id' element={<InsertData />} />
					<Route path='/viewData/:id' element={<ViewData />} />
					{/* <Route path='/updateData/:id' element={<InsertData />} /> */}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
