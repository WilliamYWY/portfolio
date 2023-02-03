export default function Loader() {
    return (
        <div className="bg-black w-screen h-screen flex justify-center items-center">
            <h1 className="text-violet-700 text-4xl animate-pulse">
                LOADING
            </h1>
            <div className="ml-5 border-t-4 border-l-4 border-violet-700 w-10 h-10 rounded-full animate-spin"></div>
        </div>
    )
}
