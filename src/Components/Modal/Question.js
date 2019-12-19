import React from 'react';

function Question(props) {
  const {
    showModal, qParams, onYes, onCancel,
  } = props;


  const modalClassName = showModal === true ? 'modal bd-example-modal-sm' : 'modal fade bd-example-modal-sm';

  const style = {};

  if (showModal === true) {
    style.display = 'block';
  }

  return (
    <div
      className={modalClassName}
      style={style}
      id="staticBackdrop"
      data-backdrop="static"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div className="modal-content">
          <div className="modal-body">
            { qParams.text }
          </div>
          <div className="modal-footer py-0">
            <button
              type="button"
              className="btn btn-success"
              onClick={onYes}
            >
            Ano
            </button>
            <button
              type="button"
              className="btn"
              onClick={onCancel}
            >
            Zrušení
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
