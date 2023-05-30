"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.datasource = void 0;
var express_1 = __importDefault(require("express"));
var typeorm_1 = require("typeorm");
var app = (0, express_1.default)();
exports.datasource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "11111111",
    database: "typeorm",
    logging: true,
    synchronize: true,
    entities: ['**/entity/*.entity.js']
});
exports.datasource.initialize()
    .then(function () { return console.log("database connected"); })
    .catch(function (err) {
    console.error(err);
    process.exit(1);
});
app.listen(3000, function () {
    console.log('listening on port 3000');
});
//# sourceMappingURL=app.js.map