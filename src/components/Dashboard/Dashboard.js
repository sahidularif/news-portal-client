import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import DashboardLayout from './DashboardLayout/DashboardLayout';
import AddAdmin from './Pages/AddAdmin';
import PostArticle from './Pages/PostArticle';

const Dashboard = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/dashboard" component={DashboardLayout}></Route>
                    <Route exact path="/dashboard/post-article">
                        <DashboardLayout title='Post Article'>
                            <PostArticle />
                        </DashboardLayout>
                    </Route>
                    <Route exact path="/dashboard/add-admin">
                        <DashboardLayout title='Add Admin'>
                            <AddAdmin />
                        </DashboardLayout>
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default Dashboard;