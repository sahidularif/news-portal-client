import React from 'react';
import {
    BrowserRouter as Router, Switch
} from "react-router-dom";
import DashboardLayout from './DashboardLayout/DashboardLayout';
import AddAdmin from './Pages/AddAdmin';
import PostArticle from './Pages/PostArticle';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const Dashboard = () => {
    return (
        <>
            <Router>
                <Switch>
                    <PrivateRoute exact path="/dashboard" component={DashboardLayout}></PrivateRoute>
                    <PrivateRoute exact path="/dashboard/post-article">
                        <DashboardLayout title='Post Article'>
                            <PostArticle />
                        </DashboardLayout>
                    </PrivateRoute>
                    <PrivateRoute exact path="/dashboard/add-admin">
                        <DashboardLayout title='Add Admin'>
                            <AddAdmin />
                        </DashboardLayout>
                    </PrivateRoute>
                </Switch>
            </Router>
        </>
    );
};

export default Dashboard;