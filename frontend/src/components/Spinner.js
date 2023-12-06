const Spinner = () => {
    return (
        <div className="flex justify-center items-center"> 
        {/* h-screen */}
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>   
        </div>
    );
};

export default Spinner;