/**
 * This class isn't being used.
 */
import * as React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
		<DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-w">
			<LogMonitor />
		</DockMonitor>
);