import loading from "./loading-gif.gif"

const Loading = () => {
    return ( 
        <div className="d-flex align-items-center justify-content-center">
            <img src={loading} alt="gif de carga" className="w-25"/>
        </div>
     );
}
export default Loading;