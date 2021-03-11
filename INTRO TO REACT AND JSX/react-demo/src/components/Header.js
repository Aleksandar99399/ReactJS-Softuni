function Header(props) {
  return (
    <header className="header">
      <h1>{props.children}</h1>
      <h2>The Best Framework On The World</h2>
    </header>
  );
}

export default Header;
