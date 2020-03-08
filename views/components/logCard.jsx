const React = require('react')

const LogCard = props => {
  return (
    <div className="card w-100">

      <a className="text-dark" data-toggle="collapse" href={`#collapse${props.index}`} role="button" aria-expanded="false" aria-controls="collapseExample">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <div className="row">
              <div className="col-6">Date: {props.elem.date}</div>
              <div className="col-6">Location: {props.elem.location}</div>
            </div>
          </h5>
        </div>
      </a>
      <div id={`collapse${props.index}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div className="card-body">
          <a href="#" className="list-group-item list-group-item-action list-group-item-action">BLS Count: {props.elem.bls}</a>
          <a href="#" className="list-group-item list-group-item-action list-group-item-action">ALS Count: {props.elem.als}</a>
          <a href="#" className="list-group-item list-group-item-action list-group-item-action">Time spent holding the wall: {props.elem.holdWall}</a>
          <a href="#" className="list-group-item list-group-item-action list-group-item-action">Canceled calls: {props.elem.cancels}</a>
          <a href="#" className="list-group-item list-group-item-action list-group-item-action">Total calls: {props.elem.bls + props.elem.als + props.elem.cancels}</a>
          <a href="#" className="btn btn-danger btn-xsm float-right mt-3 mb-3" type="submit">Delete</a>
        </div>
      </div>
    </div>
  )
}

module.exports = LogCard