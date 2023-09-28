import { useState } from 'react'
import './App.css'

function App() {

  const [items, setItems] = useState([])
  const [randomItem, setRandomItem] = useState(null)
  const [randomImage1, setRandomImage1] = useState(null)
  const [randomImage2, setRandomImage2] = useState(null)

  const fetchItems = async () => {
    const data = await fetch('src/components/items.json')
    const items = await data.json()
    setItems(items)
  }

  const randomiseImage1 = () => {
    const itemsWithImage = items.filter(item => item.image)
    const randomItem = itemsWithImage[Math.floor(Math.random() * itemsWithImage.length)]
    setRandomImage1(randomItem)
  }

  const randomiseImage2 = () => {
    const itemsWithImage = items.filter(item => item.image)
    const randomItem = itemsWithImage[Math.floor(Math.random() * itemsWithImage.length)]
    setRandomImage2(randomItem)
  }

  const randomiseItem = () => {
    const itemsWithImage = items.filter(item => item.image)
    const randomItem = itemsWithImage[Math.floor(Math.random() * itemsWithImage.length)]
    setRandomItem(randomItem)
  }

  async function handleClick() {
    await fetchItems()
    randomiseItem()
    randomiseImage1()
    randomiseImage2()
  }

  return (
    <>
      <div>
        <h1>Cool Skins Collecter</h1>
        <button onClick={handleClick}>Randomize Skins</button>
        {randomItem && <p>{randomItem.name}</p>}
        <div className='RandomImages'>
        <button onClick={handleClick} className='buttontut'> {randomItem && <img src={randomItem.image}/>}</button>
        <button onClick={handleClick} className='buttontut'> {randomItem && <img src={randomImage1.image}/>}</button>
        <button onClick={handleClick} className='buttontut'> {randomItem && <img src={randomImage2.image}/>}</button>
        </div>
      </div>
    </>
  )
}



export default App