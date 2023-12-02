import PropTypes from "prop-types";

const ChildConst = ({ count }) => {
  return (
    <div>
      Child Const Component
      <br />
      ParentCount: {count}
    </div>
  );
};
ChildConst.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ChildConst;
