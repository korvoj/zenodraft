"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add_file_to_deposition = void 0;
const node_fetch_1 = require("node-fetch");
const fs = require("fs");
const details_1 = require("deposition/show/details");
const mime = require("mime-types");
const get_access_token_from_environment_1 = require("helpers/get-access-token-from-environment");
const add_file_to_deposition = (sandbox, id, filename, verbose = false) => __awaiter(void 0, void 0, void 0, function* () {
    if (verbose) {
        console.log(`adding file ${filename} to deposition with id ${id}...`);
    }
    const access_token = get_access_token_from_environment_1.get_access_token_from_environment(sandbox);
    const deposition = yield details_1.get_deposition_details(sandbox, id);
    const bucket = deposition.links.bucket;
    const content_type = mime.contentType(filename) ? mime.contentType(filename) : 'text/plain';
    const stream = fs.createReadStream(filename);
    const method = 'PUT';
    const headers = {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': content_type,
        'Content-Length': (fs.statSync(filename).size).toString()
    };
    const init = { method, headers, body: stream };
    let response;
    try {
        response = yield node_fetch_1.default(`${bucket}/${filename}`, init);
        if (response.ok !== true) {
            throw new Error();
        }
    }
    catch (e) {
        console.debug(response);
        throw new Error(`Something went wrong on ${method} to ${bucket}/${filename}: ${response.status} - ${response.statusText} `);
    }
});
exports.add_file_to_deposition = add_file_to_deposition;