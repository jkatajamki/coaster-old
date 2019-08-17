import React from 'react';

const AuthenticationPage = ({ mainSectionChildren, bottomSectionChildren }) => {
  return (
    <div className="authentication">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-lg-6">
            <div className="main-authentication main-center content-section">
              {mainSectionChildren}
            </div>
          </div>
        </div>
        <div className="row mt-4 justify-content-md-center">
          <div className="col-lg-6 text-center">
            {bottomSectionChildren}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationPage;
