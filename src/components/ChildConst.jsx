import PropTypes from "prop-types";

ChildConst.propTypes = {
  count: PropTypes.number.isRequired,
};

const ChildConst = ({ count }) => {
  return (
    <div>
      Child Const Component
      <br />
      ParentCount: {count}
    </div>
  );
};

export default ChildConst;
