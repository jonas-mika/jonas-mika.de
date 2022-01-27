import { Rings  } from  'react-loader-spinner'

const Loader = ({ theme, height, width, fullPage }) => {
    return (
      <div id="Loader" className="Loader flex-row" style={fullPage ? {height: '100vh'} : {height: '100%'}}>
        <Rings
          color={theme === 'light' ? '#0300ab' : '#00AAFF'}
          height={height}
          width={width}
        />
      </div>
    )
}

export default Loader;
