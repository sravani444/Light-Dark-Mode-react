import './index.css'

const DarkMode = props => {
  const {darkmode} = props
  return (
      <button className='darkmode' onClick={darkmode}>
        Dark Mode
      </button>
  )
}

export default DarkMode;