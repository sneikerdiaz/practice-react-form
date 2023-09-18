import "./styles/modal.css";

const Modal = ({ show, handleClose, firstName, lastName }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>Thanks for submitting the form!</h2>
        <p>
          <b>Your first name is:</b> {firstName}
        </p>
        <p>
          <b>Your last name is:</b> {lastName}
        </p>
        <p className="message">Press the button bellow to close the modal.</p>
        <button type="button" onClick={handleClose}>
          I'm done.
        </button>
      </section>
    </div>
  );
};

export default Modal;
