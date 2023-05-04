import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';

import { App } from './components/editor-with-mask';
import { itemGroup } from './data';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App itemGroup={itemGroup} mask={false} />
  </React.StrictMode>
);
