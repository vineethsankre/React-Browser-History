import {Component} from 'react'
import './App.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    historyDetails: initialHistoryList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDelete = id => {
    const {historyDetails} = this.state
    const filteredHistory = historyDetails.filter(each => each.id !== id)
    this.setState({
      historyDetails: filteredHistory,
    })  
  }

  render() {
    const {searchInput, historyDetails} = this.state
    const historyResults = historyDetails.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <nav className="header-container">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-container">
            <div className="search-icon-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <input
              className="search-input-box"
              type="search"
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </nav>
        historyResults.length === 0 ? (
          <p>There is no history to show</p>
        ) : (
        <ul className="list-container">
          {historyResults.map(historyItem => (
            <li className="history-list-item" key={historyItem.id}>
              <p className="time-text">{historyItem.timeAccessed}</p>
              <img
                className="domain-logo"
                src={historyItem.logoUrl}
                alt="domain logo"
              />
              <p className="title">{historyItem.title}</p>
              <p className="domain-url">{historyItem.domainUrl}</p>
              <button
                data-testid="delete"
                type="button"
                className="delete-button"
                onClick={() => this.onDelete(historyItem.id)}
              >
                <img
                  className="delete-icon"
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                  alt="delete"
                />
              </button>
            </li>
          ))}
        </ul>)
      </div>
    )
  }
}
export default App
