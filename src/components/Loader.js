import { Rings  } from  'react-loader-spinner'

const Loader = ({ theme, height, width }) => {
    return (
        <div id="Loader" className="Loader flex-row">
            <Rings
                color={theme === 'light' ? '#0300ab' : '#00AAFF'}
                height={height}
                width={width}
            />
        </div>
    )
}

export default Loader;
