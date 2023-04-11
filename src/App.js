import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostData from './pages/PostData';
import NotFound from './pages/NotFound';
import ViewData from './pages/ViewData';
import UpdateData from './pages/UpdateData';
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/postData' element={<PostData />} />
					<Route path='/viewData/:id' element={<ViewData />} />
					<Route path='/updateData/:id' element={<UpdateData />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
