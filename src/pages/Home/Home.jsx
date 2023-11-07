import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='topHome'>
        <h2>Welcome to Peralta's Cat Rescue!</h2>
        <p className='est'>Est. October, 2023</p>
        <p>Non-profit organization</p>
        <p>Rescue for cats</p>
        <p>Ontario, California</p>
      </div>
      <div className="donate">
        <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="business" value="2BQN73RCV43XL" />
          <input type="hidden" name="no_recurring" value="0" />
          <input type="hidden" name="item_name" value="Please do not donate. This website was created for my resume." />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </div>
  )
}

export default Home;