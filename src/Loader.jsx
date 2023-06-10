import React from 'react';
import { css } from '@emotion/react';
import Swal from 'sweetalert2';
const Loader = ({ loading }) => {
  const renderLoader = () => {
    if (loading) {
      Swal.fire({
        title: 'Loading...',
        html: '<div css={loaderStyle}></div>',
        showConfirmButton: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.hideLoading();
        },
      });
    }
    else {
      Swal.close();
    }
  };

  return <>{renderLoader()}</>;
};

export default Loader;

