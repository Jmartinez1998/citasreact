

const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase mb-3 rounded-sm">
        <p>{children}</p>
    </div> 
  )
}

export default Error
