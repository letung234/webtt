"use strict";
exports.__esModule = true;
var express_1 = require("express");
var handler_1 = require("~/utils/handler");
var validates_middlewares_1 = require("~/middlewares/validates.middlewares");
var user_controllers_api_1 = require("~/controllers/api/user.controllers.api");
var ApiUserRouter = express_1.Router();
ApiUserRouter.post('/create', validates_middlewares_1.createUserValidator, handler_1.wrapRequestHandler(user_controllers_api_1.PostCreateUsers));
ApiUserRouter.patch('/edit/:id', validates_middlewares_1.updateUserValidator, handler_1.wrapRequestHandler(user_controllers_api_1.PatchEditUsers));
ApiUserRouter["delete"]('/delete/:id', handler_1.wrapRequestHandler(user_controllers_api_1.DeleteUser));
ApiUserRouter.post('/login', validates_middlewares_1.loginValidator, handler_1.wrapRequestHandler(user_controllers_api_1.PostLoginUser));
ApiUserRouter.post('/logout', handler_1.wrapRequestHandler(user_controllers_api_1.PostLogoutUser));
exports["default"] = ApiUserRouter;