import React from "react";

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  return (
    <div
      className="modal modalContact"
      tabIndex={-1}
      style={{
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-dark" id="exampleModalLabel">
              Get in touch
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="input-group mt-5">
                <div className="input-group-text bg-transparent border-right-0">
                  <i className="bi bi-person-raised-hand text-muted"></i>
                </div>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Your Name"
                />
              </div>
              <div className="input-group mt-5">
                <div className="input-group-text bg-transparent border-right-0">
                  <i className="bi bi-envelope text-muted"></i>
                </div>
                <input
                  type="email"
                  className="form-control border-start-0"
                  placeholder="Your e-mail"
                />
              </div>

              <div className="input-group mt-5">
                <div className="input-group-text bg-transparent border-right-0 align-items-start">
                  <i className="bi bi-pen text-muted"></i>
                </div>
                <textarea
                  className="form-control border-start-0"
                  rows={6}
                  placeholder="Your message"
                ></textarea>
              </div>

              <button className="btn orangeBgColor text-light mt-5">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
