import PropTypes from "prop-types";

const Child = ({ count }) => {
  return (
    <div>
      ChildComponent
      <br />
      ParentCount: {count}
    </div>
  );
};
Child.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Child;
