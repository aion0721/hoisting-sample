import PropTypes from "prop-types";

ChildFunction.propTypes = {
  count: PropTypes.number.isRequired,
};

function ChildFunction({ count }) {
  return (
    <div>
      Child Function Component
      <br />
      ParentCount: {count}
    </div>
  );
}

export default ChildFunction;
