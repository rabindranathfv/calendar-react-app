import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';

import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
  return (
    <div>
      <h1>App Router</h1>

      <Router>
        <Routes>
            <Route
                path="/login"
                element={
                  <LoginScreen />
                }
            />

            <Route
                path="/*"
                element={
                    <CalendarScreen />
                }
            />

        <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
      </Router>
    </div>
  )
}
