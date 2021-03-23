import ChatFeed from './components/ChatFeed.jsx'
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm';
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="9dc8e4ba-895f-49ca-8d31-d3badd986562"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

    />
  );
}

export default App;
