import React, { ReactNode } from "react";

interface DialogProps {
  id: string;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: string; // ex: "modal-lg", "modal-sm"
}

const Dialog: React.FC<DialogProps> = ({
  id,
  title,
  children,
  footer,
  size = "",
}) => {
  return (
    <div className="modal fade" id={id} tabIndex={-1} aria-hidden="true">
      <div className={`modal-dialog modal-dialog-centered ${size}`}>
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          {/* Body */}
          <div className="modal-body">{children}</div>

          {/* Footer (optional) */}
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
