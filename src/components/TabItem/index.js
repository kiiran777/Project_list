import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const tabClassName = isActive ? 'active-tab-btn' : ''

  const onClick = () => {
    updateTabItem(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${tabClassName}`}
        onClick={onClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
