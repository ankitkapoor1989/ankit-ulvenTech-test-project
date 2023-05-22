import userSlice, { initialState, getUserListThunk } from "./userSlice";
import { getUserListResponse } from "../utils/tests.data";
import { store } from "./store";

jest.mock("axios", () => ({
    get: jest.fn(),
}));

describe("List all users api", () => {
    it("Shoudl be able to fetch the user list", async () => {
        const result = await store.dispatch(getUserListThunk());

        const users = result.payload;

        expect(result.type).toEqual("user/fetchAllUsersList/fulfilled");
        expect(users).toEqual(getUserListResponse);

        const state = store.getState().userList;

        // Fetched data from api

        expect(state.users.length).toBe(10);
    });

    it("Shoudl be able to error message in user api", async () => {
        const action = {
            type: getUserListThunk.rejected.type
        }
        expect(action.type).toEqual("user/fetchAllUsersList/rejected");

        const users = []
        expect(users.length).toBe(0);
    });
});
