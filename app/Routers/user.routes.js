System.register(["../Components/UsersViewComponent", "../Components/UserInfoComponent", "../Components/UserRegisterComponent", "../Components/UserLoginComponent"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsersViewComponent_1, UserInfoComponent_1, UserRegisterComponent_1, UserLoginComponent_1;
    var UserRoutes;
    return {
        setters:[
            function (UsersViewComponent_1_1) {
                UsersViewComponent_1 = UsersViewComponent_1_1;
            },
            function (UserInfoComponent_1_1) {
                UserInfoComponent_1 = UserInfoComponent_1_1;
            },
            function (UserRegisterComponent_1_1) {
                UserRegisterComponent_1 = UserRegisterComponent_1_1;
            },
            function (UserLoginComponent_1_1) {
                UserLoginComponent_1 = UserLoginComponent_1_1;
            }],
        execute: function() {
            exports_1("UserRoutes", UserRoutes = [
                { path: "UsersView", component: UsersViewComponent_1.UsersViewComponent },
                { path: "UserInfo:id", component: UserInfoComponent_1.UserInfoComponent },
                { path: "UserRegister", component: UserRegisterComponent_1.UserRegisterComponent },
                { path: "UserLogin", component: UserLoginComponent_1.UserLoginComponent }
            ]);
        }
    }
});

//# sourceMappingURL=user.routes.js.map
