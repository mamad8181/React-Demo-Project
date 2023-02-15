
import { useState, useCallback, useMemo, useEffect } from 'react';
import Button from './components/Button';
import DemoOutput from './Demo/DemoOutput';
import useFetch from './Hooks/useFetch';

function App() {

  const [showP, setShowP] = useState(false)
  const [allow, setAllow] = useState(false)
  const [data, setData] = useState([])


  console.log('APP RUNNING')



  const {isLoading, error, sendRequest} = useFetch()

  useEffect(() => {
    sendRequest({url : 'https://63dcd259df83d549ce9464cd.mockapi.io/data'}, setData)
  }, [])

  console.log(data)



  const toggle = useCallback(() => {
    if(allow == true){
      setShowP(prevShowp => !prevShowp)
    }
  }, [allow])

  const allowHandler = () => {
    setAllow(prevAllow => !prevAllow)
  }

  if(error) console.log(error)

  return(
    <div className='app'>
      <h1>Hi</h1>
      {isLoading && <h1>is Loading...</h1>}
      <DemoOutput show={false}/>
      <Button onClick={allowHandler} >allow</Button>
      <Button onClick={toggle} >show</Button>
    </div>
  ) ;
}

export default App;
