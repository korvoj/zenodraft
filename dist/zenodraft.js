"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("./file/add");
const cli_1 = require("./cli");
const in_existing_collection_1 = require("./deposition/create/in-existing-collection");
const in_new_collection_1 = require("./deposition/create/in-new-collection");
const delete_1 = require("./file/delete");
const delete_2 = require("./deposition/delete");
const get_access_token_from_environment_1 = require("./helpers/get-access-token-from-environment");
const get_api_1 = require("./helpers/get-api");
const details_1 = require("./deposition/show/details");
const latest_1 = require("./deposition/show/latest");
const prereserved_1 = require("./deposition/show/prereserved");
const publish_1 = require("./deposition/publish");
const update_1 = require("./metadata/update");
const validate_in_collection_value_1 = require("./helpers/validate-in-collection-value");
exports.default = {
    file_add: add_1.file_add,
    cli: cli_1.cli,
    deposition_create_in_existing_collection: in_existing_collection_1.deposition_create_in_existing_collection,
    deposition_create_in_new_collection: in_new_collection_1.deposition_create_in_new_collection,
    file_delete: delete_1.file_delete,
    deposition_delete: delete_2.deposition_delete,
    get_access_token_from_environment: get_access_token_from_environment_1.get_access_token_from_environment,
    get_api: get_api_1.get_api,
    deposition_show_details: details_1.deposition_show_details,
    deposition_show_latest: latest_1.deposition_show_latest,
    deposition_show_prereserved: prereserved_1.deposition_show_prereserved,
    deposition_publish: publish_1.deposition_publish,
    metadata_update: update_1.metadata_update,
    validate_in_collection_value: validate_in_collection_value_1.validate_in_collection_value
};
