import React from "react";
import PropTypes from "prop-types"; // ES6

export default function UserCard(props) {
  const { users, onSendMessage } = props;

  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "15px",
        textAlign: "center",
        width: "300px",
        margin: "10px",
      }}
    >
      <p>
        {users.name} {users.surname}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "10px",
        }}
      >
        <button>Отправить запрос</button>
        <button onClick={onSendMessage}>Написать письмо</button>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  }).isRequired,
  onSendMessage: PropTypes.func.isRequired,
};

UserCard.defaultProps = {
  onSendMessage() {},
};
