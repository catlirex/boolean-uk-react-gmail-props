import Email from "./Email"
import "../style/Emails.css"

function Emails(props){
  if (props.selectedEmail !== null) return null 
    return (
        <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => (
            <Email 
            setSelectedEmail={props.setSelectedEmail}
            key={index}
            email={email}
            toggleRead={props.toggleRead}
            toggleStar={props.toggleStar}/>
          ))}
        </ul>
      </main>
    )
}

export default Emails