import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Hello'/>
      <Button color='violet' text='Hi'/>
      <Button color='black' text='Good Evening'/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Hello World!',
}

// const headingStyle = {
//     color: 'blue',
//     backgroundColor: 'navy'
// }
export default Header
