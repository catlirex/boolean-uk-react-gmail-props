import EmailContentHeader from '../components/EmailContent/EmailContentHeader'
import EmailTitle from '../components/EmailContent/EmailTitle'
import EmailActionBar from '../components/EmailContent/EmailActionBar'
import EmailBody from '../components/EmailContent/EmailBody'

import "../style/EmailContent.css"

function EmailContent(props){
    if(props.selectedEmail === null) return null
    return (
        <article>
        <EmailTitle setSelectedEmail={props.setSelectedEmail}/>
          <EmailContentHeader/>
          <EmailBody/>
          <EmailActionBar/>
        </article>
    )
}

export default EmailContent