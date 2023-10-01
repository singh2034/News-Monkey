import React from "react";

const NewItem = (props) => {
  let { title, description, imageUrl, url, author, date, source } = props;
  return (
    <>
      <div className=" mt-4 card">
        <span
          className="position-absolute top-0 translate-middle badge
                   rounded-pill bg-danger"
          style={{ left: "80%", zIndex: "1" }}
        >
          {source}
        </span>

        <img src={imageUrl} className="card-img-top" alt="pitch" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <p className="card-text">{description}</p>

          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>

          <a
            href={url}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-warning"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewItem;
