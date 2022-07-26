import Modal from '../layout/Modal';

const Chart = (props) => {
  return (
    <Modal onClose={props.onHideChart}>
      <h1>Hi</h1>
      <button className="btn btn-primary" onClick={props.onHideChart}>
        Close
      </button>
    </Modal>
  );
};

export default Chart;
