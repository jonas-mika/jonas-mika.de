import Subpage from './Subpage';

const NotFound = () => {
  return (
    <div id="NotFound" className="NotFound">
      <div className="main-container">
        <Subpage
          title={"404"}
          subtitle={"/ sorry, this page does not exist"}
        />
      </div>
    </div>
  );
}

export default NotFound;
