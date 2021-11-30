import React from 'react';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          {/* <!-- SideBar --> */}
          <SideBar />
           {/* <!-- ContentWrapper --> */}
          <ContentWrapper />
        </div>
    </React.Fragment>
  );
}

export default App;
