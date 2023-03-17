import Container from './container'

const Footer = () => {
  return (
    <footer className="border-t py-10 border-neutral-200 bg-neutral-50">
      <Container>
        <p className="mb-10 text-left text-base lg:mb-0 lg:w-1/2 lg:pr-4">
          © Min Thu Aung {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  )
}

export default Footer
