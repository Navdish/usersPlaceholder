import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import { fetchUser } from './redux/Slice/contentSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchUser());
  }, [dispatch])

  const users = useSelector((state)=> state.user.users);
  const isLoading = useSelector((state)=> state.user.isLoading);
  const error = useSelector((state)=> state.user.error);

  if(isLoading)
  {
    return "loading...."
  }

  if(error)
  {
    return error
  }
  return (
    <div className="App">
      {users && users.map((user, id)=> {
        return (<li key={id}>{user.name}</li>)
      })}
    </div>
  );
}

export default App;
