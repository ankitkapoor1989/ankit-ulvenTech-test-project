import React, { useEffect, useRef } from "react";
import "./UserList.scss";
import UserCard from "../UserCard/UserCard";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import { getUserListThunk } from "../../redux/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";

const UserList = () => {
    const refControl = useRef(true);
    const dispatch = useAppDispatch();
    const userState = useAppSelector((state) => state.userList);

    useEffect(() => {
        if (refControl.current) {
            dispatch(getUserListThunk());
            refControl.current = false;
        }
    });

    const renderUserList = () => {
        return (
            <div className="user-list">
                <h2>List of Users</h2>
                <div className="user-container" data-testid="userlist">
                    {userState.users.map((item, index) => {
                        return <UserCard key={index} data={item} />;
                    })}
                </div>
            </div>
        );
    };

    const renderErrorScreen = () => {
        return (
            <div className="user-list">
                Oh no! Something went wrong. {userState.error}
            </div>
        );
    };

    const renderLoading = () => {
        return <LoadingSpinner />;
    };

    return (
        <div className="user-wrapper">
            {userState.loading && renderLoading()}
            {!userState.loading && userState.error ? renderErrorScreen() : null}
            {!userState.loading && userState.users.length ? renderUserList() : null}
        </div>
    );
};

export default UserList;
