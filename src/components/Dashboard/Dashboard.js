import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import DashboardLayout from './DashboardLayout/DashboardLayout';
import PostArticle from './Pages/PostArticle';

const Dashboard = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/dashboard" component={DashboardLayout}></Route>
                    <Route exact path="/dashboard/post-article">
                        <DashboardLayout title='post-article'>
                            <PostArticle />
                        </DashboardLayout>
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default Dashboard;