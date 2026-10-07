import React from 'react';
import EventHandlingDemo from './components/ex16/EventHandlingDemo';
import RenderAndCommitDemo from './components/ex17/RenderAndCommitDemo';
import SnapshotDemo from './components/ex18/SnapshotDemo';
import Animals from './components/ex19/Animals';

const App = () => {
  return (
    <React.StrictMode>
      <div style={{ padding: '20px' }}>
        <EventHandlingDemo />
        <hr style={{ margin: '30px 0' }} />
        <RenderAndCommitDemo />
        <hr style={{ margin: '30px 0' }} />
        <SnapshotDemo />
        <hr style={{ margin: '30px 0' }} />
        <Animals />
      </div>
    </React.StrictMode>
  );
};

export default App;