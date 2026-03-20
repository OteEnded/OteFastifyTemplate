import { DataTypes } from "sequelize";
import logMessageModel from "./log_message.model.js";
import logRequestModel from "./log_request.model.js";

export default function initModels(sequelize, schema) {
    const choices = {
        log_messages_level: ["info", "warning", "error"],
    };

    const hooks = {
        // tableXX: {
        //     beforeSave(instance) {
        //         XXX
        //     },
        // },
        
    };

    const LogMessages = logMessageModel(sequelize, DataTypes, schema, choices, hooks);
    const LogRequests = logRequestModel(sequelize, DataTypes, schema, choices, hooks);

    return {
        models: {
            LogMessages,
            LogRequests
        },
        choices,
    };
}
