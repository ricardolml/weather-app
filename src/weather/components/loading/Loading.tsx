export const Loading = () => {
    return (
        // bg-gradient-to-t from-fondo-loading
        <div className="w-screen h-screen flex justify-center items-center content-center " style={{
            backgroundImage : `url(./img/rain.gif)`  
        }}>
            <h2 className="text-2xl">Loading...</h2>
        </div>
    )
}
