import { useState } from 'react'

import initialEmails from './data/emails'

import './App.css'
import Header from './components/Header.js'
import LeftMenu from './components/LeftMenu'
import Emails from './components/Emails'

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [searchValue, setSearchValue] = useState("")

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  if(searchValue !== "") filteredEmails = filteredEmails.filter(email =>
    ['title', 'sender'].some(key => email[key].toLowerCase().includes(searchValue.toLowerCase())
  ))

  return (
    <div className="app">
     <Header setSearchValue={setSearchValue}/>

     <LeftMenu 
     currentTab={currentTab}
     setCurrentTab={setCurrentTab}
     emails={emails}
     hideRead={hideRead}
     setHideRead={setHideRead}/>

    <Emails 
    filteredEmails={filteredEmails}
    toggleRead={toggleRead}
    toggleStar={toggleStar}/>
      
    </div>
  )
}

export default App
