function EmailTitle(props){
    return(
        <div className="email-title">
          <button onClick={()=>props.setSelectedEmail(null)}>{`< Back`}</button>
        <h1>Welcome to Flaticon</h1>
      </div>
    )
}

export default EmailTitle