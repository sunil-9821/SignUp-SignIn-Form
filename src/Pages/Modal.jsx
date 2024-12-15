function Modal({ show, onClose, errorMessage }) {
  console.log(show);
  if (!show) return null;
  console.log(show);

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* <div className="modal-header">
            <h5
              className={`modal-title ${
                Object.keys(errorMessage).length > 0
                  ? "text-danger"
                  : "text-success"
              }`}
            >
              {Object.keys(errorMessage).length > 0
                ? "Validation Errors"
                : "Success"}
            </h5>
          </div> */}
          <div
            className={`modal-body ${
              Object.keys(errorMessage).length > 0
                ? "text-danger"
                : "text-success"
            }`}
          >
            {Object.keys(errorMessage).length > 0
              ? "All fields are mandatory! Please fill out the form correctly."
              : "Form submitted successfully!"}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className={`btn ${
                Object.keys(errorMessage).length > 0
                  ? "btn-danger"
                  : "btn-success"
              }`}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
