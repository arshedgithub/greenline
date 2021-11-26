import React from "react";

const Contact = () => {
  return (
    <div className="m-5 text-center">
      <p className="fs-3 fw-bold">Customer Support</p>
      <p className="text-muted">How can we assist you?</p>
      <div className="row row-cols-1 row-cols-sm-2">
        <div className="col my-3">
          <p className="fs-4 fw-bold">Call Support</p>
          image
          <h5>(+94) 11-7112-599</h5>
          <p>
            This is an ordinary landline, not an expensive service number. You
            will be charged at the usual rates, just like for a call to any
            other number in Sri Lanka.
          </p>
        </div>
        <div className="col my-3">
          <p className="fs-4 fw-bold">Email Support</p>
          image
          <h5>support@greenline.lk</h5>
          <p>
            When we are roughly located, our usual response times range from a
            few minutes to a few hours depending on the number of emails we
            receive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
