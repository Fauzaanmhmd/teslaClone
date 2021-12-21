import type { NextPage } from 'next'
import Header from "./Header"
import styles from '../styles/Home.module.css'
import Section from "./Section"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Section title="Model 3" description="Order Online for Touches Delivery" bg="model3" id="model3" />
      <Section title="Model X" description="Order Online for Touches Delivery" bg="modelx" id="modelx" />
      <Section title="Model Y" description="Order Online for Touches Delivery" bg="modely" id="modely" />
      <Section title="Solar Panels" description="Lowest Cost Solar Panels in America" bg="panels" id="panels" />
      <Section title="Solar Roof" description="Produce Clean Energy From Your Roof" bg="roof" id="roof" />
      <Section title="Accessories" description="" bg="acc" id='acc' />

    </div>
  )
}

export default Home
