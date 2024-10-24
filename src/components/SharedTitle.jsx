
const SharedTitle = ({subtitle, title, text}) => {

  return (
    <div className="text-center my-20">
        <h4 className="text-red-500">{subtitle}</h4>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-sm">{text}</p>

    </div>
  )
}

export default SharedTitle