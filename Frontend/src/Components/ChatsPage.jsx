import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    `0c19e4b9-8beb-457b-a0bd-6800d4e8b11b`,
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: `100vh` }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: `100%` }} />
    </div>
  );
};

export default ChatsPage;
