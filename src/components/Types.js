import PropTypes from "prop-types";

export const ChildrenType = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.object,
  PropTypes.element,
  PropTypes.node,
  PropTypes.string,
]);
