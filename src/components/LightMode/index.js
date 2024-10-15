import './index.css'

const LightMode = props => {
  const {lightmode} = props
   
  return (
    <div className='bg-containers'>
       <button className='lightmode' onClick={lightmode}>
           Light Mode
       </button>
    </div>
  )
}

export default LightMode;